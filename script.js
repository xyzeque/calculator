// Get references to the necessary elements
const display = document.getElementById("result");
const buttons = document.querySelectorAll(".btn");
const decimalButton = document.getElementById("decimal");

// Add event listeners to buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the clicked button's text
    const buttonText = button.textContent;

    // Perform the corresponding action based on the button text
    switch (buttonText) {
      case "AC":
        // Clear the display
        display.value = "";
        break;
      case "DEL":
        // Delete the last character
        display.value = display.value.slice(0, -1);
        break;
      case "=":
        // Perform calculation and display the result
        const result = calculateResult(display.value);
        display.value = result !== "Error" ? result : "Invalid input";
        break;
      default:
        // Append the button text to the display
        display.value += buttonText;
        break;
    }
  });
});

decimalButton.addEventListener("click", () => {
  // Check if there is already a decimal point in the display
  if (!display.value.includes(".")) {
    // Append the decimal point to the display
    display.value += ".";
  }
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
    return "Error: Division by zero!";
  }
  return a / b;
}

// Calculation logic
function calculateResult(expression) {
  try {
    const operators = {
      "+": add,
      "-": subtract,
      "x": multiply, 
      "/": divide,
    };

    const tokens = expression.match(/\d+(\.\d+)?|\+|\-|\x|\//g);

    // Handle invalid expressions
    if (!tokens) {
      return "Error";
    }

    const numbers = [];
    const operatorsStack = [];

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (operators[token]) {
        // Token is an operator
        while (
          operatorsStack.length > 0 &&
          operatorsStack[operatorsStack.length - 1] !== "(" &&
          operators[token](numbers[numbers.length - 2], numbers[numbers.length - 1]) !== undefined
        ) {
          const operator = operatorsStack.pop();
          const b = numbers.pop();
          const a = numbers.pop();
          const result = operators[operator](a, b);
          numbers.push(result);
        }

        operatorsStack.push(token);
      } else if (token === "(") {
        // Token is an opening parenthesis
        operatorsStack.push(token);
      } else if (token === ")") {
        // Token is a closing parenthesis
        while (operatorsStack[operatorsStack.length - 1] !== "(") {
          const operator = operatorsStack.pop();
          const b = numbers.pop();
          const a = numbers.pop();
          const result = operators[operator](a, b);
          numbers.push(result);
        }
        operatorsStack.pop(); // Remove the opening parenthesis
      } else {
        // Token is a number
        numbers.push(parseFloat(token));
      }
    }

    while (operatorsStack.length > 0) {
      const operator = operatorsStack.pop();
      const b = numbers.pop();
      const a = numbers.pop();
      const result = operators[operator](a, b);
      numbers.push(result);
    }

    if (numbers.length === 1 && Number.isFinite(numbers[0])) {
      return numbers[0].toString();
    } else {
      return "Error";
    }
  } catch (error) {
    return "Error";
  }
}
