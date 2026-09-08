const fs = require('fs');

let html = fs.readFileSync('indexseomarket1.html', 'utf8');

// Replace all font-family="..." or font-family='...' in illus
html = html.replace(/font-family:\\'Orbitron\\', sans-serif/g, 'font-family:sans-serif');
html = html.replace(/font-family:'Orbitron', sans-serif/g, 'font-family:sans-serif');

fs.writeFileSync('indexseomarket1.html', html, 'utf8');

// Re-test JS syntax now
const scriptBlocks = html.match(/<script[\s\S]*?<\/script>/gi) || [];
let allValid = true;
scriptBlocks.forEach((sb, idx) => {
  const inner = sb.replace(/<\/?script>/gi, '');
  try {
    new Function(inner);
    console.log(`Script block ${idx + 1}: Syntax VALID! ✅`);
  } catch (err) {
    allValid = false;
    console.error(`Script block ${idx + 1}: Syntax ERROR ❌:`, err.message);
  }
});
console.log('Final JS Syntax Check:', allValid ? '100% VALID! ✅' : 'FAILED ❌');
