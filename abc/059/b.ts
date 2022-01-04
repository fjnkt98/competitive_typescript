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
    const A = lines[0];
    const B = lines[1];

    let answer = '';
    if (A.length > B.length) {
      answer = 'GREATER';
    } else if (A.length < B.length) {
      answer = 'LESS';
    } else {
      if (A === B) {
        answer = 'EQUAL';
      } else {
        for (let i = 0; i < A.length; i++) {
          if (A.charAt(i) > B.charAt(i)) {
            answer = 'GREATER';
            break;
          } else if (A.charAt(i) < B.charAt(i)) {
            answer = 'LESS';
            break;
          }
        }
      }
    }

    console.log(answer);
  });
})();
