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
    const K = Number(lines[0]);

    if (K % 2 === 0) {
      console.log(Math.pow(K / 2, 2));
    } else {
      console.log(Math.floor(K / 2) * (Math.floor(K / 2) + 1));
    }
  });
})();
