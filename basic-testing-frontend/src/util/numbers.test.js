import { expect, it, describe } from 'vitest';
import { cleanNumbers, transformToNumber } from './numbers';

describe('transformToNumber()', () => {
    it('converts a string value to a number', () => {
        const one = '1';
        const result = transformToNumber(one);
        expect(result).toBeTypeOf('number');
        expect(result).toBe(1);
    });

    it('returns NaN if invalid value is passed', () => {
        const one = 'hello';
        const result = transformToNumber(one);
        expect(result).toBeNaN();
    });

    it('returns NaN if no argument is provided', () => {
        const result = transformToNumber();
        expect(result).toBeNaN();
    });
});

describe('cleanNumbers()', () => {
    it('should reutrn an array of number values if an array of string number values is provided', () => {
        const numberValues = ['1', '2'];
        const cleanedNumbers = cleanNumbers(numberValues);
        cleanedNumbers.forEach(num => {
            expect(num).toBeTypeOf('number');
        });
    });

    it('throws an error if an array with at least one empty string is provided', () => {
        const numberValues = ['', 1];

        const cleanFn = () => cleanNumbers(numberValues);

        expect(cleanFn).toThrow();
    });
});
