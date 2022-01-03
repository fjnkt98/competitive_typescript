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
    const X = lines[1].split(' ').map((e) => {
      return Number(e);
    });

    let answer = 1e9;

    for (let i = 0; i <= 101; i++) {
      let cost = 0;
      X.forEach((e) => {
        cost += Math.pow(e - i, 2);
      });

      answer = Math.min(answer, cost);
    }

    console.log(answer);
  });
})();
