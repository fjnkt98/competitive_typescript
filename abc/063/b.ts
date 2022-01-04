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

    const set = new Set<string>();
    S.split('').forEach((e) => {
      set.add(e);
    });

    if (S.length === set.size) {
      console.log('yes');
    } else {
      console.log('no');
    }
  });
})();
