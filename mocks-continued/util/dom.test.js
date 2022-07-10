import fs from 'fs';
import path from 'path';
import { beforeEach, it, describe, vi, expect } from 'vitest';
import { showError } from './dom';

const htmlDoc = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDoc).toString();

const window = new Window();
const document = window.document;
vi.stubGlobal('document', document);

beforeEach(() => {
    document.body.innerHTML = '';
    document.write(htmlDocumentContent);
});

describe('showError()', () => {
    it('should add an error paragraph to the id="errors" element', () => {
        showError('hello world');
        const errorsEl = document.getElementById('errors');
        const errorParagraph = errorsEl.firstElementChild;

        expect(errorParagraph).not.toBeNull();
    });

    it('should not contain an error paragraph initially', () => {
        const errorsEl = document.getElementById('errors');
        const errorParagraph = errorsEl.firstElementChild;

        expect(errorParagraph).toBeNull();
    });

    it('should output the provided message in the error paragraph', () => {
        const testErrorMessage = 'Test';
        showError(testErrorMessage);
        const errorsEl = document.getElementById('errors');
        const errorParagraph = errorsEl.firstElementChild;
        expect(errorParagraph.textContent).toBe(testErrorMessage);
    });
});
