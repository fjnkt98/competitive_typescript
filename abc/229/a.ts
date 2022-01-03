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
    if (
      (lines[0] === '.#' && lines[1] === '#.') ||
      (lines[0] === '#.' && lines[1] === '.#')
    ) {
      console.log('No');
    } else {
      console.log('Yes');
    }
  });
})();
