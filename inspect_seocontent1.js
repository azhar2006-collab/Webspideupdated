const fs = require('fs');

const html = fs.readFileSync('indexseocontent1.html', 'utf8');

// Find card-visual blocks
const cardVisualRegex = /id="svc-card-(\d+)"[\s\S]*?<div class="card-visual">[\s\S]*?<\/div>\s*<\/div>/g;
let m;
while ((m = cardVisualRegex.exec(html)) !== null) {
  const snippet = m[0].substring(m[0].indexOf('<div class="card-visual">'));
  console.log(`=== Card ${m[1]} visual ===`);
  console.log(snippet.substring(0, 400));
}

// Check workflow illus
const stepsIdx = html.indexOf('const steps=[');
const stepsEnd = html.indexOf('];', stepsIdx);
if (stepsIdx !== -1) {
  const stepsStr = html.substring(stepsIdx, stepsEnd);
  const stepNums = [...stepsStr.matchAll(/num:'(\d+)'/g)].map(m => m[1]);
  console.log('\nWorkflow step nums:', stepNums);
  
  // Sample illus for step 01
  const illusMatch = stepsStr.match(/illus:'([\s\S]*?)'\s*}/);
  if (illusMatch) {
    console.log('\nStep 01 illus sample:', illusMatch[1].substring(0, 200));
  }
}
