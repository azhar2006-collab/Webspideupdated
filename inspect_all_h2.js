const fs = require('fs');
const html = fs.readFileSync('indexfront1.html', 'utf8');

const h2Matches = html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g);
let i = 0;
for (const m of h2Matches) {
  i++;
  console.log(`H2 #${i}: ${m[1].replace(/\s+/g, ' ').trim()}`);
}
