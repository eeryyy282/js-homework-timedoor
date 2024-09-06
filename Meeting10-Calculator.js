// Step 1
var operator = prompt("Enter operator (+, -, *, /):");
var input1 = parseFloat(prompt("Enter the first number:"));
var input2 = parseFloat(prompt("Enter the second number:"));
var result;

// Step 2
if (isNaN(input1) || isNaN(input2)) {
    alert("Enter a numeral numbers");
} else {
    // Step 3
    switch (operator) {
        case "+":
            result = input1 + input2;
            break;
        case "-":
            result = input1 - input2;
            break;
        case "*":
            result = input1 * input2;
            break;
        case "/":
            result = input1 / input2;
            break;
        default:
            alert("No operator selected");
            result = null;
            break;
    }

    // Step 4
    if (result !== null) {
        console.log(`${input1} ${operator} ${input2} = ${result}`);
    }
}
