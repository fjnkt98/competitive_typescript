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
    const B = lines[2].split(' ').map((e) => Number(e));

    let answer = 0;
    for (let i = 0; i < N; i++) {
      if (B[i] >= A[i]) {
        answer += A[i];
        B[i] -= A[i];
        A[i] = 0;

        if (B[i] >= A[i + 1]) {
          answer += A[i + 1];
          B[i] -= A[i + 1];
          A[i + 1] = 0;
        } else {
          answer += B[i];
          A[i + 1] -= B[i];
        }
      } else {
        answer += B[i];
        A[i] -= B[i];
      }
    }

    console.log(answer);
  });
})();
