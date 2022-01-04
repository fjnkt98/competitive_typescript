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
    const A = new Array<number[]>(2);
    for (let i = 0; i < 2; i++) {
      A[i] = lines[i + 1].split(' ').map((e) => Number(e));
    }

    const dp = new Array<number[]>(2);
    for (let i = 0; i < 2; i++) {
      dp[i] = new Array<number>(N).fill(0);
    }
    dp[0][0] = A[0][0];
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < N; j++) {
        if (i - 1 >= 0) {
          dp[i][j] = Math.max(dp[i][j], dp[i - 1][j] + A[i][j]);
        }
        if (j - 1 >= 0) {
          dp[i][j] = Math.max(dp[i][j], dp[i][j - 1] + A[i][j]);
        }
      }
    }

    console.log(dp[1][N - 1]);
  });
})();
