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
    const [N, K] = lines[0].split(' ').map((e) => {
      return Number(e);
    });
    const P: number[][] = [];
    for (let i = 1; i <= N; i++) {
      P.push(
        lines[i].split(' ').map((e) => {
          return Number(e);
        })
      );
    }

    const totalPoint = new Array<number>(N);
    for (let i = 0; i < N; i++) {
      totalPoint[i] = P[i].reduce((p, c) => {
        return p + c;
      });
    }

    const sortedTotalPoint = [...totalPoint].sort((a, b) => {
      return b - a;
    });

    totalPoint.forEach((e) => {
      if (e + 300 >= sortedTotalPoint[K - 1]) {
        console.log('Yes');
      } else {
        console.log('No');
      }
    });
  });
})();
