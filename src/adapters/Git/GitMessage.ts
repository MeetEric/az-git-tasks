import * as Contracts from '../../contracts';

export class GitMessage implements Contracts.IGitMessage {
    public readonly Title: string;
    public readonly Details: string;

    constructor(title: string, details: string = null) {
        this.Title = title;
        this.Details = details;
    }

    public static Parse(text: string): GitMessage {
        const regex = /^\s{0,5}([^\n]+)\n((.|\s)+)/;
        const trimmed = text.trim();
        const m = regex.exec(trimmed);

        let result: GitMessage;
        if (m == null) {
            result = new GitMessage(trimmed);
        } else {
            result = new GitMessage(m[1].trim(), m[2].trim());
        }

        return result;
    }
}