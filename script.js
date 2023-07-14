// math functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return 'Error: Division by zero!';
  }
  return a / b;
}


console.log(add(6,9));
console.log(subtract(6,9));
console.log(multiply(6,9));
console.log(divide(6,9));

let operator = '';
let firstNumber = '';
let secondNumber = '';

function operate(operator, a, b) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return 'Invalid operator';
  }
}

