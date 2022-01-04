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
    const [N, x] = lines[0].split(' ').map((e) => Number(e));
    const A = lines[1].split(' ').map((e) => Number(e));

    A.sort((a, b) => {
      return a - b;
    });
    const sum = A.reduce((p, c) => p + c);
    if (x === sum) {
      console.log(N);
      return;
    }

    const cumsum = new Array<number>(N + 1);
    cumsum.fill(0);
    for (let i = 0; i < N; i++) {
      cumsum[i + 1] = cumsum[i] + A[i];
    }

    let answer = 0;
    for (let i = 1; i <= N; i++) {
      if (cumsum[i] <= x) {
        answer = i;
      }
    }

    if (answer === N) {
      answer = N - 1;
    }

    console.log(answer);
  });
})();
