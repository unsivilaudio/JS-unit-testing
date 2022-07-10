export function generateResultText(calculatedResult) {
    let resultText = '';

    if (calculatedResult === 'invalid') {
        resultText = 'Invalid input. You must enter valid numbers.';
    } else if (calculatedResult !== 'no-calc') {
        resultText = 'Result: ' + calculatedResult;
    }

    return resultText;
}

export function outputResult(resultText) {
    const output = document.getElementById('result');

    output.textContent = resultText;
}
