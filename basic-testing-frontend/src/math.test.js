import { describe, expect, it } from 'vitest';
import { add } from './math';

describe('math.js', () => {
    it('should sum up all values in an array', () => {
        // Arrange
        const numbers = [1, 2, 3];

        // Act
        const result = add(numbers);

        // Assert
        const expectedResult = numbers.reduce((a, b) => a + b, 0);
        expect(result).toBe(expectedResult);
    });

    it('should yield NaN if at least one invalid number is provided', () => {
        const numbers = ['one', 2];
        const result = add(numbers);
        expect(Number(result)).toBeNaN();
    });

    it('should yield a correct sum if an array of numeric string values is provided', () => {
        const numbers = ['1', '2'];
        const result = add(numbers);
        const expectedResult = numbers.reduce((a, b) => a + +b, 0);
        expect(result).toBe(expectedResult);
    });

    it('should yield 0 if an empty array is provided', () => {
        const numbers = [];
        const result = add(numbers);
        expect(result).toBe(0);
    });

    it('show throw an error if no value is passed into the funtion', () => {
        const resultFn = () => {
            add();
        };

        expect(resultFn).toThrow();
    });

    it('should throw an error if provided with multiple arguments instead of an array', () => {
        const num1 = 1;
        const num2 = 2;

        const resultFn = () => {
            add(num1, num2);
        };

        expect(resultFn).toThrow(/is not iterable/);
    });
});
