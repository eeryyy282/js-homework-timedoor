function recommendAnime() {
  var menus = ['Attack on Titan', 'My Hero Academia', 'One Piece'];
  var random = Math.floor(Math.random() * menus.length);
  var recommendation = menus[random];
  console.log(`I recommend ${recommendation}`);
}

function recommendGame() {
  var menus = ['The Legend of Zelda: Breath of the Wild', 'God of War'];
  var random = Math.floor(Math.random() * menus.length);
  var recommendation = menus[random];
  console.log(`I recommend ${recommendation}`);
}

function recommendTourist() {
  var menus = ['Bali Beaches, Indonesia', 'Central Park'];
  var random = Math.floor(Math.random() * menus.length);
  var recommendation = menus[random];
  console.log(`I recommend ${recommendation}`);
}