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
    const [N, R] = lines[0].split(' ').map((e) => {
      return Number(e);
    });

    if (N >= 10) {
      console.log(R);
    } else {
      console.log(R + 100 * (10 - N));
    }
  });
})();
