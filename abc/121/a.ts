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
    const [h, w] = lines[1].split(' ').map((e) => Number(e));

    console.log((H - h) * (W - w));
  });
})();
