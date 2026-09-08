const fs = require('fs');
const docx = fs.readFileSync('react_docx_text.txt', 'utf8');

const sec4 = docx.split('SECTION 4')[1].split('SECTION 5')[0];
console.log('=== SECTION 4 CONTENT ===');
console.log(sec4);
