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
    const N = Number(lines[0]);
    const A = lines[1].split(' ').map((e) => Number(e));

    A.sort((a, b) => {
      return b - a;
    });

    let answer = 0;
    for (let i = 1; i < 2 * N + 1; i += 2) {
      answer += A[i];
    }

    console.log(answer);
  });
})();
