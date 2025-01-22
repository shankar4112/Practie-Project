// modulo.js

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return 'Cannot divide by zero';
    }
    return num1 / num2;
}

function power(num1, num2) {
    return Math.pow(num1, num2);
}

function modulo(num1, num2) {
    return num1 % num2;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    power,
    modulo
};
