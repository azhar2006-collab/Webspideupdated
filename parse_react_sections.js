const fs = require('fs');
const text = fs.readFileSync('react_docx_text.txt', 'utf8');

const sectionMatches = text.split(/SECTION \d+/g);
sectionMatches.forEach((sec, idx) => {
  if (idx === 0) {
    console.log('=== SEO / HEADER INFO ===');
    console.log(sec.trim().slice(0, 300));
  } else {
    console.log(`\n=== SECTION ${idx} ===`);
    console.log(sec.trim().slice(0, 300));
  }
});
