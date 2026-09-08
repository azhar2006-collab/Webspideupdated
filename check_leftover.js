const fs = require('fs');
const html = fs.readFileSync('indexfront1.html', 'utf8');

const queries = ['Custom Web Development', 'Backend', 'Custom Web', 'Full-Stack Custom', 'E-Commerce Dev', 'Migration & Upgradation'];

queries.forEach(q => {
  let count = 0;
  let pos = html.indexOf(q);
  while (pos !== -1) {
    count++;
    console.log(`Match for "${q}" at pos ${pos}:`);
    console.log('   ...', html.substring(Math.max(0, pos - 40), Math.min(html.length, pos + 100)).replace(/\n/g, ' '), '...');
    pos = html.indexOf(q, pos + 1);
  }
  console.log(`Total count for "${q}": ${count}\n`);
});
