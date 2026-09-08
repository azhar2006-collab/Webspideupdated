const fs = require('fs');

const expectedWebDev = [
  'Custom Web Development',
  'WordPress Development',
  'Front-End Development',
  'Back-End Development',
  'E-Commerce Web Development',
  'Web Application Development',
  'UI/UX Design'
];

const expectedDigiMkt = [
  'Search Engine Optimization (SEO)',
  'Search Engine Marketing (SEM)',
  'Social Media Marketing',
  'Social Media Management',
  'SEO Content Writing',
  'Email Marketing',
  'Influencer Marketing',
  'App Store Optimization (ASO)'
];

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

let errors = 0;

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');

  // Search specifically for <div class="mega-dropdown"
  const megaStart = content.indexOf('<div class="mega-dropdown"');
  if (megaStart === -1) {
    console.error(`❌ ${file}: <div class="mega-dropdown"> not found`);
    errors++;
    return;
  }

  const webColStart = content.indexOf('Web Development', megaStart);
  const appColStart = content.indexOf('App Development', webColStart);
  const digiColStart = content.indexOf('Digital Marketing', appColStart);
  const megaEnd = content.indexOf('</div>\n        </div>\n      </li>', digiColStart);

  const webChunk = content.slice(webColStart, appColStart);
  const digiChunk = content.slice(digiColStart, megaEnd);

  const actualWeb = (webChunk.match(/<a [^>]*class="mega-link"[^>]*>(.*?)<\/a>/g) || []).map(a => a.replace(/<[^>]+>/g, '').trim());
  const actualDigi = (digiChunk.match(/<a [^>]*class="mega-link"[^>]*>(.*?)<\/a>/g) || []).map(a => a.replace(/<[^>]+>/g, '').trim());

  const webMatch = JSON.stringify(actualWeb) === JSON.stringify(expectedWebDev);
  const digiMatch = JSON.stringify(actualDigi) === JSON.stringify(expectedDigiMkt);

  if (!webMatch) {
    console.error(`❌ ${file} Web Dev mismatch:`, actualWeb);
    errors++;
  }
  if (!digiMatch) {
    console.error(`❌ ${file} Digi Mkt mismatch:`, actualDigi);
    errors++;
  }

  if (webMatch && digiMatch) {
    console.log(`✅ ${file}: Mega Dropdown order verified 100%!`);
  }
});

console.log(`\nVerification finished with ${errors} errors.`);
