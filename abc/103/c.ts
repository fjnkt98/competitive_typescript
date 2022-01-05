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

    let answer = 0;
    A.forEach((e) => {
      answer += e - 1;
    });

    console.log(answer);
  });
})();
