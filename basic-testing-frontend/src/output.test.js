import { it, expect, describe } from 'vitest';
import { generateResultText } from './output.js';

describe('generateResultText()', () => {
    it('returns a string no matter which value is passed in', () => {
        const val1 = 1;
        const val2 = 'invalid';
        const val3 = false;

        const results = [val1, val2, val3].map(val => generateResultText(val));
        expect(results.every(res => typeof res === 'string')).toBeTruthy();
    });

    it('should return a string that contains the calculation result if a number is provided as a result', () => {
        const result = 5;

        const resultText = generateResultText(result);

        expect(resultText).toContain(result.toString());
    });

    it('should return an empty string if "no-calc" is provided as a result', () => {
        const result = 'no-calc';

        const resultText = generateResultText(result);

        expect(resultText).toBe('');
    });

    it('should return a string that contains "Invalid" if "invalid" is provided as a result', () => {
        const result = 'invalid';

        const resultText = generateResultText(result);

        expect(resultText).toContain('Invalid');
    });
});
