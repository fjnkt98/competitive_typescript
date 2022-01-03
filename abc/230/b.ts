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

    const T = 'oxxoxxoxxoxxoxxoxx';
    let ok = false;
    for (let i = 0; i < T.length - S.length; i++) {
      let match = true;
      for (let j = 0; j < S.length; j++) {
        if (T[i + j] !== S[j]) {
          match = false;
        }
      }
      if (match === true) {
        ok = true;
      }
    }

    if (ok) {
      console.log('Yes');
    } else {
      console.log('No');
    }
  });
})();
