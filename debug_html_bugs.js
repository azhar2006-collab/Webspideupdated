const fs = require('fs');

const html = fs.readFileSync('indexseomarket1.html', 'utf8');

console.log('--- CHECKING FOR UNCLOSED TAGS OR BROKEN REFS ---');

// 1. Check for leftover 'custom web' or 'full-stack' text
const webDevMatches = html.match(/custom web development|full-stack/gi) || [];
console.log('Leftover "custom web development" or "full-stack" occurrences:', webDevMatches.length);

// 2. Check for missing svc-card IDs
const cardIdsInHtml = (html.match(/id="svc-card-\d+"/g) || []).map(s => s.replace('id="', '').replace('"', ''));
console.log('Service Card IDs in HTML:', cardIdsInHtml);

// 3. Check for references to svc-card-4..10
const svcRefMatches = (html.match(/svc-card-\d+/g) || []);
const uniqueRefs = [...new Set(svcRefMatches)];
console.log('All svc-card references in document:', uniqueRefs);

// 4. Check for orbital JS SERVICES array
const servicesArrayMatch = html.match(/const SERVICES=\[[\s\S]*?\];/);
console.log('Orbital SERVICES array found:', !!servicesArrayMatch);
if (servicesArrayMatch) {
  console.log('Orbital SERVICES code:\n', servicesArrayMatch[0]);
}

// 5. Check if there are any syntax issues in script blocks
const scriptBlocks = html.match(/<script[\s\S]*?<\/script>/gi) || [];
console.log('Total script blocks:', scriptBlocks.length);
