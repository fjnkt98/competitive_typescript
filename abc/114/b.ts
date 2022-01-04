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

    let answer = 1e9;
    for (let i = 0; i < S.length; i++) {
      const X = Number(S.substring(i, i + 3));

      answer = Math.min(answer, Math.abs(X - 753));
    }

    console.log(answer);
  });
})();
