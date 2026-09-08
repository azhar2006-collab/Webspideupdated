const fs = require('fs');
const html = fs.readFileSync('index1.html', 'utf8');

const wcPos = html.indexOf('Why Choose Webspide');
console.log('wcPos:', wcPos);
console.log(html.substring(wcPos + 1000, wcPos + 3500));
