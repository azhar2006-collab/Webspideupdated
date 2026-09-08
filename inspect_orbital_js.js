const fs = require('fs');
const html = fs.readFileSync('indexreact1.html', 'utf8');

const startIdx = html.indexOf('const SERVICES');
const endIdx = html.indexOf('</script>', startIdx);
console.log(html.slice(startIdx, endIdx));
