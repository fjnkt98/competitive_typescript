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
    const [N, M, C] = lines[0].split(' ').map((e) => Number(e));
    const B = lines[1].split(' ').map((e) => Number(e));
    const A: number[][] = new Array<number[]>(N);
    for (let i = 2; i < N + 2; i++) {
      A[i] = lines[i].split(' ').map((e) => Number(e));
    }

    let answer = 0;
    A.forEach((a) => {
      let sum = 0;
      for (let i = 0; i < M; i++) {
        sum += a[i] * B[i];
      }
      if (sum + C > 0) {
        answer++;
      }
    });

    console.log(answer);
  });
})();
