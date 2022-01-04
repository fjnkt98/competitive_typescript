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
    const [A, B, K] = lines[0].split(' ').map((e) => Number(e));

    const array = new Array<number>();
    for (let i = A; i < Math.min(A + K, B); i++) {
      array.push(i);
    }
    for (let i = Math.max(A, B - K + 1); i <= B; i++) {
      array.push(i);
    }

    const set = new Set<number>(array);
    const answer = Array.from(set);

    answer.sort((a, b) => {
      return a - b;
    });

    answer.forEach((e) => {
      console.log(e);
    });
  });
})();
