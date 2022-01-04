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
    const T = lines[1].split(' ').map((e) => Number(e));
    const M = Number(lines[2]);
    const P = new Array<number>(N);
    const X = new Array<number>(N);
    for (let i = 0; i < M; i++) {
      [P[i], X[i]] = lines[i + 3].split(' ').map((e) => Number(e));
    }

    const totalTime = T.reduce((p, c) => p + c);
    for (let i = 0; i < M; i++) {
      const p = P[i] - 1;
      const x = X[i];

      console.log(totalTime - T[p] + x);
    }
  });
})();
