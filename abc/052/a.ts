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
    const [A, B, C, D] = lines[0].split(' ').map((e) => Number(e));

    console.log(Math.max(A * B, C * D));
  });
})();
