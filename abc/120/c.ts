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
    const S = lines[0];

    let blue = 0;
    let red = 0;
    S.split('').forEach((e) => {
      if (e === '0') {
        red++;
      } else {
        blue++;
      }
    });

    console.log(2 * Math.min(red, blue));
  });
})();
