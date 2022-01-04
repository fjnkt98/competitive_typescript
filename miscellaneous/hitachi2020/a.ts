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

    if (S.length % 2 === 1) {
      console.log('No');
    } else {
      const T = 'hi'.repeat(S.length / 2);

      if (S === T) {
        console.log('Yes');
      } else {
        console.log('No');
      }
    }
  });
})();
