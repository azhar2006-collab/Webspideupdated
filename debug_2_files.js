const fs = require('fs');

['indexandroid1.html', 'indexios1.html'].forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  console.log(`=== ${f} ===`);
  const i = c.indexOf('mega-dropdown');
  console.log(c.slice(i - 20, i + 2500));
});
