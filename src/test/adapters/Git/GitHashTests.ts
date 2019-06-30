import { assert } from 'chai';
import { GitHash } from '../../../index';

import "mocha";

describe('GitHashTests', () => {
    it('should perform basic extraction without commit', async () => {
        const input = "bc92a15bc900acb04b867f8124f1dce90e6ad03c";
        const result = GitHash.Parse(input);
        assert.equal("bc92a15bc900acb04b867f8124f1dce90e6ad03c", result.Full);
    });

    it('should perform basic extraction with commit', async () => {
        const input = "commit bc92a15bc900acb04b867f8124f1dce90e6ad03c";
        const result = GitHash.Parse(input);
        assert.equal("bc92a15bc900acb04b867f8124f1dce90e6ad03c", result.Full);
    });


    it('should contain short commit', async () => {
        const input = "commit bc92a15bc900acb04b867f8124f1dce90e6ad03c";
        const result = GitHash.Parse(input);
        assert.equal("bc92a15b", result.Short);
    });
});