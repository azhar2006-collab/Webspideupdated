const fs = require('fs');

let html = fs.readFileSync('indexseomarket1.html', 'utf8');

// 1. Update Orbital SERVICES array in JS
const oldOrbitalJsPattern = /const SERVICES=\[[\s\S]*?\];/;
const newOrbitalJs = `const SERVICES=[
    {num:'01',name:'Google Search Ads',tag:'High-intent PPC campaigns — keyword research, ad creation, bid management, and conversion tracking for qualified traffic',label:'Search Ads',svg:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',target:'svc-card-1'},
    {num:'02',name:'Google Display Ads',tag:'Brand awareness and remarketing across Google Display Network — reaching relevant audiences on websites and apps',label:'Display Ads',svg:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',target:'svc-card-2'},
    {num:'03',name:'Google Shopping Ads',tag:'Ecommerce product campaigns — feed optimization, Merchant Center setup, and performance-driven shopping ads',label:'Shopping Ads',svg:'<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>',target:'svc-card-3'}
  ];`;

if (oldOrbitalJsPattern.test(html)) {
  html = html.replace(oldOrbitalJsPattern, newOrbitalJs);
  console.log('Orbital JS SERVICES array updated!');
} else {
  console.error('Could not find Orbital JS SERVICES array pattern!');
}

// 2. Update orbit-cards-mobile block
const oldOrbMobilePattern = /<div class="orbit-cards-mobile">[\s\S]*?<\/div>/;
const newOrbMobile = `<div class="orbit-cards-mobile">
  <a href="#svc-card-1" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div><div><div class="orb-card-name">Google Search Ads</div><div class="orb-card-tag">High-intent PPC campaigns</div></div></a>
  <a href="#svc-card-2" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg></div><div><div class="orb-card-name">Google Display Ads</div><div class="orb-card-tag">Reach &amp; remarketing</div></div></a>
  <a href="#svc-card-3" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></div><div><div class="orb-card-name">Google Shopping Ads</div><div class="orb-card-tag">Ecommerce sales growth</div></div></a>
</div>`;

if (oldOrbMobilePattern.test(html)) {
  html = html.replace(oldOrbMobilePattern, newOrbMobile);
  console.log('Mobile orbit cards updated!');
} else {
  console.error('Could not find mobile orbit cards pattern!');
}

fs.writeFileSync('indexseomarket1.html', html, 'utf8');
console.log('File size after fix:', fs.statSync('indexseomarket1.html').size);
