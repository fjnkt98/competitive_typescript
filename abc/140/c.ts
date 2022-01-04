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
    const B = lines[1].split(' ').map((e) => Number(e));

    const A = new Array<number>(N);
    A.fill(0);
    A[0] = B[0];

    for (let i = 1; i < N - 1; i++) {
      A[i] = Math.min(B[i - 1], B[i]);
    }
    A[N - 1] = B[N - 2];

    console.log(A.reduce((p, c) => p + c));
  });
})();
