'use strict';

(() => {
  const lines: string[] = [];
  const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  reader.on('line', (line: string) => {
    lines.push(line);
  });

  reader.on('close', () => {
    const [S, T, X] = lines[0].split(' ').map((e) => {
      return Number(e);
    });

    if (S < T) {
      if (S <= X && X < T) {
        console.log('Yes');
      } else {
        console.log('No');
      }
    } else {
      if (T <= X && X < S) {
        console.log('No');
      } else {
        console.log('Yes');
      }
    }
  });
})();
