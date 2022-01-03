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
    const [N, X] = lines[0].split(' ').map((e) => {
      return Number(e);
    });
    const A = lines[1].split(' ').map((e) => {
      return Number(e);
    });

    const known: boolean[] = new Array<boolean>(N);
    known.fill(false);

    let index = X - 1;
    while (known[index] === false) {
      known[index] = true;
      index = A[index] - 1;
    }

    let answer = 0;
    known.forEach((e) => {
      if (e) answer++;
    });

    console.log(answer);
  });
})();
