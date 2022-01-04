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
    const [H, W] = lines[0].split(' ').map((e) => Number(e));
    const C = new Array<string>(H);
    for (let i = 0; i < H; i++) {
      C[i] = lines[i + 1];
    }

    const answer = new Array<string>(2 * H);
    for (let i = 0; i < H; i++) {
      answer[2 * i] = C[i];
      answer[2 * i + 1] = C[i];
    }

    answer.forEach((e) => {
      console.log(e);
    });
  });
})();
