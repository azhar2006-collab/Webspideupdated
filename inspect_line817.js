const fs = require('fs');

const html = fs.readFileSync('indexseomarket1.html', 'utf8');

const lines = html.split('\n');
const line817 = lines[816]; // 0-indexed
console.log('Line 817 string:');
console.log(line817);

const fontIdx = line817.indexOf('font-family');
console.log('Substring:', line817.substring(fontIdx, fontIdx + 50));
console.log('Char codes:', [...line817.substring(fontIdx, fontIdx + 50)].map(c => c.charCodeAt(0)));
