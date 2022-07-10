import { describe, it, expect } from 'vitest';
import { validateNumber, validateStringNotEmpty } from './validation';

describe('validateStringNotEmpty()', () => {
    it('throws an error if an empty string is provided', () => {
        const resultFn = () => {
            validateStringNotEmpty('');
        };
        expect(resultFn).toThrow(/Invalid input/);
    });

    it('throws an error if no input is provided', () => {
        expect(validateStringNotEmpty).toThrow();
    });

    it('returns undefined if string length is greater than zero is provided', () => {
        const str = 'hello world';
        const result = validateStringNotEmpty(str);
        expect(result).toBeUndefined();
    });
});

describe('validateNumber()', () => {
    it('throws an error if an invalid number is provided', () => {
        const num = 'hello world';
        const resultFn = () => {
            validateNumber(num);
        };
        expect(resultFn).toThrow(/Invalid number/);
    });

    it('throws an error if the argument is not of type number', () => {
        const num = '1';
        const resultFn = () => {
            validateNumber(num);
        };

        expect(resultFn).toThrow(/Invalid number/);
    });

    it('returns undefined if valid number is provided', () => {
        const num = 2;
        const result = validateNumber(num);
        expect(result).toBeUndefined();
    });
});
