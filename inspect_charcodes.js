const fs = require('fs');

const html = fs.readFileSync('indexseomarket1.html', 'utf8');

const idx = html.indexOf('font-family:');
console.log('Found font-family: at index', idx);
const slice = html.substring(idx, idx + 40);
console.log('Slice:', slice);
console.log('CharCodes:', [...slice].map(c => c.charCodeAt(0)));
