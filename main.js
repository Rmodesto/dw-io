const fs = require('fs');

const inputDirPath =
  '/Users/rafaelmodesto/Desktop/Projects/dw-io/assistants/input';
fs.readdir(inputDirPath, (err, files) => {
  if (err) {
    return console.error('Error reading directory:', err);
  }
  console.log('Files:', files);
});
