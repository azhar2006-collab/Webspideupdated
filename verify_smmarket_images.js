const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('indexsmmarket1.html', 'utf8');

const imgRegex = /<img[^>]+src=["']([^"']+)["']/g;
const imgs = [];
let match;
while ((match = imgRegex.exec(html)) !== null) {
  imgs.push(match[1]);
}

console.log('Total img tags found in indexsmmarket1.html:', imgs.length);

let missing = 0;
imgs.forEach((src, idx) => {
  const fullPath = path.join(__dirname, src);
  const exists = fs.existsSync(fullPath);
  console.log(`${idx + 1}. ${src} => ${exists ? 'OK' : 'MISSING!'}`);
  if (!exists) missing++;
});

if (missing === 0) {
  console.log('\nSUCCESS: ALL IMAGES IN indexsmmarket1.html EXIST ON DISK!');
} else {
  console.error(`\nFAILURE: ${missing} image(s) could not be found on disk.`);
  process.exit(1);
}
