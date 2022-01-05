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
    const [A, B] = lines[0].split(' ');

    let a = 0;
    const offset = '0'.charCodeAt(0);
    A.split('').forEach((e) => {
      a += Number(e.charCodeAt(0) - offset);
    });
    let b = 0;
    B.split('').forEach((e) => {
      b += Number(e.charCodeAt(0) - offset);
    });

    console.log(Math.max(a, b));
  });
})();
