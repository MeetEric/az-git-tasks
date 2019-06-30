import { assert } from 'chai';
import { GitLogParser } from '../../../index';
import { IStorage, FileSystemStorage } from 'meeteric-ts';

import "mocha";

describe('GitLogParserTests', () => {
    const storage: IStorage = new FileSystemStorage( `${__dirname}/resources`);

    it('should return multiple commits', async () => {
        const data = await storage.ReadItem('GitLog.txt');
        const results = GitLogParser.ParseLog(data);
        assert.equal(5, results.length);
    });

    it('should return extract Date', async () => {
        const data = await storage.ReadItem('SimpleCommit.txt');
        const result = GitLogParser.ParseGitCommitLog(data);
        assert.deepEqual(new Date('2019-01-03T20:00:00.000Z'), result.Date);
    });

    it('should handle single line commit messages', async () => {
        const data = await storage.ReadItem('SingleLineCommitMessage.txt');
        const result = GitLogParser.ParseGitCommitLog(data);
        assert.equal("Single line message", result.Message.Title);
    });

    it('should handle multi-line commit messages', async () => {
        const data = await storage.ReadItem('MultiLineCommitMessage.txt');
        const result = GitLogParser.ParseGitCommitLog(data);
        assert.equal("Line 1\r\n    Line 2", result.Message.Details);
    });
});