// app.js

// Importing the calculator module
const calculator = require('./calculator');
// Function to perform calculation based on user input
function calculate(operation, a, b) {
    switch (operation) {
        case '+':
            return calculator.add(a, b);
        case '-':
            return calculator.subtract(a, b);
        case '*':
            return calculator.multiply(a, b);
        case '/':
            return calculator.divide(a, b);
        default:
            throw new Error("Invalid operation.");
    }
}

const operation = '/';
const num1 = 10;
const num2 = 2;

try {
    const result = calculate(operation, num1, num2);
    console.log(`Result of ${num1} ${operation} ${num2} is: ${result}`);
} catch (error) {
    console.error("Error:", error.message);
}
