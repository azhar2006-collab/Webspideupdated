const fs = require('fs');

const html = fs.readFileSync('indexseomarket1.html', 'utf8');

const scriptTagIdx = html.indexOf('(function(){\n  const steps=[');
console.log('Script snippet around steps array:\n');
console.log(html.substring(scriptTagIdx + 1200, scriptTagIdx + 2000));
