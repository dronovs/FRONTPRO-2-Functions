function calculator () {
    function askOperand() {
        let operand = +prompt('Please enter operand');
        while (isNaN(operand)) {
            operand = +prompt('Please enter a NUMBER!');
        }
        return operand;
    }

    function summing(operand1, operand2) {
        return operand1 + operand2;
    }

    function subtraction(operand1, operand2) {
        return operand1 - operand2;
    }

    function multiplies(operand1, operand2) {
        return operand1 * operand2;
    }

    function divides(operand1, operand2) {
        return operand1 / operand2;
    }

    do {
        let operator;
        function askOperator() {
            operator = prompt('Please enter one of operations: *, +, -, /');
            while (operator !== '+' && operator !== '/' && operator !== '-' && operator !== '*') {
                operator = prompt('Please enter one of operations: *, +, -, /');
            }
        }

        askOperator();
        if (operator === '+') {
            alert(`Sum is ${summing(askOperand(), askOperand())}`);
        } else if (operator === '-') {
            alert(`Diff is ${subtraction(askOperand(), askOperand())}`);
        } else if (operator === '/') {
            alert(`Div is ${divides(askOperand(), askOperand())}`);
        } else if (operator === '*') {
            alert(`Mult is ${multiplies(askOperand(), askOperand())}`);
        }
    } while (confirm('Do you want to repeat?'));
}
calculator();