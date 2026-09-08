const fs = require('fs');
const html = fs.readFileSync('indexemail1.html', 'utf8');

console.log('--- TITLE & METAS ---');
const title = html.match(/<title>(.*?)<\/title>/);
console.log('Title:', title ? title[1] : 'NOT FOUND');

const metaDesc = html.match(/<meta name="description"\s+content="(.*?)"/s);
console.log('Meta Description:', metaDesc ? metaDesc[1].trim() : 'NOT FOUND');

console.log('\n--- HERO SECTION ---');
const heroP = html.match(/<p class="hero-desc fade-in delay-2">(.*?)<\/p>/s);
console.log('Hero Paragraph:', heroP ? heroP[1].slice(0, 100) + '...' : 'NOT FOUND');

console.log('\n--- SECTION 2 INTRO (BANNERS) ---');
const b1Title = html.match(/<div class="b1-title gradient-heading">(.*?)<\/div>/s);
console.log('Banner 1 Title:', b1Title ? b1Title[1].replace(/\s+/g, ' ') : 'NOT FOUND');

console.log('\n--- SECTION 3 SERVICES CARDS ---');
const serviceCards = html.match(/<div class="service-card.*?<\/div>\s*<\/div>/gs);
console.log('Service cards count:', serviceCards ? serviceCards.length : 0);

console.log('\n--- SECTION 4 WHY CHOOSE WEBSPIDE ---');
const whyTitle = html.match(/<div class="left-title gradient-heading">(.*?)<\/div>/s);
console.log('Why Choose Us Title:', whyTitle ? whyTitle[1].replace(/\s+/g, ' ') : 'NOT FOUND');
const whyDesc = html.match(/<p class="left-desc">(.*?)<\/p>/s);
console.log('Why Choose Us Desc:', whyDesc ? whyDesc[1].slice(0, 100) + '...' : 'NOT FOUND');
const featureRows = html.match(/<div class="feature-row">/g);
console.log('Why Choose Us feature rows count:', featureRows ? featureRows.length : 0);

console.log('\n--- SECTION 5 WORKFLOW PROCESS ---');
const workflowTitle = html.match(/<div class="hww-header">.*?<h2 class="section-title gradient-heading">(.*?)<\/h2>/s);
console.log('Workflow Title:', workflowTitle ? workflowTitle[1] : 'NOT FOUND');

console.log('\n--- SECTION 6 CONTACT ---');
const contactTitle = html.match(/<section class="contact-section.*?<h2 class="section-title gradient-heading">(.*?)<\/h2>/s);
console.log('Contact Title:', contactTitle ? contactTitle[1] : 'NOT FOUND');

console.log('\n--- JAVASCRIPT SERVICES & STEPS ---');
const hasServicesJS = html.includes('const SERVICES=');
const hasStepsJS = html.includes('const steps=');
console.log('SERVICES JS array present:', hasServicesJS);
console.log('steps JS array present:', hasStepsJS);
