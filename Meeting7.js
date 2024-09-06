//Print name 20 lines
for (i = 0; i < 20; i++) {
  console.log("Im Muhammad Juzairi Safitli");
}

// Sequence numbers from 1 to 20
for (i = 1; i <= 20; i++) {
  console.log(i);
}

// Multiplies 5 from 5 to 100
for (i = 5; i <= 100; i += 5) {
  console.log(i);
}

// Steve Games
var gameTime = [2, 2, 3, 3, 1, 4, 5];
var timeTotalGame = 0;
var hourTimeLimit = 0;
var timeLimit = 2;
for (i = 0; i < gameTime.length; i++) {
  timeTotalGame += gameTime[i];

  if (gameTime[i] > timeLimit) {
    hourTimeLimit++;
  }
}

console.log("Total time = " + timeTotalGame + " hours");
console.log("Time limit = " + hourTimeLimit);
