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
    const [A, B, C] = lines[0].split(' ').map((e) => Number(e));

    const currentSum = A + B + C;
    const resultSum = 3 * Math.max(A, B, C);

    if (currentSum % 2 === resultSum % 2) {
      console.log((resultSum - currentSum) / 2);
    } else {
      console.log((resultSum + 3 - currentSum) / 2);
    }
  });
})();
