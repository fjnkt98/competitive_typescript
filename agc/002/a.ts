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
    const [a, b] = lines[0].split(' ').map((e) => Number(e));

    if (a === 0 || b === 0) {
      console.log('Zero');
      return;
    }

    if (a > 0 && b > 0) {
      console.log('Positive');
      return;
    }

    if (Math.sign(a) !== Math.sign(b)) {
      console.log('Zero');
      return;
    }

    if ((b - a) % 2 === 0) {
      console.log('Negative');
      return;
    } else {
      console.log('Positive');
      return;
    }
  });
})();
