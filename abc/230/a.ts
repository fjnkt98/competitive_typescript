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

    if (N < 42) {
      console.log('AGC' + N.toString().padStart(3, '0'));
    } else {
      console.log('AGC' + (N + 1).toString().padStart(3, '0'));
    }
  });
})();
