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
    const P = lines[1].split(' ').map((e) => Number(e));

    const minimums = new Array<number>(N);
    minimums.fill(1e9);

    minimums[0] = P[0];
    for (let i = 1; i < N; i++) {
      minimums[i] = Math.min(minimums[i - 1], P[i]);
    }

    let answer = 0;
    for (let i = 0; i < N; i++) {
      if (P[i] <= minimums[i]) {
        answer++;
      }
    }

    console.log(answer);
  });
})();
