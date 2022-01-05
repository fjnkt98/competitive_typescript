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
    const mod = 1000000007;

    let power = 1;
    for (let i = 1; i <= N; i++) {
      power *= i;
      power = power % mod;
    }

    console.log(power);
  });
})();
