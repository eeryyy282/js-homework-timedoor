// Code practice 1
var numbers = [111, 11, 1, 111, 1111, 11, 11, 111, 1, 111];

function findNumberLocation(numbers) {
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] === 1111) {
      return i;
    }
  }
}

var numLocation = findNumberLocation(numbers);
console.log(`1111 is located at index ${numLocation}`);

// Code practice 2
// Convert cm to m
function cmToMeter(cm) {
  var m = cm * 0.01;
  return `${cm} cm is ${m} meter`;
}

// Convert cm to km
function cmToKilometer(cm) {
  var km = cm * 0.00001;
  return `${cm} cm is ${km} kilometer`;
}

// Conver cm to mm
function cmToMillimeter(cm) {
  var mm = cm * 10;
  return `${cm} cm is ${mm} millimeter`;
}

console.log(cmToMeter(100));
console.log(cmToKilometer(100000));
console.log(cmToMillimeter(100));

// Code practice 3
var guests = ['Kimberly', 'Olivia', 'Sophia', 'Catriona', 'Michele'];
guests.forEach(name => {
  console.log(`To : ${name}`);
});
