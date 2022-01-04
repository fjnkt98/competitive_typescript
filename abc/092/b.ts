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
    const [D, X] = lines[1].split(' ').map((e) => Number(e));
    const A = new Array<number>(N);
    for (let i = 0; i < N; i++) {
      A[i] = Number(lines[i + 2]);
    }

    let consumption = 0;
    for (let i = 0; i < N; i++) {
      let day = 1;
      while (day <= D) {
        consumption++;
        day += A[i];
      }
    }

    console.log(consumption + X);
  });
})();
