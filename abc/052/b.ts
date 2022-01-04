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
    const S = lines[1];

    let x = 0;
    let answer = 0;
    S.split('').forEach((e) => {
      if (e === 'I') {
        x++;
      } else if (e === 'D') {
        x--;
      }
      answer = Math.max(answer, x);
    });

    console.log(answer);
  });
})();
