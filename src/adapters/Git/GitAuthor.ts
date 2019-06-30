import * as Contracts from '../../contracts';

export class GitAuthor implements Contracts.IEmailIdentity {
    public readonly Name: string;
    public readonly Email: string;

    constructor(email: string, name: string = null) {
        this.Name = name;
        this.Email = email;
    }

    public static Parse(text: string): GitAuthor {
        const regex = /^(Author:)?\s*([^<\n]*?)\s*<([^>\n]*?)>/;
        const x = text.trim();
        const m = regex.exec(x);

        if (m == null) {
            throw new Error(`Invalid GitAuthor '${text}'`);
        }

        return new GitAuthor(m[3], m[2]);
    }

    public AsString(): string {
        return `Author: ${this.Name} <${this.Email}>`;
    }
}