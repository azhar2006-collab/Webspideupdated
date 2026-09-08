const fs = require('fs');
const html = fs.readFileSync('indexreact1.html', 'utf8');

console.log('=== CSS SCROLL MARGIN CHECK ===');
const cssMatch = html.match(/\.service-card\{scroll-margin-top:[^;]+;/);
console.log(cssMatch ? cssMatch[0] : 'CSS NOT FOUND');

console.log('\n=== JS goToService CHECK ===');
const jsMatch = html.match(/function goToService[\s\S]*?\}\n  \}/);
console.log(jsMatch ? jsMatch[0] : 'JS NOT FOUND');

console.log('\n=== ANCHOR SCROLL SCRIPT CHECK ===');
const anchorMatch = html.match(/\/\/ Smooth scroll offset handler[\s\S]*?\}\);/);
console.log(anchorMatch ? anchorMatch[0] : 'ANCHOR SCRIPT NOT FOUND');
