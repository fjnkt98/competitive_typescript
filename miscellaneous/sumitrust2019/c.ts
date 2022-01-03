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
    const X = Number(lines[0]);

    const amount = Math.floor(X / 100);
    if (100 * amount <= X && X <= 105 * amount) {
      console.log(1);
    } else {
      console.log(0);
    }
  });
})();
