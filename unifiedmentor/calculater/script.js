let currentInput = '';
let operator = '';
let firstOperand = null;

function appendToDisplay(value) {
    currentInput += value;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = null;
    updateDisplay();
}

function calculateResult() {
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else {
        const secondOperand = parseFloat(currentInput);
        switch (operator) {
            case '+':
                firstOperand += secondOperand;
                break;
            case '-':
                firstOperand -= secondOperand;
                break;
            case '*':
                firstOperand *= secondOperand;
                break;
            case '/':
                firstOperand /= secondOperand;
                break;
        }
        currentInput = firstOperand.toString();
    }
    operator = '';
    updateDisplay();
}

function calculateSquareRoot() {
    if (currentInput) {
        currentInput = Math.sqrt(parseFloat(currentInput)).toString();
        updateDisplay();
    }
}

function calculateSquare() {
    if (currentInput) {
        currentInput = Math.pow(parseFloat(currentInput), 2).toString();
        updateDisplay();
    }
}

function calculateExponent() {
    firstOperand = parseFloat(currentInput);
    operator = '^';
    currentInput = '';
    updateDisplay();
}
