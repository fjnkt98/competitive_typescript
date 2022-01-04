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

    const referenceArray1 = new Array<number>(S.length);
    const referenceArray2 = new Array<number>(S.length);
    for (let i = 0; i < S.length; i++) {
      if (i % 2 === 0) {
        referenceArray1[i] = 0;
        referenceArray2[i] = 1;
      } else {
        referenceArray1[i] = 1;
        referenceArray2[i] = 0;
      }
    }

    let cost1 = 0;
    let cost2 = 0;
    S.split('').forEach((e, i) => {
      if (Number(e) !== referenceArray1[i]) {
        cost1++;
      }
      if (Number(e) !== referenceArray2[i]) {
        cost2++;
      }
    });

    console.log(Math.min(cost1, cost2));
  });
})();
