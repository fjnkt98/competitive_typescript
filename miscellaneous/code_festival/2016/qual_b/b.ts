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
    const [N, A, B] = lines[0].split(' ').map((e) => {
      return Number(e);
    });
    const S = lines[1];

    let foreignCount = 0;
    let totalCount = 0;
    S.split('').forEach((e) => {
      if (e === 'c') {
        console.log('No');
      } else {
        if (e === 'a') {
          if (totalCount < A + B) {
            console.log('Yes');
            totalCount++;
          } else {
            console.log('No');
          }
        } else {
          if (totalCount < A + B && foreignCount < B) {
            console.log('Yes');
            totalCount++;
            foreignCount++;
          } else {
            console.log('No');
          }
        }
      }
    });
  });
})();
