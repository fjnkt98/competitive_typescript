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
    const input = lines[0].split(' ');
    const A = input[0]
      .split('')
      .reverse()
      .map((e) => {
        return Number(e);
      });
    const B: number[] = input[1]
      .split('')
      .reverse()
      .map((e) => {
        return Number(e);
      });

    let is_hard = false;
    for (let i = 0; i < Math.min(A.length, B.length); i++) {
      if (A[i] + B[i] >= 10) {
        is_hard = true;
      }
    }

    if (is_hard) {
      console.log('Hard');
    } else {
      console.log('Easy');
    }
  });
})();
