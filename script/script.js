function calculator () {
    let showMessage;
    let operator;

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
        function askOperator() {
            operator = prompt('Please enter one of operations: *, +, -, /');
            while (operator !== '+' && operator !== '/' && operator !== '-' && operator !== '*') {
                operator = prompt('Please enter one of operations: *, +, -, /');
            }
        }

        askOperator();
        if (operator === '+') {
            showMessage = `Sum is ${summing(askOperand(), askOperand())}`
            alert(showMessage);
        } else if (operator === '-') {
            showMessage = `Diff is ${subtraction(askOperand(), askOperand())}`
            alert(showMessage);
        } else if (operator === '/') {
            showMessage = `Div is ${divides(askOperand(), askOperand())}`
            alert(showMessage);
        } else if (operator === '*') {
            showMessage = `Mult is ${multiplies(askOperand(), askOperand())}`
            alert(showMessage);
        }
    } while (confirm('Do you want to repeat?'));
}
calculator();