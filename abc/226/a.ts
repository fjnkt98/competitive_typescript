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
    const index = lines[0].indexOf('.');
    const integer = Number(lines[0].slice(0, index));
    const digit = Number(lines[0].charAt(index + 1));

    if (digit < 5) {
      console.log(integer);
    } else {
      console.log(integer + 1);
    }
  });
})();
