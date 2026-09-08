const fs = require('fs');

const html = fs.readFileSync('indexseomarket1.html', 'utf8');

const scriptBlocks = html.match(/<script>([\s\S]*?)<\/script>/gi) || [];
console.log('Script block 1 content:');
const sb1 = scriptBlocks[0].replace(/<\/?script>/gi, '');

try {
  new Function(sb1);
  console.log('Syntax valid!');
} catch (err) {
  console.error('Syntax Error:', err.message);
  // Find where Orbitron is in sb1
  const lines = sb1.split('\n');
  lines.forEach((l, idx) => {
    if (l.includes('Orbitron')) {
      console.log(`Line ${idx + 1}: ${l}`);
    }
  });
}
