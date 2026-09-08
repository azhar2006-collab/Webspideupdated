const fs = require('fs');
const path = require('path');

const xmlPath = path.join(__dirname, 'temp_ecom', 'word', 'document.xml');
const xml = fs.readFileSync(xmlPath, 'utf8');

// Parse paragraphs <w:p>...</w:p>
const pRegex = /<w:p[^>]*>([\s\S]*?)<\/w:p>/g;
let pMatch;
let paragraphs = [];

while ((pMatch = pRegex.exec(xml)) !== null) {
  const pContent = pMatch[1];
  // Extract all text inside <w:t>...</w:t>
  const tRegex = /<w:t[^>]*>(.*?)<\/w:t>/g;
  let tMatch;
  let line = '';
  while ((tMatch = tRegex.exec(pContent)) !== null) {
    line += tMatch[1];
  }
  if (line.trim()) {
    paragraphs.push(line.trim());
  }
}

const fullText = paragraphs.join('\n');
fs.writeFileSync('ecom_docx_text.txt', fullText, 'utf8');
console.log('Successfully saved ecom_docx_text.txt. Total lines:', paragraphs.length);
