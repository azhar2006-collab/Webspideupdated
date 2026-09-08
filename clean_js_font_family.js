const fs = require('fs');

let html = fs.readFileSync('indexseomarket1.html', 'utf8');

// Replace all instances of font-family="..." or font-family='...' in illus
html = html.replace(/font-family:\\'Orbitron\\', sans-serif/g, 'font-family:sans-serif');
html = html.replace(/font-family:'Orbitron', sans-serif/g, 'font-family:sans-serif');
html = html.replace(/font-family=\\'Orbitron\\', sans-serif/g, 'font-family:sans-serif');
html = html.replace(/font-family='Orbitron', sans-serif/g, 'font-family:sans-serif');
html = html.replace(/font-family="Orbitron", sans-serif/g, 'font-family:sans-serif');

// Fallback: replace any font-family:... inside script block
const scriptStart = html.indexOf('<script>\n(function(){\n  const steps=[');
if (scriptStart !== -1) {
  const scriptEnd = html.indexOf('</script>', scriptStart);
  let scriptBody = html.substring(scriptStart, scriptEnd);
  scriptBody = scriptBody.replace(/font-family:[^;"]+/g, 'font-family:sans-serif');
  html = html.substring(0, scriptStart) + scriptBody + html.substring(scriptEnd);
} else {
  // Let's do global regex replace for any font-family with Orbitron inside script
  html = html.replace(/font-family:\\["']Orbitron\\["'],?\s*sans-serif/g, 'font-family:sans-serif');
}

fs.writeFileSync('indexseomarket1.html', html, 'utf8');
console.log('Done cleaning JS font-family quotes.');
