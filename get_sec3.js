const fs = require('fs');
const docx = fs.readFileSync('react_docx_text.txt', 'utf8');

const sec3 = docx.split('SECTION 3')[1].split('SECTION 4')[0];
console.log('=== SECTION 3 CONTENT ===');
console.log(sec3);
