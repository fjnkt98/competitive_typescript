'use strict';

const lines: string[] = [];
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on('line', (line: string) => {
  lines.push(line);
});

reader.on('close', () => {
  console.log('Hello, world!');
});
