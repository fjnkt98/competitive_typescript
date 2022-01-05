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

    let innerProduct = 0;
    for (let i = 0; i < N; i++) {
      innerProduct += A[i] * B[i];
    }

    if (innerProduct === 0) {
      console.log('Yes');
    } else {
      console.log('No');
    }
  });
})();
