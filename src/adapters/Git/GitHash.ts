import * as Contracts from '../../contracts';

export class GitHash implements Contracts.IGitHash {
    public readonly Full: string;
    public readonly Short: string;

    constructor(hash: string) {
        this.Full = hash;
        this.Short = hash.substr(0, 8);
    }

    public AsString(): string {
        return `commit: ${this.Full}`;
    }

    public static Parse(text: string): GitHash {
        const regex = /[a-z\d]{40}/;
        const m = regex.exec(text);

        if (m == null) {
            throw new Error(`Invalid GitHhash '${text}'`);
        }

        return new GitHash(m[0]);
    }
}