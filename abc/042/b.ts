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
    const [N, L] = lines[0].split(' ').map((e) => Number(e));
    const S = new Array<string>(N);
    for (let i = 0; i < N; i++) {
      S[i] = lines[i + 1];
    }

    S.sort();

    console.log(S.join(''));
  });
})();
