const fs = require('fs');

const html = fs.readFileSync('indexseomarket1.html', 'utf8');

const lines = html.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('Orbitron')) {
    console.log(`Line ${idx + 1}: ${l}`);
  }
});
