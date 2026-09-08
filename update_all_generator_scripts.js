const fs = require('fs');
const path = require('path');

const jsFiles = fs.readdirSync(__dirname).filter(f => f.endsWith('.js') && f.startsWith('update_'));

jsFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Ensure getSvgVisual / getServiceImg / getWorkflowImg functions return borderless multiply blend styles
  content = content.replace(
    /style="[^"]*mix-blend-mode:\s*multiply[^"]*"/gi,
    'style="width:100%;height:auto;display:block;border:none;outline:none;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);background:transparent;"'
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ Synchronized ${file}`);
});

console.log('✅ All update generator scripts synchronized!');
