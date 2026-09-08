const fs = require('fs');
const html = fs.readFileSync('indexseocontent1.html', 'utf8');

console.log('HTML Length:', html.length);
console.log('Title:', html.match(/<title>.*?<\/title>/)[0]);
console.log('Badge:', html.match(/<div class="badge fade-in">.*?<\/div>/)[0]);
console.log('Services H2:', html.match(/Our SEO Content Writing Services/) ? 'FOUND' : 'NOT FOUND');
console.log('Service cards count:', (html.match(/id="svc-card-\d+"/g) || []).length);
console.log('Why Choose Us title:', html.match(/SEO Content Writing<br>Services\?/i) ? 'FOUND' : 'NOT FOUND');
console.log('Workflow H2:', html.match(/Our SEO Content Writing Workflow Process/) ? 'FOUND' : 'NOT FOUND');
console.log('Contact H2:', html.match(/Ready to Strengthen Your Content and Organic Visibility\?/) ? 'FOUND' : 'NOT FOUND');
console.log('SERVICES JS count:', (html.match(/name:'/g) || []).length);
console.log('Steps JS count:', (html.match(/label:'/g) || []).length);
