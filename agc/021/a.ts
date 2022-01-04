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
    const N = lines[0];

    let answer1 = Number(N.charCodeAt(0) - '1'.charCodeAt(0));
    for (let i = 0; i < N.length - 1; i++) {
      answer1 += 9;
    }

    let answer2 = 0;
    N.split('').forEach((e) => {
      answer2 += Number(e.charCodeAt(0) - '0'.charCodeAt(0));
    });

    console.log(Math.max(answer1, answer2));
  });
})();
