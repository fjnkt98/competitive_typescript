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
    const [A, B] = lines[0].split(' ').map((e) => {
      return Number(e);
    });

    let answer = 0;
    let outlets = 1;
    while (outlets < B) {
      outlets += A - 1;
      answer++;
    }

    console.log(answer);
  });
})();
