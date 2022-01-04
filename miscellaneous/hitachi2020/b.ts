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
    const [A, B, M] = lines[0].split(' ').map((e) => Number(e));
    const a = lines[1].split(' ').map((e) => Number(e));
    const b = lines[2].split(' ').map((e) => Number(e));
    const discount = new Array<number[]>(M);
    for (let i = 0; i < M; i++) {
      discount[i] = lines[i + 3].split(' ').map((e) => Number(e));
    }

    let answer = 1e9;
    for (let i = 0; i < M; i++) {
      const x = discount[i][0] - 1;
      const y = discount[i][1] - 1;
      const c = discount[i][2];

      answer = Math.min(answer, a[x] + b[y] - c);
    }

    let min_a = 1e9;
    for (let i = 0; i < A; i++) {
      min_a = Math.min(min_a, a[i]);
    }
    let min_b = 1e9;
    for (let i = 0; i < B; i++) {
      min_b = Math.min(min_b, b[i]);
    }

    answer = Math.min(answer, min_a + min_b);

    console.log(answer);
  });
})();
