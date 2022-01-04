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
    const north = S.split('').filter((e) => e === 'N').length;
    const west = S.split('').filter((e) => e === 'W').length;
    const south = S.split('').filter((e) => e === 'S').length;
    const east = S.split('').filter((e) => e === 'E').length;

    let ok = true;
    if ((north === 0 && south !== 0) || (north !== 0 && south === 0)) {
      ok = false;
    }
    if ((west === 0 && east !== 0) || (west !== 0 && east === 0)) {
      ok = false;
    }

    if (ok) {
      console.log('Yes');
    } else {
      console.log('No');
    }
  });
})();
