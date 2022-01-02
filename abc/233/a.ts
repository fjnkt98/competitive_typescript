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
  const input = lines[0].split(' ');
  const X = Number(input[0]);
  const Y = Number(input[1]);

  const diff = Y - X;

  if (diff < 0) {
    console.log(0);
  } else {
    console.log(Math.ceil(diff / 10));
  }
});
