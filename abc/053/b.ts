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

    console.log(
      S.length - S.split('').reverse().indexOf('Z') - S.split('').indexOf('A')
    );
  });
})();
