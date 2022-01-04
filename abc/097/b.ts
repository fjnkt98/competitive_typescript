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
    const X = Number(lines[0]);

    let answer = 0;
    for (let b = 1; b * b <= X; b++) {
      for (let p = 2; p < 1000; p++) {
        if (Math.pow(b, p) <= X) {
          answer = Math.max(answer, Math.pow(b, p));
        }
      }
    }

    console.log(answer);
  });
})();
