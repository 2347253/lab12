const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname, 'posts', 'toDelete.txt'), 'Hello', (err) => {
  if (err) {
    throw err;
  }
  console.log('file created');
});
cl