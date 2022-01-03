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
    const S: string[] = [];
    for (let i = 0; i < N; i++) {
      S.push(lines[i + 1]);
    }

    const map = new Map<string, number>();
    for (let i = 0; i < N; i++) {
      if (!map.has(S[i])) {
        map.set(S[i], 1);
      } else {
        const value = map.get(S[i]);
        if (value !== undefined) {
          map.set(S[i], value + 1);
        }
      }
    }

    let answer = '';
    let maximum_vote = 0;
    map.forEach((value, key) => {
      if (maximum_vote < value) {
        maximum_vote = value;
        answer = key;
      }
    });

    console.log(answer);
  });
})();
