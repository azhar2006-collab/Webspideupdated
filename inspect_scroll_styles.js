const fs = require('fs');
const html = fs.readFileSync('indexreact1.html', 'utf8');

console.log('=== SCROLL MARGIN / HEADER HEIGHT CSS ===');
const cssMatches = html.match(/.*scroll-margin.*|.*--nav-h.*/gi);
console.log(cssMatches);

console.log('\n=== SERVICE CARD CSS HEADERS ===');
const cardCss = html.match(/\.service-card[\s\S]*?\{[\s\S]*?\}/gi);
console.log(cardCss ? cardCss.slice(0, 5) : 'None');

console.log('\n=== CLICK / SCROLL JS HANDLERS ===');
const jsMatches = html.match(/.*scrollIntoView.*|.*scrollTo.*|.*addEventListener\(['"]click['"].*/gi);
console.log(jsMatches);
