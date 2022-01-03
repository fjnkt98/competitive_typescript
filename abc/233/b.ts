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
    const [L, R] = lines[0].split(' ').map((e) => Number(e));
    const S = lines[1].trim();

    const first = S.slice(0, L - 1);
    const second = S.slice(L - 1, R)
      .split('')
      .reverse()
      .join('');
    const third = S.slice(R);

    console.log(`${first}${second}${third}`);
  });
})();
