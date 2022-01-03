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
    let S = lines[0];
    const T = lines[1];

    const table = new Map([
      ['a', 'b'],
      ['b', 'c'],
      ['c', 'd'],
      ['d', 'e'],
      ['e', 'f'],
      ['f', 'g'],
      ['g', 'h'],
      ['h', 'i'],
      ['i', 'j'],
      ['j', 'k'],
      ['k', 'l'],
      ['l', 'm'],
      ['m', 'n'],
      ['n', 'o'],
      ['o', 'p'],
      ['p', 'q'],
      ['q', 'r'],
      ['r', 's'],
      ['s', 't'],
      ['t', 'u'],
      ['u', 'v'],
      ['v', 'w'],
      ['w', 'x'],
      ['x', 'y'],
      ['y', 'z'],
      ['z', 'a'],
    ]);

    let ok = false;
    for (let i = 0; i < 26; i++) {
      if (S === T) {
        ok = true;
      }
      S = S.split('')
        .map((e) => {
          return table.get(e);
        })
        .join('');
    }

    if (ok) {
      console.log('Yes');
    } else {
      console.log('No');
    }
  });
})();
