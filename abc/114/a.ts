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

    if (X === 3 || X === 5 || X === 7) {
      console.log('YES');
    } else {
      console.log('NO');
    }
  });
})();
