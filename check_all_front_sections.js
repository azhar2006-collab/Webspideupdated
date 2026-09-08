const fs = require('fs');
const html = fs.readFileSync('indexfront1.html', 'utf8');

console.log('=== CHECKING INDEXFRONT1.HTML SECTIONS ===');

const sections = [
  { name: 'Head Title', match: html.match(/<title>([\s\S]*?)<\/title>/) },
  { name: 'Meta Description', match: html.match(/name="description"\s+content="([\s\S]*?)"/) },
  { name: 'Hero Badge', match: html.match(/<div class="badge fade-in">([\s\S]*?)<\/div>/) },
  { name: 'Hero H1', match: html.match(/<h1 class="fade-in delay-1">([\s\S]*?)<\/h1>/) },
  { name: 'Hero Desc', match: html.match(/<p class="hero-desc fade-in delay-2">([\s\S]*?)<\/p>/) },
  { name: 'B1 Title', match: html.match(/<div class="b1-title gradient-heading">([\s\S]*?)<\/div>/) },
  { name: 'B1 Desc', match: html.match(/<p class="b1-desc">([\s\S]*?)<\/p>/) },
  { name: 'Services Title', match: html.match(/<h2 class="section-title gradient-heading">([\s\S]*?)<\/h2>/) },
  { name: 'Tech Stack Header H2', match: html.match(/<h2 class="gradient-heading">Technologies We Use for <span>([\s\S]*?)<\/span><\/h2>/) },
  { name: 'Why Choose Title', match: html.match(/<div class="left-title gradient-heading">([\s\S]*?)<\/div>/) },
  { name: 'Workflow Header H2', match: html.match(/<h2 class="section-title gradient-heading">Our Front-End Development Workflow Process<\/h2>/) },
];

sections.forEach(s => {
  console.log(`\n[${s.name}]:`);
  if (s.match) {
    console.log(s.match[1].replace(/\s+/g, ' ').trim());
  } else {
    console.log('--- NOT FOUND ---');
  }
});
