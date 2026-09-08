const fs = require('fs');

let html = fs.readFileSync('indexseomarket1.html', 'utf8');

// 1. Fix mobile orbit cards HTML block
const oldMobBlock = html.substring(html.indexOf('<div class="orbit-cards-mobile">'), html.indexOf('</div>\n\n<!-- BANNER 1 -->') + 6);
const fixedMobBlock = `<div class="orbit-cards-mobile">
  <a href="#svc-card-1" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div><div><div class="orb-card-name">Google Search Ads</div><div class="orb-card-tag">High-intent PPC campaigns</div></div></a>
  <a href="#svc-card-2" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg></div><div><div class="orb-card-name">Google Display Ads</div><div class="orb-card-tag">Reach &amp; remarketing</div></div></a>
  <a href="#svc-card-3" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></div><div><div class="orb-card-name">Google Shopping Ads</div><div class="orb-card-tag">Ecommerce sales growth</div></div></a>
</div>`;

html = html.replace(oldMobBlock, fixedMobBlock);

// 2. Fix single quotes in font-family inside the JS script block for HWW steps
// Replace font-family:'Orbitron' with font-family:&quot;Orbitron&quot; or font-family:sans-serif
html = html.replace(/font-family:\\'Orbitron\\'/g, 'font-family:Orbitron');
html = html.replace(/font-family:'Orbitron'/g, 'font-family:Orbitron');

fs.writeFileSync('indexseomarket1.html', html, 'utf8');
console.log('Bugs fixed in indexseomarket1.html');
