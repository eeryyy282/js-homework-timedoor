// program check whether a number is positive or negative
var num1 = -40;
var num2 = 50;
var num3 = 0;

if (num1 > 0) {
    result = "positive";
} else if (num1 < 0) {
    result = "negative";
} else {
    result = "not negative or positive";
}
console.log(result);


// Program check eliglibility driver license
var age1 = 8;
var age2 = 17;
var age3 = 20;

if (age1 >= 17) {
    eligibility = "Eligible";
} else {
    eligibility = "Not eligible";
}
console.log(eligibility)

// Program check student grade
var score = 90;

if (score > 90) {
    grade = "Grade A";
} else if (score > 75) {
    grade = "Grade B";
} else if (score1 > 60) {
    grade = "Grade C";
} else {
    grade = "Grade D";
}

console.log(grade)

// Program calculate total payment
var totalPayment = 200000;
var member = true;

if (member) {
    totalPayment = totalPayment * 0.9;
}

console.log("Total payment: " + totalPayment);

// Program display massage
let choosenPlayer = "Knight";

if (choosenPlayer === "Knight") {
    console.log("Welcome, Knight the hero!");
} else if (choosenPlayer === "Wizard") {
    console.log("Welcome, Wizard the witch!");
}

// Steve 2D game
var x = 20;
var y = -50;

if (x > 0 && y > 0) {
    position = "top right";
} else if (x < 0 && y < 0) {
    position = "bottom left";
} else if (x > 0 && y < 0) {
    position = "bottom right";
} else if (x < 0 && y > 0) {
    position = "top left";
} else {
    position = "middle";
}

console.log("Player position " + position);
