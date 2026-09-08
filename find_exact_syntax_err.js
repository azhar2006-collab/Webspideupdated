const fs = require('fs');

const html = fs.readFileSync('indexseomarket1.html', 'utf8');

const scriptBlocks = html.match(/<script[\s\S]*?<\/script>/gi) || [];

scriptBlocks.forEach((sb, idx) => {
  console.log(`\n================= SCRIPT BLOCK ${idx + 1} =================`);
  const inner = sb.replace(/<\/?script>/gi, '');
  try {
    new Function(inner);
    console.log('✅ Syntax valid');
  } catch (err) {
    console.log('❌ Syntax error:', err.message);
    const lines = inner.split('\n');
    lines.forEach((l, lIdx) => {
      if (l.includes('Orbitron')) {
        console.log(`Line ${lIdx + 1}: ${l}`);
      }
    });
  }
});
