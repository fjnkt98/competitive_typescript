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
    const w = lines[0];

    const offset = 'a'.charCodeAt(0);
    const count = new Array<number>(26);
    count.fill(0);

    w.split('').forEach((e) => {
      const index = e.charCodeAt(0) - offset;
      count[index]++;
    });

    const ok = count.every((e) => {
      return e % 2 === 0;
    });

    if (ok) {
      console.log('Yes');
    } else {
      console.log('No');
    }
  });
})();
