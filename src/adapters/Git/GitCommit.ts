import * as Contracts from '../../contracts';

export class GitCommit {
    public readonly Hash: Contracts.IGitHash;
    public readonly Author: Contracts.IEmailIdentity;
    public readonly Date: Date;
    public readonly Message: Contracts.IGitMessage;

    constructor(hash: Contracts.IGitHash, author: Contracts.IEmailIdentity, date: Date, message: Contracts.IGitMessage) {
        this.Hash = hash;
        this.Author = author;
        this.Date = date;
        this.Message = message;
    }
}