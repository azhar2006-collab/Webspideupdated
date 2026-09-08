const fs = require('fs');

const html = fs.readFileSync('indexseomarket1.html', 'utf8');

const lines = html.split('\n');
lines.forEach((line, idx) => {
  if (/custom web development|full-stack/i.test(line)) {
    console.log(`Line ${idx + 1}: ${line.trim().substring(0, 120)}`);
  }
});
