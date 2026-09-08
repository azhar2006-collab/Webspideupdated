const fs = require('fs');
const html = fs.readFileSync('indexseomarket1.html', 'utf8');

const matches = html.match(/<div class="card-visual">[\s\S]*?<\/div>\s*<\/div>/g) || [];
console.log('Total card visuals:', matches.length);
matches.forEach((m, i) => {
  console.log(`\n--- CARD VISUAL ${i + 1} ---`);
  console.log(m);
});
