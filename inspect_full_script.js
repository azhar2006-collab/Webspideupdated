const fs = require('fs');
const html = fs.readFileSync('indexreact1.html', 'utf8');

const scriptContent = html.split('<script>')[1].split('</script>')[0];
const lines = scriptContent.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('goToService') || line.includes('target') || line.includes('scroll') || line.includes('SERVICES') || line.includes('orb')) {
    console.log(`L${idx+1}: ${line}`);
  }
});
