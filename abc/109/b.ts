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
    const N = Number(lines[0]);
    const W = new Array<string>(N);
    for (let i = 0; i < N; i++) {
      W[i] = lines[i + 1];
    }

    let ok = true;
    let tail = W[0].charAt(W[0].length - 1);
    const set = new Set<string>();
    set.add(W[0]);
    for (let i = 1; i < N; i++) {
      const head = W[i].charAt(0);
      if (head !== tail || set.has(W[i])) {
        ok = false;
      }

      tail = W[i].charAt(W[i].length - 1);
      set.add(W[i]);
    }

    if (ok) {
      console.log('Yes');
    } else {
      console.log('No');
    }
  });
})();
