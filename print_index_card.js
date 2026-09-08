const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

const cardStart = indexHtml.indexOf('<div class="service-card');
const cardEnd = indexHtml.indexOf('<div class="service-card', cardStart + 20);

console.log('=== CARD 01 IN INDEX.HTML ===');
console.log(indexHtml.substring(cardStart, cardEnd));
