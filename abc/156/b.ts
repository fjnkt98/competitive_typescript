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
    const [N, K] = lines[0].split(' ').map((e) => {
      return Number(e);
    });

    console.log(N.toString(K).length);
  });
})();
