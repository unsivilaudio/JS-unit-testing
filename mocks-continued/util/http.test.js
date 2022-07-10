import { it, describe, expect, vi } from 'vitest';
import { HttpError } from './errors';
import { sendDataRequest } from './http';

const testResponseData = { testKey: 'testData' };
const testFetch = vi.fn((url, opts) => {
    return new Promise((res, rej) => {
        if (typeof opts.body !== 'string') {
            rej('Not a string.');
        }
        const testResponse = {
            ok: true,
            json: () => {
                return new Promise(res => {
                    res(testResponseData);
                });
            },
        };
        res(testResponse);
    });
});

vi.stubGlobal('fetch', testFetch);

describe('sendDataRequest()', () => {
    it('should return any available response data', () => {
        const testData = { key: 'test' };
        expect(sendDataRequest(testData)).resolves.toBe(testResponseData);
    });

    it('should convert the provided data to JSON before sending the request', async () => {
        const testData = { key: 'test' };
        let errorMessage;
        try {
            await sendDataRequest(testData);
        } catch (err) {
            errorMessage = err;
        }

        expect(errorMessage).not.toBe('Not a string.');
    });

    it('should throw an HttpError in the case of non-ok responses', () => {
        testFetch.mockImplementationOnce((url, opts) => {
            return new Promise((res, rej) => {
                const testResponse = {
                    ok: false,
                    json: () => {
                        return new Promise(res => {
                            res(testResponseData);
                        });
                    },
                };
                res(testResponse);
            });
        });

        const testData = { key: 'test' };

        return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(
            HttpError
        );
    });
});
