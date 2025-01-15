const fs = require('fs');
const path = require('path');
const readline = require('readline');

const filePath = path.join(__dirname, 'output.txt');
const writeStream = fs.createWriteStream(filePath, { flags: 'a' });

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Hello world! You can write here');

readlineInterface.on('line', (input) => {
  if (input.toLowerCase() === 'exit') {
    endIt();
  } else {
    writeStream.write(input);
  }
});

function endIt() {
  console.log('Bye!');
  writeStream.end();
  readlineInterface.close();
  process.exit();
}

readlineInterface.on('SIGINT', endIt);
