const fs = require('fs');

let html = fs.readFileSync('indexseomarket1.html', 'utf8');

// Fix unescaped single quotes inside single-quoted JS string literals
html = html.replace(/font-family:\\'Orbitron\\', sans-serif/g, 'font-family:Orbitron, sans-serif');
html = html.replace(/font-family:'Orbitron', sans-serif/g, 'font-family:Orbitron, sans-serif');

// Check if there are any other unescaped single quotes inside SVG text in JS
html = html.replace(/font-family='Orbitron'/g, 'font-family="Orbitron"');

fs.writeFileSync('indexseomarket1.html', html, 'utf8');
console.log('Fixed font-family quotes in JS strings!');
