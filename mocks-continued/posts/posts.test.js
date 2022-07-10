import { it, describe, expect, beforeEach } from 'vitest';
import { extractPostData } from './posts';

const testTitle = 'Test title';
const testContent = 'Test content';
let testFormData;

describe('extractPostData()', () => {
    beforeEach(() => {
        testFormData = {
            title: testTitle,
            content: testContent,
            get(id) {
                return this[id];
            },
        };
    });

    it('should extract title and content from the provided form', () => {
        const data = extractPostData(testFormData);

        expect(data.title).toBe(testTitle);
        expect(data.content).toBe(testContent);
    });
});
