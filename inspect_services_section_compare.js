const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const index1Html = fs.readFileSync('index1.html', 'utf8');

const svcIndex = indexHtml.substring(indexHtml.indexOf('<section class="services-section'), indexHtml.indexOf('</section>', indexHtml.indexOf('<section class="services-section')) + 10);
const svcIndex1 = index1Html.substring(index1Html.indexOf('<section class="services-section'), index1Html.indexOf('</section>', index1Html.indexOf('<section class="services-section')) + 10);

console.log('=== INDEX.HTML SERVICES SECTION LENGTH:', svcIndex.length);
console.log('=== INDEX1.HTML SERVICES SECTION LENGTH:', svcIndex1.length);

console.log('\n--- INDEX.HTML FIRST CARD SAMPLE ---');
console.log(svcIndex.substring(svcIndex.indexOf('<div class="service-card'), svcIndex.indexOf('</div>\n  </div>', svcIndex.indexOf('<div class="service-card')) + 20));

console.log('\n--- INDEX1.HTML FIRST CARD SAMPLE ---');
console.log(svcIndex1.substring(svcIndex1.indexOf('<div class="service-card'), svcIndex1.indexOf('</div>\n  </div>', svcIndex1.indexOf('<div class="service-card')) + 20));
