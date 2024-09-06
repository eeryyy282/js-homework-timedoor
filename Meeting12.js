var area;
var circum;

function square(side) {
  area = side * side;
  circum = 4 * side;
  console.log('---Square-----')
  console.log(`Area : ${area} `)
  console.log(`Circumference : ${circum}`)
}

function rect(width, height) {
  var area = width * height;
  var circum = 2 * (width + height);
  console.log('---Rectangle-----');
  console.log(`Area: ${area}`);
  console.log(`Circumference: ${circum}`);
}