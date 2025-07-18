let display = document.getElementById('display');
let currentInput = '';
let lastCharIsOperator = false;

function appendToDisplay(value) {
    if (value === '.' && currentInput.includes('.')) return;

    if (['+', '-', '*', '/'].includes(value)) {
        if (lastCharIsOperator) {
            currentInput = currentInput.slice(0, -1) + value;
        } else {
            currentInput += value;
        }
        lastCharIsOperator = true;
    } else {
        if (currentInput === '0' && value !== '.') {
            currentInput = value;
        } else {
            currentInput += value;
        }
        lastCharIsOperator = false;
    }

    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '0';
    lastCharIsOperator = false;
    display.value = currentInput;
}

function calculate() {
    try {
        if (!lastCharIsOperator && currentInput !== '') {
            currentInput = eval(currentInput).toString();
            display.value = currentInput;
            lastCharIsOperator = false;
        }
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
        lastCharIsOperator = false;
    }
}