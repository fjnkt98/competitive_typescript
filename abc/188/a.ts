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
    const [X, Y] = lines[0].split(' ').map((e) => Number(e));

    if (Math.abs(X - Y) < 3) {
      console.log('Yes');
    } else {
      console.log('No');
    }
  });
})();
