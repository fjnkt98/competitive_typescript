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
    const [N, M] = lines[0].split(' ').map((e) => Number(e));
    const P = new Array<string>(M);
    const S = new Array<string>(M);
    for (let i = 0; i < M; i++) {
      [P[i], S[i]] = lines[i + 1].split(' ');
    }

    const solved = new Array<boolean>(N);
    solved.fill(false);
    const wrong = new Array<number>(N);
    wrong.fill(0);

    for (let i = 0; i < M; i++) {
      const p = Number(P[i]) - 1;
      const s = S[i];

      if (s === 'AC') {
        solved[p] = true;
      } else if (s === 'WA' && solved[p] === false) {
        wrong[p]++;
      }
    }

    let correct = 0;
    let penalty = 0;
    for (let i = 0; i < N; i++) {
      if (solved[i]) {
        correct++;
        penalty += wrong[i];
      }
    }
    console.log(`${correct} ${penalty}`);
  });
})();
