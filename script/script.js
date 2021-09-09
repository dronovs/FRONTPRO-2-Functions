function askOperand () {
    let operand = +prompt('Please enter operand');
    while (isNaN(operand)) {
        operand = +prompt('Please enter a NUMBER!');
    }
    return operand;
}

function sums (operand1, operand2) {
    return operand1 + operand2;
}

function difference (operand1, operand2) {
    return operand1 - operand2;
}

function multiplies (operand1, operand2) {
    return operand1 * operand2;
}

function divides (operand1, operand2) {
    return operand1 / operand2;
}

do {
    let operator;
    function askOperator () {
        operator = prompt('Please enter one of operations: *, +, -, /');
        return operator;
    }
    askOperator();
    if (operator === '+') {
        alert(`Sum is ${sums(askOperand(), askOperand())}`);
    } else if (operator === '-') {
        alert(`Diff is ${difference(askOperand(), askOperand())}`);
    } else if (operator === '/') {
        alert(`Div is ${divides(askOperand(), askOperand())}`);
    } else if (operator === '*') {
        alert(`Mult is ${multiplies(askOperand(), askOperand())}`);
    }
} while (confirm('Do you want to repeat?'));