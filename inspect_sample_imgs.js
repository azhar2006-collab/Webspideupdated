const fs = require('fs');

['indexemail1.html', 'indexinfluence1.html', 'indexsem1.html'].forEach(filename => {
  if (!fs.existsSync(filename)) return;
  const html = fs.readFileSync(filename, 'utf8');
  console.log(`=== ${filename} ===`);
  const stepsMatch = html.match(/const steps=\[\s*([\s\S]*?)\];\s*function/);
  if (stepsMatch) {
    const illusMatches = [...stepsMatch[1].matchAll(/illus:\s*['"`]([\s\S]*?)['"`]\s*,\s*deliverables/g)];
    illusMatches.forEach((m, idx) => {
      console.log(`Step ${idx + 1} illus:`, m[1]);
    });
  }
});
