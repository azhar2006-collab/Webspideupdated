const fs = require('fs');
const path = require('path');

// 1. Write CSS rules to font-override.css
const cssContent = `/* Global Image Merging & Border Removal Styles */
.card-visual img,
.illus-wrap img,
.hww-illus img,
.hww-illus-row img,
.service-card img,
.service-card .card-visual img,
.service-card .illus-wrap img,
.hww-card img {
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  border-radius: 0 !important;
  mix-blend-mode: multiply !important;
  filter: contrast(1.05) saturate(1.1) !important;
  background: transparent !important;
}

/* Ensure wrapper containers have no border, shadow, or background box */
.card-visual,
.illus-wrap,
.hww-illus-row,
.hww-illus {
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  background: transparent !important;
}
`;

fs.writeFileSync(path.join(__dirname, 'font-override.css'), cssContent, 'utf8');
console.log('✅ Updated font-override.css with global image merging styles.');

// 2. Process all HTML files
const htmlFiles = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  let html = fs.readFileSync(filePath, 'utf8');
  let count = 0;

  // Replace inline styles on service images and workflow images in HTML
  // Match any <img ...> that is NOT logo
  html = html.replace(/<img\s+([^>]*?)>/gi, (fullMatch, attrs) => {
    // Skip logo images
    if (/logo/i.test(attrs) || /w-logo/i.test(attrs)) {
      return fullMatch;
    }

    // Check if it's a workflow image (max-width:320px or inside workflow)
    const isWorkflow = /Workflow/i.test(attrs) || /max-width:\s*320px/i.test(attrs);

    let newStyle = '';
    if (isWorkflow) {
      newStyle = 'style="max-width:320px;width:100%;height:auto;display:block;border:none;outline:none;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);background:transparent;"';
    } else {
      newStyle = 'style="width:100%;height:auto;display:block;border:none;outline:none;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);background:transparent;"';
    }

    // Remove existing style attribute if present, then attach newStyle
    let cleanAttrs = attrs.replace(/\s*style=["'][^"']*["']/gi, '');
    count++;
    return `<img ${cleanAttrs.trim()} ${newStyle}>`;
  });

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`✓ Updated ${file} (${count} images styled to merge with page, no border).`);
});

console.log('\n✅ All HTML files updated successfully!');
