const fs = require('fs');

const html = fs.readFileSync('indexreact1.html', 'utf8');

console.log('=== VERIFYING indexreact1.html ===');
console.log('Title:', (html.match(/<title>(.*?)<\/title>/) || [])[1]);

// Check section tags open vs close
const openSections = (html.match(/<section\b/gi) || []).length;
const closeSections = (html.match(/<\/section>/gi) || []).length;
console.log(`<section>: ${openSections}, </section>: ${closeSections}`);

// Check div tags open vs close
const openDivs = (html.match(/<div\b/gi) || []).length;
const closeDivs = (html.match(/<\/div>/gi) || []).length;
console.log(`<div>: ${openDivs}, </div>: ${closeDivs}`);

// Service card IDs
const cardMatches = html.match(/id="svc-card-\d+"/g);
console.log('Service Cards:', cardMatches);

// Check SERVICES array
const servicesMatch = html.match(/const SERVICES\s*=\s*\[[\s\S]*?\];/i);
if (servicesMatch) {
  const jsonStr = servicesMatch[0].replace('const SERVICES=', '').replace(/;$/, '');
  const items = eval(jsonStr);
  console.log(`SERVICES array items count: ${items.length}`);
  items.forEach(it => console.log(`  ${it.num}. ${it.label} -> ${it.target} (${it.name})`));
}

// Check headings
const sections = html.split(/<section\b/i);
for (let i = 1; i < sections.length; i++) {
  const secHtml = '<section' + sections[i].split('</section>')[0] + '</section>';
  const headMatch = secHtml.match(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi);
  console.log(`\nSection ${i} Headings:`, headMatch ? headMatch.slice(0, 3).map(h => h.replace(/<[^>]+>/g, '').trim()) : []);
}
