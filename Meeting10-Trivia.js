var question = [
    "What is the capital of France?",
    "Which country is known as the Land of the Rising Sun?",
    "Which country has the largest population?",
    "What is the official language of Brazil?",
    "Which country is famous for the Eiffel Tower?"
];

var answers = ["Paris", "Japan", "China", "Portuguese", "France"];

var score = 0;
var questionNumber = 0;

while (questionNumber < question.length) {
    var userAnswer = prompt(question[questionNumber]);

    if (userAnswer.toLowerCase() === answers[questionNumber].toLowerCase()) {
        score += 20;
    }

    questionNumber++;
}

console.log("Score = " + score);
