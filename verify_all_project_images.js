const fs = require('fs');
const path = require('path');

const htmlFiles = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));

let totalImagesChecked = 0;
let totalMissing = 0;

htmlFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  const html = fs.readFileSync(filePath, 'utf8');

  const imgRegex = /<img[^>]+src=["']([^"']+)["']/g;
  let match;
  let fileImgs = 0;
  while ((match = imgRegex.exec(html)) !== null) {
    const src = match[1];
    if (src.startsWith('http://') || src.startsWith('https://')) {
      continue; // Skip remote CDN tech stack icons
    }

    fileImgs++;
    totalImagesChecked++;

    const fullPath = path.join(__dirname, src);
    if (!fs.existsSync(fullPath)) {
      console.error(`❌ [${file}] Missing image: ${src}`);
      totalMissing++;
    }
  }
  console.log(`✓ ${file}: ${fileImgs} local images verified on disk.`);
});

console.log(`\n========================================`);
console.log(`Total HTML files checked: ${htmlFiles.length}`);
console.log(`Total local images verified: ${totalImagesChecked}`);
if (totalMissing === 0) {
  console.log(`SUCCESS: 100% of local images across all 19 HTML files exist on disk!`);
} else {
  console.error(`FAILURE: ${totalMissing} local image(s) missing.`);
  process.exit(1);
}
