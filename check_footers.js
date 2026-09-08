const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  // Find Footer Services column
  const footerServicesIdx = content.indexOf('<h4>Services</h4>');
  if (footerServicesIdx !== -1) {
    const snippet = content.slice(footerServicesIdx, footerServicesIdx + 300);
    console.log(`\n--- ${file} FOOTER SERVICES ---`);
    console.log(snippet);
  }
});
