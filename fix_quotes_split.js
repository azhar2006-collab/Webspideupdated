const fs = require('fs');

let html = fs.readFileSync('indexseomarket1.html', 'utf8');

// Replace all instances of font-family:'Orbitron', sans-serif with font-family:sans-serif
html = html.split("font-family:'Orbitron', sans-serif").join('font-family:sans-serif');
html = html.split("font-family:\\'Orbitron\\', sans-serif").join('font-family:sans-serif');
html = html.split('font-family:\'Orbitron\', sans-serif').join('font-family:sans-serif');

fs.writeFileSync('indexseomarket1.html', html, 'utf8');

// Verify script block 1 syntax now
const scriptBlocks = html.match(/<script[\s\S]*?<\/script>/gi) || [];
scriptBlocks.forEach((sb, idx) => {
  const inner = sb.replace(/<\/?script>/gi, '');
  try {
    new Function(inner);
    console.log(`Script block ${idx + 1}: Syntax VALID! ✅`);
  } catch (err) {
    console.error(`Script block ${idx + 1}: Syntax ERROR ❌:`, err.message);
  }
});
