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

    const cumsum = new Array<number>(N + 1).fill(0);
    for (let i = 0; i < N; i++) {
      cumsum[i + 1] = cumsum[i] + A[i];
    }

    const totalLength = A.reduce((p, c) => p + c);

    const diff = new Array<number>(N - 1).fill(0);
    for (let i = 0; i < N - 1; i++) {
      diff[i] = Math.abs(totalLength - cumsum[i + 1] - cumsum[i + 1]);
    }

    let answer = 1e9;
    diff.forEach((e) => {
      answer = Math.min(answer, e);
    });

    console.log(answer);
  });
})();
