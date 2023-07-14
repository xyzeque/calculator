// Get references to the necessary elements
const display = document.getElementById("result");
const buttons = document.querySelectorAll(".btn");

// Add event listeners to buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the clicked button's text
    const buttonText = button.textContent;

    // Perform the corresponding action based on the button text
    switch (buttonText) {
      case "AC":
        // Clear the display
        console.log('CLEAR');
        display.value = "";
        break;
      case "DEL":
        // Delete the last character
        console.log('DELETE');
        display.value = display.value.slice(0, -1);
        break;
      case "=":
        // Perform calculation and display the result
        display.value = calculateResult(display.value); // (NOT WORKING YET)
        break;
      default:
        // Append the button text to the display
        display.value += buttonText;
        break;
    }
  });
});

// Math Functions
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

console.log(operate('+', 3, 7));

