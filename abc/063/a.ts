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

    if (A + B < 10) {
      console.log(A + B);
    } else {
      console.log('error');
    }
  });
})();
