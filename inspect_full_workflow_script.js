const fs = require('fs');
const html = fs.readFileSync('indexseocontent1.html', 'utf8');

const idx = html.indexOf('const steps=');
if (idx !== -1) {
  const scriptEnd = html.indexOf('</script>', idx);
  console.log(html.substring(idx, scriptEnd));
}
