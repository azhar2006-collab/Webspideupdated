const fs = require('fs');

const html = fs.readFileSync('indexreact1.html', 'utf8');

const sections = html.split(/<section\b/i);
console.log('Total sections in indexreact1.html:', sections.length - 1);

for (let i = 1; i < sections.length; i++) {
  const secHtml = '<section' + sections[i].split('</section>')[0] + '</section>';
  console.log(`=== SECTION ${i} ===`);
  const matchHead = secHtml.match(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi);
  console.log('Headings:', matchHead ? matchHead.map(h => h.replace(/<[^>]+>/g, '').trim()) : []);
}
