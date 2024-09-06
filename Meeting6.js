// COde practice 1 fill the blank
var num1 = Math.floor(Math.random() * 10) + 1;
var num2 = Math.floor(Math.random() * 10) + 1;
var operators = ['x', '+', '-', ':'];
var random = Math.floor(Math.random() * 4);
var choosenOperator = operators[random];

switch (choosenOperator) {
  case 'x':
    total = num1 * num2;
    console.log(total);
    break;
  case '+':
    total = num1 + num2;
    console.log(total);
    break;
  case '-':
    total = num1 - num2;
    console.log(total);
    break;
  case ':':
    total = num1 / num2;
    console.log(total);
    break;
}

// Code practice 2
var score = 1900;
switch (true) {
  case (score > 100):
    level = 2;
    break;
  default:
    level = 1;
}

console.log(level);