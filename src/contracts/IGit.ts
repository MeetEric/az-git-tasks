export interface IIdentifier {
    AsString(): string;
}

export interface IGitHash extends IIdentifier {
    readonly Full: string;
    readonly Short: string;
}

export interface IEmailIdentity {
    readonly Name: string;
    readonly Email: string;
}

export interface IGitMessage {
    readonly Title: string;
    readonly Details: string;
}

export interface IGitCommit {
    readonly Hash: IIdentifier;
    readonly Author: IEmailIdentity;
    readonly DateTime: Date;
    readonly Message: IGitMessage;
}

export interface IGitOperations {
    Log(limit: number) :  Promise<IGitCommit[]>;
}