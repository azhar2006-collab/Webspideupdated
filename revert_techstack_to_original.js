const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index1.html');
let html = fs.readFileSync(filePath, 'utf8');

// Restore wrapper max-width to 1100px
html = html.replace(/\.ts-section-wrapper\{[^}]*\}/, '.ts-section-wrapper{width:100%;max-width:1100px;margin:0 auto;padding:60px 20px 80px;font-family:\'Exo 2\',sans-serif}');

// Restore row gap to 8px
html = html.replace(/\.ts-row\{[^}]*\}/, '.ts-row{display:flex;align-items:flex-start;gap:8px;position:relative;margin-bottom:40px}');

// Restore row label width to 100px
html = html.replace(/\.ts-row-label\{flex-shrink:0;[^}]*\}/, '.ts-row-label{flex-shrink:0;width:100px;padding-top:0px}');

// Restore card
html = html.replace(/\.ts-card\{flex:1;[^}]*\}/, '.ts-card{flex:1;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.09);border-radius:14px;padding:16px 22px;backdrop-filter:blur(8px);min-width:0;overflow:hidden}');

// Restore tech grid
html = html.replace(/\.ts-tech-grid\{[^}]*\}/, '.ts-tech-grid{display:flex;align-items:center;gap:8px;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none;flex-wrap:nowrap}');

// Restore tech item
html = html.replace(/\.ts-tech-item\{display:flex;[^}]*\}/, '.ts-tech-item{display:flex;flex-direction:column;align-items:center;gap:5px;text-align:center;cursor:default;flex-shrink:0;width:72px}');

// Restore tech item img
html = html.replace(/\.ts-tech-item img\{[^}]*\}/, '.ts-tech-item img{width:36px;height:36px;object-fit:contain;flex-shrink:0;animation:tsTechFloat 3s ease-in-out infinite}');

// Remove any inline svg styles added to ts-tech-item svg if present
html = html.replace(/\.ts-tech-item svg\{[^}]*\}/g, '');

// Restore tech item span
html = html.replace(/\.ts-tech-item span\{[^}]*\}/, '.ts-tech-item span{font-size:12px;color:#101828;font-weight:600;white-space:nowrap}');

fs.writeFileSync(filePath, html, 'utf8');
console.log('Fully restored original Tech Stack styling in index1.html');
