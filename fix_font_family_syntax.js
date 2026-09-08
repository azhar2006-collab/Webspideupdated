const fs = require('fs');

let html = fs.readFileSync('indexseomarket1.html', 'utf8');

// Replace all font-family="'Orbitron', sans-serif" or font-family=\'Orbitron\', sans-serif with font-family="sans-serif"
html = html.replace(/font-family:\\'Orbitron\\', sans-serif/g, 'font-family:sans-serif');
html = html.replace(/font-family:'Orbitron', sans-serif/g, 'font-family:sans-serif');
html = html.replace(/font-family='Orbitron', sans-serif/g, 'font-family:sans-serif');
html = html.replace(/font-family="Orbitron", sans-serif/g, 'font-family:sans-serif');

fs.writeFileSync('indexseomarket1.html', html, 'utf8');
console.log('Fixed script syntax quotes!');
