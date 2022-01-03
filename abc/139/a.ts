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
    const T = lines[1];

    let answer = 0;
    for (let i = 0; i < S.length; i++) {
      if (S.charAt(i) === T.charAt(i)) {
        answer++;
      }
    }

    console.log(answer);
  });
})();
