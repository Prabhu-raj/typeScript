// import fs module

import { readFile } from 'fs';

readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log("File content:", data);
});