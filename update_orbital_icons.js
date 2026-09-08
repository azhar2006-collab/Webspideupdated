const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index1.html');
let html = fs.readFileSync(filePath, 'utf-8');

// 1. Update .orbit-cards-mobile section with perfect backend icons
const newOrbitCardsMobile = `<div class="orbit-cards-mobile">
  <a href="#svc-card-1" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg></div><div><div class="orb-card-name">Custom Backend</div><div class="orb-card-tag">Tailored server-side systems</div></div></a>
  <a href="#svc-card-2" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></div><div><div class="orb-card-name">API Development</div><div class="orb-card-tag">RESTful & GraphQL APIs</div></div></a>
  <a href="#svc-card-3" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg></div><div><div class="orb-card-name">Database Mgmt</div><div class="orb-card-tag">SQL & NoSQL solutions</div></div></a>
  <a href="#svc-card-4" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></div><div><div class="orb-card-name">Auth & Security</div><div class="orb-card-tag">OAuth, JWT, MFA</div></div></a>
  <a href="#svc-card-5" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg></div><div><div class="orb-card-name">Cloud & Serverless</div><div class="orb-card-tag">AWS, Azure, GCP</div></div></a>
  <a href="#svc-card-6" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div><div><div class="orb-card-name">Real-Time Data</div><div class="orb-card-tag">WebSockets & streaming</div></div></a>
  <a href="#svc-card-7" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg></div><div><div class="orb-card-name">Microservices</div><div class="orb-card-tag">Modular architecture</div></div></a>
  <a href="#svc-card-8" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div><div><div class="orb-card-name">CMS & E-Commerce</div><div class="orb-card-tag">Backend systems</div></div></a>
  <a href="#svc-card-9" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="9"/><line x1="12" y1="3" x2="12" y2="9"/><line x1="12" y1="15" x2="12" y2="21"/></svg></div><div><div class="orb-card-name">AI & ML Backend</div><div class="orb-card-tag">Intelligent automation</div></div></a>
  <a href="#svc-card-10" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/></svg></div><div><div class="orb-card-name">DevOps & CI/CD</div><div class="orb-card-tag">Automated delivery</div></div></a>
</div>`;

const startMobileCards = '<div class="orbit-cards-mobile">';
const endMobileCards = '</div>\n\n<!-- BANNER 1 -->';
const startIdx = html.indexOf(startMobileCards);
const endIdx = html.indexOf('</div>\n\n<!-- BANNER 1 -->');

if (startIdx !== -1 && endIdx !== -1) {
  html = html.substring(0, startIdx) + newOrbitCardsMobile + '\n' + html.substring(endIdx + 7);
}

// 2. Update SERVICES array in JS
const newServicesJS = `const SERVICES=[
    {num:'01',name:'Custom Backend Dev',tag:'Reliable server-side systems, databases, APIs, and business logic engineered for performance and scale',label:'Custom',svg:'<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>',target:'svc-card-1'},
    {num:'02',name:'API Dev & Integration',tag:'RESTful & GraphQL APIs connecting applications, databases, and third-party services securely',label:'API',svg:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',target:'svc-card-2'},
    {num:'03',name:'Database Management',tag:'Schema design, query optimization, caching, and backup strategies for consistent performance',label:'Database',svg:'<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',target:'svc-card-3'},
    {num:'04',name:'Auth & Security',tag:'OAuth, JWT, MFA, role-based access, and encryption for secure backend protection',label:'Security',svg:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>',target:'svc-card-4'},
    {num:'05',name:'Cloud & Serverless',tag:'AWS, Azure, GCP — auto-scaling, managed services, and dependable cloud deployment',label:'Cloud',svg:'<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',target:'svc-card-5'},
    {num:'06',name:'Real-Time & WebSockets',tag:'Live chat, notifications, dashboards, and streaming with WebSocket-powered backends',label:'Real-Time',svg:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',target:'svc-card-6'},
    {num:'07',name:'Microservices',tag:'Modular, independently deployable services with containerization and API gateways',label:'Micro',svg:'<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>',target:'svc-card-7'},
    {num:'08',name:'CMS & E-Commerce Backend',tag:'Content management and commerce backend systems for products, orders, and publishing',label:'CMS',svg:'<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',target:'svc-card-8'},
    {num:'09',name:'AI & ML Backend',tag:'Recommendation engines, predictive analytics, chatbots, and intelligent automation',label:'AI/ML',svg:'<circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="9"/><line x1="12" y1="3" x2="12" y2="9"/><line x1="12" y1="15" x2="12" y2="21"/>',target:'svc-card-9'},
    {num:'10',name:'DevOps & CI/CD',tag:'Automated builds, testing pipelines, containerization, and deployment automation',label:'DevOps',svg:'<polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>',target:'svc-card-10'}
  ];`;

const startJSMarker = 'const SERVICES=[';
const endJSMarker = '];';
const jsStartIdx = html.indexOf(startJSMarker);
const jsEndIdx = html.indexOf(endJSMarker, jsStartIdx);

if (jsStartIdx !== -1 && jsEndIdx !== -1) {
  html = html.substring(0, jsStartIdx) + newServicesJS + html.substring(jsEndIdx + 2);
}

fs.writeFileSync(filePath, html, 'utf-8');
console.log('✅ Orbital icons and labels updated successfully in both HTML and JavaScript!');
