// Code practice 1
for (platform = 1; platform <= 3; platform++) {
  console.log("Platform created " + platform);

  for (carrot = 1; carrot <= 2; carrot++) {
    console.log("--- Carrot " + carrot);
  }
}

// Code practice 2
var expectedNumber = 5;

do {
  randomNumber = Math.floor(Math.random() * 11);
  console.log("Random = " + randomNumber);
} while (randomNumber !== expectedNumber);

console.log("Stopped, number 5 was generated.");