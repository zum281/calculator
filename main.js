const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const parseInput = (input) => {
  const inputArray = input.split(" ");
  const operatorsList = ["+", "-", "*", "/"];
  const numbers = inputArray
    .filter((char) => !operatorsList.includes(char))
    .map((x) => parseFloat(x));
  const operators = inputArray.filter((char) => operatorsList.includes(char));
  return { numbers, operators };
};

const calculate = (numbers, operators) => {
  console.log(numbers);
  console.log(operators);
  let result = numbers[0];
  for (let i = 0; i < operators.length; i++) {
    switch (operators[i]) {
      case "+":
        result = sum(result, numbers[i + 1]);
        break;
      case "-":
        result = subtract(result, numbers[i + 1]);
        break;
      case "*":
        result = multiply(result, numbers[i + 1]);
        break;
      case "/":
        result = divide(result, numbers[i + 1]);
        break;
    }
  }
  return result;
};
