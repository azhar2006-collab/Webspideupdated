const fs = require('fs');

['indexinfluence1.html', 'indexemail1.html', 'indexreact1.html'].forEach(fn => {
  if (fs.existsSync(fn)) {
    const html = fs.readFileSync(fn, 'utf8');
    console.log(`=== ${fn} ===`);
    const m = html.match(/const SERVICES=\[[\s\S]*?\];/);
    if (m) console.log(m[0]);
    const mob = html.match(/<div class="orbit-cards-mobile">[\s\S]*?<\/div>/);
    if (mob) console.log(mob[0]);
  }
});
