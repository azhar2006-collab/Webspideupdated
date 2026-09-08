const fs = require('fs');

const html = fs.readFileSync('indexseomarket1.html', 'utf8');

console.log('--- COMPREHENSIVE FINAL AUDIT ---');

// Check 1: Keywords
console.log('1. Meta Keywords:', html.includes('Search engine marketing services, Search engine marketing company'));

// Check 2: Orbital JS SERVICES length
const sMatch = html.match(/const SERVICES=\[([\s\S]*?)\];/);
if (sMatch) {
  const count = (sMatch[1].match(/num:/g) || []).length;
  console.log('2. Orbital JS SERVICES item count:', count);
}

// Check 3: Mobile Orbit Cards count
const mobMatch = html.match(/<div class="orbit-cards-mobile">([\s\S]*?)<\/div>/);
if (mobMatch) {
  const count = (mobMatch[1].match(/class="orb-card"/g) || []).length;
  console.log('3. Mobile Orbit Cards item count:', count);
}

// Check 4: Service cards count & IDs
const svcCards = html.match(/<div class="service-card[^"]*" id="([^"]+)"/g) || [];
console.log('4. Service card IDs in HTML:', svcCards.map(c => c.match(/id="([^"]+)"/)[1]));

// Check 5: FAQ counts per card
const faq1 = html.match(/id="faq-item-\d+"/g) || [];
console.log('5. Total FAQ items across page:', faq1.length);

// Check 6: Check for any broken Javascript references or syntax errors
const scriptTags = html.match(/<script>([\s\S]*?)<\/script>/gi) || [];
console.log('6. Total embedded script blocks:', scriptTags.length);
scriptTags.forEach((st, i) => {
  const code = st.replace(/<\/?script>/gi, '');
  try {
    new Function(code);
    console.log(`   Script block ${i+1}: Valid Syntax ✅`);
  } catch (e) {
    console.log(`   Script block ${i+1}: Syntax Error ❌ - ${e.message}`);
  }
});
