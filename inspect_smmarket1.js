const fs = require('fs');
const h = fs.readFileSync('indexsmmarket1.html', 'utf8');

// Get card titles
const r = /id="svc-card-(\d+)"[\s\S]*?<h2 class="card-title">([\s\S]*?)<\/h2>/g;
let m;
while ((m = r.exec(h)) !== null) {
  console.log('Card', m[1], ':', m[2].replace(/<[^>]+>/g, '').replace(/\n/g, ' ').trim());
}

// Get all img srcs in service cards section
const servIdx = h.indexOf('<section class="services-section');
const servEnd = h.indexOf('</section>', servIdx);
const servSection = h.substring(servIdx, servEnd);
const imgR = /<img[^>]+src="([^"]+)"/g;
let im;
console.log('\nCurrent card img srcs:');
while ((im = imgR.exec(servSection)) !== null) {
  console.log(' ', im[1]);
}

// Get workflow steps current illus
const stepsIdx = h.indexOf('const steps=[');
const stepsEnd = h.indexOf('];', stepsIdx);
if (stepsIdx !== -1) {
  const stepsStr = h.substring(stepsIdx, stepsEnd);
  const illusMatches = [...stepsStr.matchAll(/illus:'([\s\S]*?)'\s*,\s*deliverables/g)];
  console.log('\nCurrent workflow illus srcs:');
  illusMatches.forEach((m, i) => {
    const srcMatch = m[1].match(/src="([^"]+)"/);
    console.log(`Step ${i+1}:`, srcMatch ? srcMatch[1] : m[1].substring(0, 80));
  });
}
