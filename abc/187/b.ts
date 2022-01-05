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
    const X = new Array<number>(N);
    const Y = new Array<number>(N);
    for (let i = 0; i < N; i++) {
      [X[i], Y[i]] = lines[i + 1].split(' ').map((e) => Number(e));
    }

    let answer = 0;
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        if (Math.abs(Y[j] - Y[i]) <= Math.abs(X[j] - X[i])) {
          answer++;
        }
      }
    }
    console.log(answer);
  });
})();
