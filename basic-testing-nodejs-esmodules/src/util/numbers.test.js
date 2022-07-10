import { expect, it, describe } from 'vitest';
import { transformToNumber } from './numbers';

describe('numbers.js', () => {
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
