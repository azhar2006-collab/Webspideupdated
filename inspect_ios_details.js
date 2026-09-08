const fs = require('fs');
const html = fs.readFileSync('indexios1.html', 'utf8');

console.log('=== HERO HEADINGS ===');
const heroMatch = html.match(/<div class="hero-content">[\s\S]*?<\/div>\s*<\/div>/);
if (heroMatch) console.log(heroMatch[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));

console.log('\n=== BANNER 1 & 2 ===');
const bannerMatches = html.match(/<div class="banner[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g);
if (bannerMatches) {
  bannerMatches.forEach((b, idx) => console.log(`Banner ${idx+1}:`, b.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 150)));
}

console.log('\n=== SERVICE CARDS ===');
const serviceCards = html.match(/<div class="service-card[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g);
console.log('Service cards count:', serviceCards ? serviceCards.length : 0);

console.log('\n=== WHY CHOOSE US ===');
const whyChoose = html.match(/<div class="why-choose-wrapper">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/);
if (whyChoose) console.log('Why choose length:', whyChoose[0].length);
