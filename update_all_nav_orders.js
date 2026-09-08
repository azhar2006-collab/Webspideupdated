const fs = require('fs');
const path = require('path');

const webDevItems = [
  { name: 'Custom Web Development', file: 'index.html' },
  { name: 'WordPress Development', file: 'indexword1.html' },
  { name: 'Front-End Development', file: 'indexfront1.html' },
  { name: 'Back-End Development', file: 'index1.html' },
  { name: 'E-Commerce Web Development', file: 'indexecom1.html' },
  { name: 'Web Application Development', file: 'indexweb1.html' },
  { name: 'UI/UX Design', file: 'indexuiux1.html' }
];

const appDevItems = [
  { name: 'Android App Development', file: 'indexandroid1.html' },
  { name: 'Flutter App Development', file: 'indexflutter1.html' },
  { name: 'iOS App Development', file: 'indexios1.html' },
  { name: 'React Native App Development', file: 'indexreact1.html' }
];

const digiMktItems = [
  { name: 'Search Engine Optimization (SEO)', file: 'indexseo1.html' },
  { name: 'Search Engine Marketing (SEM)', file: 'indexsem1.html' },
  { name: 'Social Media Marketing', file: 'indexsmmarket1.html' },
  { name: 'Social Media Management', file: 'indexmanage1.html' },
  { name: 'SEO Content Writing', file: 'indexseocontent1.html' },
  { name: 'Email Marketing', file: 'indexemail1.html' },
  { name: 'Influencer Marketing', file: 'indexinfluence1.html' },
  { name: 'App Store Optimization (ASO)', file: 'indexapp1.html' }
];

function getHref(targetFile, currentFile) {
  if (targetFile === currentFile) return '#services';
  return targetFile;
}

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

htmlFiles.forEach(currentFile => {
  let content = fs.readFileSync(currentFile, 'utf8');

  // 1. UPDATE MEGA DROPDOWN
  // Find <div class="mega-dropdown" ... > ... </div>
  const megaStart = content.indexOf('<div class="mega-dropdown"');
  if (megaStart !== -1) {
    // Find end of mega-dropdown (closing </div> for mega-dropdown)
    // We can construct the new mega-links inner HTML for each column
    
    // Column 1: Web Development
    const webLinksHtml = webDevItems.map(item => {
      const href = getHref(item.file, currentFile);
      return `<a href="${href}" class="mega-link">${item.name}</a>`;
    }).join('\n                ');

    // Column 2: App Development
    const appLinksHtml = appDevItems.map(item => {
      const href = getHref(item.file, currentFile);
      return `<a href="${href}" class="mega-link">${item.name}</a>`;
    }).join('\n                ');

    // Column 3: Digital Marketing Services
    const digiLinksHtml = digiMktItems.map(item => {
      const href = getHref(item.file, currentFile);
      return `<a href="${href}" class="mega-link">${item.name}</a>`;
    }).join('\n                ');

    // Replace Web Dev links block
    content = content.replace(
      /(<div class="mega-col-title">Web Development<\/div>\s*<\/div>\s*<div class="mega-links">)[\s\S]*?(<\/div>\s*<\/div>\s*<div class="mega-col mega-col-app">)/,
      `$1\n                ${webLinksHtml}\n              $2`
    );

    // Replace App Dev links block
    content = content.replace(
      /(<div class="mega-col-title">App Development<\/div>\s*<\/div>\s*<div class="mega-links">)[\s\S]*?(<\/div>\s*<\/div>\s*<div class="mega-col">)/,
      `$1\n                ${appLinksHtml}\n              $2`
    );

    // Replace Digital Marketing links block
    content = content.replace(
      /(<div class="mega-col-title">Digital Marketing Services<\/div>\s*<\/div>\s*<div class="mega-links"[^>]*>)[\s\S]*?(<\/div>\s*<\/div>\s*<\/div>\s*<\/div>)/,
      `$1\n                ${digiLinksHtml}\n              $2`
    );
  }

  // 2. UPDATE MOBILE MENU
  const mobStart = content.indexOf('<nav class="mobile-menu"');
  if (mobStart !== -1) {
    const mobWebLinks = webDevItems.map(item => {
      const href = getHref(item.file, currentFile);
      return `<a href="${href}" class="mob-sub-link">${item.name}</a>`;
    }).join('\n    ');

    const mobAppLinks = appDevItems.map(item => {
      const href = getHref(item.file, currentFile);
      return `<a href="${href}" class="mob-sub-link">${item.name}</a>`;
    }).join('\n    ');

    const mobDigiLinks = digiMktItems.map(item => {
      const href = getHref(item.file, currentFile);
      return `<a href="${href}" class="mob-sub-link">${item.name}</a>`;
    }).join('\n    ');

    // Replace Web Dev in mobile menu
    content = content.replace(
      /(<div class="mob-section-title">Web Development<\/div>)[\s\S]*?(<div class="mob-section-title">App Development<\/div>)/,
      `$1\n    ${mobWebLinks}\n    $2`
    );

    // Replace App Dev in mobile menu
    content = content.replace(
      /(<div class="mob-section-title">App Development<\/div>)[\s\S]*?(<div class="mob-section-title">Digital Marketing<\/div>)/,
      `$1\n    ${mobAppLinks}\n    $2`
    );

    // Replace Digital Marketing in mobile menu
    content = content.replace(
      /(<div class="mob-section-title">Digital Marketing<\/div>)[\s\S]*?(<div class="mob-section-title">Products<\/div>)/,
      `$1\n    ${mobDigiLinks}\n    $2`
    );
  }

  fs.writeFileSync(currentFile, content, 'utf8');
  console.log(`✅ Updated ${currentFile}`);
});

console.log('\n🎉 ALL 19 HTML FILES UPDATED WITH NEW NAV ORDER!');
