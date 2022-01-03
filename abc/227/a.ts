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
    const [N, K, A] = lines[0].split(' ').map((e) => {
      return Number(e);
    });

    let answer = 0;
    for (let i = A - 1; i < K + A - 1; i++) {
      answer = i % N;
    }

    console.log(answer + 1);
  });
})();
