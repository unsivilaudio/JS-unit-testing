import { expect, describe, it, beforeEach } from 'vitest';
import { HttpError, ValidationError } from './errors';

describe('class HttpError', () => {
    it('creates an HttpError successfully', () => {
        const testStatus = 1;
        const testMessage = 'Test';
        const testData = { key: 'test' };

        const err = new HttpError(testStatus, testMessage, testData);

        expect(err).toBeDefined();
        expect(err).toBeInstanceOf(HttpError);
        expect(err.statusCode).toBe(testStatus);
        expect(err.message).toBe(testMessage);
        expect(err.data).toBe(testData);
    });

    it('should contain undefined as data if no data is provided', () => {
        const testStatus = 1;
        const testMessage = 'Test';

        const err = new HttpError(testStatus, testMessage);

        expect(err).toBeDefined();
        expect(err).toBeInstanceOf(HttpError);
        expect(err.statusCode).toBe(testStatus);
        expect(err.message).toBe(testMessage);
        expect(err.data).toBeUndefined();
    });
});

describe('class ValidationError', () => {
    let err;
    beforeEach(() => {
        err = new ValidationError('Not Valid');
    });

    it('creates a ValidationError sucessfully', () => {
        expect(err).toBeDefined();
        expect(err).toBeInstanceOf(ValidationError);
    });

    it('should contain a message', () => {
        expect(err.message).toBe('Not Valid');
    });
});
