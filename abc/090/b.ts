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
    const [A, B] = lines[0].split(' ').map((e) => Number(e));

    let answer = 0;
    for (let i = A; i <= B; i++) {
      const S = i.toString();
      if (S === S.split('').reverse().join('')) {
        answer++;
      }
    }

    console.log(answer);
  });
})();
