import { GitCommit } from "./GitCommit";
import { GitHash } from "./GitHash";
import { GitAuthor } from "./GitAuthor";
import { GitMessage } from "./GitMessage";

export class GitLogParser {

    public static ParseLog(log: string): any[] {
        const results = [];
        const lines = log.split("\n");
        let commit = [];

        while (lines.length > 0) {
            const commitLine = lines.pop();
            commit.push(commitLine);

            if (commitLine.startsWith('commit ')) {
                const text = commit.reverse().join("\n");
                results.push(GitLogParser.ParseGitCommitLog(text));
                commit = [];
            }
        }

        return results;
    }

    public static ParseGitCommitLog(commit: string): GitCommit {
        const lines = commit.split("\n").reverse();
        const hash = GitHash.Parse(lines.pop());
        const author = GitAuthor.Parse(lines.pop());
        const date = this.AsDate(lines.pop());
        const message = GitMessage.Parse(lines.reverse().join("\n"));
        return new GitCommit(hash, author, date, message);
    }

    private static AsDate(commitDate: string): Date {
        return new Date(this.TrimPrefix("Date", commitDate));
    }

    private static TrimPrefix(prefix: string, item: string): string {
        let x = item.trim();

        if (x.startsWith(prefix)) {
            x = x.substring(8);
        }

        return x;
    }
}