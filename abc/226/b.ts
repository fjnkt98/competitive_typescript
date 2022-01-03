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
    const A: string[] = [];
    for (let i = 1; i <= N; i++) {
      A.push(lines[i].split(' ').slice(1).join());
    }
    const set = new Set<string>();
    A.forEach((e) => {
      set.add(e);
    });

    console.log(set.size);
  });
})();
