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
    const S = lines[1].split(' ').map((e) => {
      return Number(e);
    });

    let answer = 0;
    S.forEach((e) => {
      let ok = false;

      for (let a = 1; a <= 1000; a++) {
        for (let b = 1; b <= 1000; b++) {
          const area = 4 * a * b + 3 * a + 3 * b;

          if (area === e) {
            ok = true;
          }
        }
      }

      if (!ok) {
        answer++;
      }
    });

    console.log(answer);
  });
})();
