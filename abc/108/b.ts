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
    const [x1, y1, x2, y2] = lines[0].split(' ').map((e) => Number(e));

    const diffX = x2 - x1;
    const diffY = y2 - y1;

    const x3 = x2 - diffY;
    const y3 = y2 + diffX;
    const x4 = x1 - diffY;
    const y4 = y1 + diffX;

    console.log(x3, y3, x4, y4);
  });
})();
