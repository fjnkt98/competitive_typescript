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

    let answer = -1;
    for (let i = 0; i <= 50000; i++) {
      if (Math.floor(i * 1.08) === N) {
        answer = i;
      }
    }

    if (answer === -1) {
      console.log(':(');
    } else {
      console.log(answer);
    }
  });
})();
