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
    'abcdefghijklmnopqrstuvwxyz'.split('').forEach((e) => {
      set.add(e);
    });

    S.split('').forEach((e) => {
      set.delete(e);
    });

    if (set.size === 0) {
      console.log('None');
    } else {
      const residue = new Array<string>();
      set.forEach((e) => {
        residue.push(e);
      });

      residue.sort();

      console.log(residue[0]);
    }
  });
})();
