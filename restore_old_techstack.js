const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index1.html');
let html = fs.readFileSync(filePath, 'utf8');

// Current rules to replace
const currentGridCSS = '.ts-tech-grid{display:flex;align-items:flex-start;gap:16px 20px;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none;flex-wrap:wrap;padding:4px 0}';
const currentItemCSS = '.ts-tech-item{display:flex;flex-direction:column;align-items:center;gap:6px;text-align:center;cursor:default;flex-shrink:0;min-width:88px;max-width:105px;width:auto;padding:10px 8px;border-radius:12px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);transition:all .25s ease}';
const currentItemImgCSS = '.ts-tech-item img{width:42px;height:42px;object-fit:contain;flex-shrink:0;margin-bottom:4px;animation:tsTechFloat 3s ease-in-out infinite}.ts-tech-item svg{width:38px;height:38px;flex-shrink:0;margin-bottom:4px}';
const currentSpanCSS = '.ts-tech-item span{font-size:11.5px;color:#101828;font-weight:600;white-space:normal;word-wrap:break-word;line-height:1.35;text-align:center}';
const currentCardCSS = '.ts-card{flex:1;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.09);border-radius:16px;padding:20px 24px;backdrop-filter:blur(8px);min-width:0;overflow:visible}';

// Original rules to restore
const origGridCSS = '.ts-tech-grid{display:flex;align-items:center;gap:8px;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none;flex-wrap:nowrap}';
const origItemCSS = '.ts-tech-item{display:flex;flex-direction:column;align-items:center;gap:5px;text-align:center;cursor:default;flex-shrink:0;width:72px}';
const origItemImgCSS = '.ts-tech-item img{width:36px;height:36px;object-fit:contain;flex-shrink:0;animation:tsTechFloat 3s ease-in-out infinite}';
const origSpanCSS = '.ts-tech-item span{font-size:12px;color:#101828;font-weight:600;white-space:nowrap}';
const origCardCSS = '.ts-card{flex:1;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.09);border-radius:14px;padding:16px 22px;backdrop-filter:blur(8px);min-width:0;overflow:hidden}';

if (html.includes(currentGridCSS)) html = html.replace(currentGridCSS, origGridCSS);
if (html.includes(currentItemCSS)) html = html.replace(currentItemCSS, origItemCSS);
if (html.includes(currentItemImgCSS)) html = html.replace(currentItemImgCSS, origItemImgCSS);
if (html.includes(currentSpanCSS)) html = html.replace(currentSpanCSS, origSpanCSS);
if (html.includes(currentCardCSS)) html = html.replace(currentCardCSS, origCardCSS);

// Light mode overrides restoration
const currentLightItemOverride = '.ts-header p,.ts-tech-item span{color:#101828!important}.ts-tech-item{background:#f8fafc!important;border:1px solid rgba(139,92,246,.12)!important;box-shadow:0 2px 8px rgba(7,22,79,.03)!important}.ts-tech-item:hover{background:#ffffff!important;border-color:rgba(139,92,246,.35)!important;box-shadow:0 8px 20px rgba(139,92,246,.15)!important;transform:translateY(-4px)!important}';
const origLightItemOverride = '.ts-header p,.ts-tech-item span{color:#101828!important}';

if (html.includes(currentLightItemOverride)) html = html.replace(currentLightItemOverride, origLightItemOverride);

fs.writeFileSync(filePath, html, 'utf8');
console.log('Restored old tech stack design in index1.html');
