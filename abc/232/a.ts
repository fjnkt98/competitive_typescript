'use strict';

function main() {
  const lines: string[] = [];
  const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  reader.on('line', (line: string) => {
    lines.push(line);
  });

  reader.on('close', () => {
    const a = Number(lines[0].charAt(0));
    const b = Number(lines[0].charAt(2));

    console.log(a * b);
  });
}

main();
