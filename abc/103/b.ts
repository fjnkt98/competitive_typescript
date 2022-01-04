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
    const T = lines[1];

    let R = S;
    let ok = false;
    for (let i = 0; i < S.length; i++) {
      if (R === T) {
        ok = true;
      }
      R = R.charAt(S.length - 1) + R.substring(0, S.length - 1);
    }

    if (ok) {
      console.log('Yes');
    } else {
      console.log('No');
    }
  });
})();
