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
    const [M1, D1] = lines[0].split(' ').map((e) => {
      return Number(e);
    });
    const [M2, D2] = lines[1].split(' ').map((e) => {
      return Number(e);
    });

    if (D2 === 1) {
      console.log(1);
    } else {
      console.log(0);
    }
  });
})();
