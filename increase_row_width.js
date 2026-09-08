const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index1.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Increase max-width of .ts-section-wrapper from 1100px to 1380px
const oldWrapper = '.ts-section-wrapper{width:100%;max-width:1100px;margin:0 auto;padding:60px 20px 80px;font-family:\'Exo 2\',sans-serif}';
const newWrapper = '.ts-section-wrapper{width:100%;max-width:1380px;margin:0 auto;padding:60px 20px 80px;font-family:\'Exo 2\',sans-serif}';

// 2. Increase gap in .ts-row from 8px to 16px
const oldRow = '.ts-row{display:flex;align-items:flex-start;gap:8px;position:relative;margin-bottom:40px}';
const newRow = '.ts-row{display:flex;align-items:flex-start;gap:16px;position:relative;margin-bottom:40px}';

// 3. Increase width of .ts-row-label from 100px to 160px
const oldRowLabel = '.ts-row-label{flex-shrink:0;width:100px;padding-top:0px}';
const newRowLabel = '.ts-row-label{flex-shrink:0;width:160px;padding-top:0px}';

if (html.includes(oldWrapper)) html = html.replace(oldWrapper, newWrapper);
if (html.includes(oldRow)) html = html.replace(oldRow, newRow);
if (html.includes(oldRowLabel)) html = html.replace(oldRowLabel, newRowLabel);

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully increased the width of Tech Stack rows in index1.html');
