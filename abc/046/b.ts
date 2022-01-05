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
    const [N, K] = lines[0].split(' ').map((e) => Number(e));

    let answer = K;
    for (let i = 1; i < N; i++) {
      answer *= K - 1;
    }

    console.log(answer);
  });
})();
