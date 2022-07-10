import { describe, it, expect } from 'vitest';
import { validateNotEmpty } from './validation';

describe('validationNotEmpty()', () => {
    it('throws an error if an empty string is provided', () => {
        const resultFn = () => validateNotEmpty('', '');
        expect(resultFn).toThrow();
    });

    it('returns a specific message when an error is thrown', () => {
        const msg = 'Invalid input!';
        const resultFn = () => validateNotEmpty('', msg);
        expect(resultFn).toThrow(msg);
    });

    it('returns undefined when valid input is provided', () => {
        const text = 'Hello World';
        const result = validateNotEmpty(text, '');
        expect(result).toBeUndefined();
    });
});
