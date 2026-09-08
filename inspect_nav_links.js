const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  console.log(`\n=================== ${file} ===================`);
  
  // Find mega dropdown columns
  const megaStart = content.indexOf('<div class="mega-dropdown"');
  if (megaStart !== -1) {
    const megaEnd = content.indexOf('</div>\n        </div>\n      </li>', megaStart);
    const megaHtml = content.slice(megaStart, megaEnd > megaStart ? megaEnd : megaStart + 2500);
    console.log('--- MEGA LINKS ---');
    const linkMatches = megaHtml.match(/<a [^>]*class="mega-link"[^>]*>[\s\S]*?<\/a>/g);
    if (linkMatches) {
      linkMatches.forEach(l => console.log(l.trim()));
    }
  }
  
  // Find mobile menu links
  const mobStart = content.indexOf('<nav class="mobile-menu"');
  if (mobStart !== -1) {
    const mobEnd = content.indexOf('</nav>', mobStart);
    const mobHtml = content.slice(mobStart, mobEnd);
    console.log('--- MOBILE LINKS ---');
    const mobLinkMatches = mobHtml.match(/<(a|div) [^>]*class="(mob-sub-link|mob-section-title)"[^>]*>[\s\S]*?<\/(a|div)>/g);
    if (mobLinkMatches) {
      mobLinkMatches.forEach(l => console.log(l.trim()));
    }
  }
});
