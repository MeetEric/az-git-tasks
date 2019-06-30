import { assert } from 'chai';
import { GitAuthor } from '../../../index';

import "mocha";

describe('GitAuthorTests', () => {
    it('should perform basic extraction without Author', async () => {
        const input = "Test User <test@test.com>";
        const result = GitAuthor.Parse(input);
        assert.equal("Test User", result.Name);
        assert.equal("test@test.com", result.Email);
    });

    it('should perform basic extraction with Author:', async () => {
        const input = "Author: Test User <test@test.com>";
        const result = GitAuthor.Parse(input);
        assert.equal("Test User", result.Name);
        assert.equal("test@test.com", result.Email);
    });

    it('should perform extraction without name', async () => {
        const input = "<test@test.com>";
        const result = GitAuthor.Parse(input);
        assert.equal("test@test.com", result.Email);
    });
});