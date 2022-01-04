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

    let ok = true;
    if (S.charAt(0) !== 'A') {
      ok = false;
    }

    let count = 0;
    S.substring(2, S.length - 1)
      .split('')
      .forEach((e) => {
        if (e === 'C') {
          count++;
        }
      });
    if (count !== 1) {
      ok = false;
    }

    if (
      S.charAt(0) === 'C' ||
      S.charAt(1) === 'C' ||
      S.charAt(S.length - 1) === 'C'
    ) {
      ok = false;
    }

    const isLowerCase = (c: string) => {
      return /^[a-z]$/.test(c);
    };

    count = 0;
    S.split('').forEach((e) => {
      if (isLowerCase(e)) {
        count++;
      }
    });
    if (count !== S.length - 2) {
      ok = false;
    }

    if (ok) {
      console.log('AC');
    } else {
      console.log('WA');
    }
  });
})();
