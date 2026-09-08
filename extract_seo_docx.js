const { execSync } = require('child_process');
const fs = require('fs');

if (fs.existsSync('temp_docx')) {
  fs.rmSync('temp_docx', { recursive: true, force: true });
}
if (fs.existsSync('temp.zip')) {
  fs.unlinkSync('temp.zip');
}

fs.copyFileSync('SEARCH ENGINE OPTIMIZATION SERVICES PAGE .docx', 'temp.zip');
execSync(`powershell -Command "Expand-Archive -Path 'temp.zip' -DestinationPath 'temp_docx' -Force"`);
fs.unlinkSync('temp.zip');
const xml = fs.readFileSync('temp_docx/word/document.xml', 'utf-8');

const paragraphs = xml.split(/<\/w:p>/);
const texts = [];
paragraphs.forEach(p => {
  const tMatches = p.match(/<w:t[^>]*>(.*?)<\/w:t>/g);
  if (tMatches) {
    const line = tMatches.map(t => t.replace(/<[^>]+>/g, '')).join('');
    if (line.trim()) texts.push(line.trim());
  }
});
const fullText = texts.join('\n\n');
fs.writeFileSync('seo_docx_text.txt', fullText, 'utf-8');
console.log(`Extracted ${texts.length} paragraphs to seo_docx_text.txt`);
