var random = Math.floor(Math.random() * 10);

var adjectives = ['quick', 'lazy', 'happy', 'sad', 'angry', 'bright', 'dark', 'smart', 'strong', 'brave'];
var nouns = ['fox', 'dog', 'cat', 'bird', 'lion', 'tiger', 'wolf', 'rabbit', 'whale', 'shark'];
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
var newUsername = '';
var newPassword = '';
var userOption;

function generate(option) {
  if (option == 1) {
    newUsername = adjectives[random] + nouns[random];
    console.log('Generated Username: ' + newUsername);
  } else if (option == 2) {
    newPassword = nouns[random].charAt(0).toUpperCase() + nouns[random].slice(1) + random + symbols[random];
    console.log('Generated Password: ' + newPassword);
  }
}

do {
  userOption = prompt('Choose an option:\n1. Generate Username\n2. Generate Password');
} while (userOption != 1 && userOption != 2);

generate(userOption);