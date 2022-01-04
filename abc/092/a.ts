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
    const A = Number(lines[0]);
    const B = Number(lines[1]);
    const C = Number(lines[2]);
    const D = Number(lines[3]);

    console.log(Math.min(A, B) + Math.min(C, D));
  });
})();
