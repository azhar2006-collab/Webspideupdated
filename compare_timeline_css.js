const fs = require('fs');

const hIdx = fs.readFileSync('index.html', 'utf8');
const hSem = fs.readFileSync('indexsem1.html', 'utf8');

function findCss(html, selector) {
  const i = html.indexOf(selector);
  if (i === -1) return `${selector}: NOT FOUND`;
  return html.slice(i, i + 500);
}

console.log('=== index.html CSS ===');
console.log(findCss(hIdx, '.process-timeline'));

console.log('=== indexsem1.html CSS ===');
console.log(findCss(hSem, '.process-timeline'));
