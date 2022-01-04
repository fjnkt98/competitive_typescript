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
    const [N, K] = lines[0].split(' ').map((e) => Number(e));
    const H = new Array<number>(N);
    for (let i = 0; i < N; i++) {
      H[i] = Number(lines[i + 1]);
    }

    H.sort((a, b) => {
      return a - b;
    });

    let answer = 1e9;
    for (let i = 0; i < N - K + 1; i++) {
      answer = Math.min(answer, H[i + K - 1] - H[i]);
    }

    console.log(answer);
  });
})();
