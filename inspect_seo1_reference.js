const fs = require('fs');

if (fs.existsSync('indexseo1.html')) {
  const htmlSEO = fs.readFileSync('indexseo1.html', 'utf8');
  console.log('--- INDEXSEO1.HTML SERVICES ARRAY IN ORBITAL ---');
  const m = htmlSEO.match(/const SERVICES=\[[\s\S]*?\];/);
  if (m) console.log(m[0]);
  
  console.log('--- INDEXSEO1.HTML TECH STACK SECTION ---');
  const tsIdx = htmlSEO.indexOf('ts-section-wrapper');
  if (tsIdx > -1) {
    console.log(htmlSEO.substring(tsIdx, tsIdx + 1200));
  }
}
