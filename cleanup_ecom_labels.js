const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'indexecom1.html');
let html = fs.readFileSync(filePath, 'utf8');

// Fix services nav label "03. Back-End Development" 
html = html.replace('03. Back-End Development', '03. Headless eCommerce Development');

// Fix HTML comment labels for cards
html = html.replace('<!-- CARD 01 — Custom Backend Development -->', '<!-- CARD 01 — Custom eCommerce Website Development -->');
html = html.replace('<!-- CARD 06 — Real-Time Data Processing & WebSockets -->', '<!-- CARD 06 — Shopping Cart & Checkout Optimization -->');
html = html.replace('<!-- CARD 07 — Microservices Architecture Development -->', '<!-- CARD 07 — Inventory & Order Management Systems -->');
html = html.replace('<!-- CARD 08 — CMS & E-Commerce Backend Development -->', '<!-- CARD 08 — Third-Party Tools & API Integration -->');
html = html.replace('<!-- CARD 09 — AI & Machine Learning Backend Solutions -->', '<!-- CARD 09 — Progressive Web Apps for eCommerce -->');
html = html.replace('<!-- CARD 10 — DevOps & Continuous Integration -->', '<!-- CARD 10 — eCommerce SEO & Performance Optimization -->');

// Fix remaining SERVICES array - it didn't get replaced because there was already an updated one in earlier pass
// Let's check and replace the old SERVICES array if still present
const oldServicesPattern = "{num:'01',name:'Custom Backend Dev'";
const newServicesPattern = "{num:'01',name:'Custom eCommerce Dev'";

if (html.includes(oldServicesPattern) && !html.includes(newServicesPattern)) {
  const start = html.indexOf('const SERVICES=[');
  const end = html.indexOf('];', start) + 2;
  if (start !== -1 && end > start) {
    const newServices = `const SERVICES=[
    {num:'01',name:'Custom eCommerce Dev',tag:'Tailored online stores with product catalogue, checkout, accounts, and commerce logic',svg:'<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>',target:'svc-card-1'},
    {num:'02',name:'Shopify & WooCommerce',tag:'Platform setup, theme development, plugin integration, and store customisation',svg:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',target:'svc-card-2'},
    {num:'03',name:'Headless eCommerce',tag:'Decoupled storefronts with modern frameworks and commerce APIs for flexible delivery',svg:'<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>',target:'svc-card-3'},
    {num:'04',name:'Marketplace Dev',tag:'Multi-vendor platforms with vendor dashboards, commissions, and order management',svg:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',target:'svc-card-4'},
    {num:'05',name:'Payment Gateway',tag:'Secure card, wallet, and regional payment integration with fraud prevention controls',svg:'<rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>',target:'svc-card-5'},
    {num:'06',name:'Cart & Checkout',tag:'Optimized checkout flows, guest checkout, shipping estimates, and conversion improvements',svg:'<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>',target:'svc-card-6'},
    {num:'07',name:'Inventory & Orders',tag:'Real-time stock tracking, order routing, fulfillment, and ERP integrations',svg:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>',target:'svc-card-7'},
    {num:'08',name:'Third-Party & APIs',tag:'CRM, ERP, shipping, analytics, and marketplace integrations for connected commerce',svg:'<circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="9"/>',target:'svc-card-8'},
    {num:'09',name:'Progressive Web Apps',tag:'Fast, app-like eCommerce experiences with offline support and push notifications',svg:'<path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>',target:'svc-card-9'},
    {num:'10',name:'SEO & Performance',tag:'Technical SEO, Core Web Vitals, caching, image optimization, and structured data',svg:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',target:'svc-card-10'},
  ];`;
    html = html.substring(0, start) + newServices + html.substring(end);
    console.log('Replaced old SERVICES array');
  }
} else if (html.includes(oldServicesPattern)) {
  // Both exist, remove old one
  const start = html.indexOf('const SERVICES=[');
  const end = html.indexOf('];', start) + 2;
  html = html.substring(0, start) + html.substring(end);
  console.log('Removed duplicate old SERVICES array');
} else {
  console.log('SERVICES array already updated or not found');
}

fs.writeFileSync(filePath, html, 'utf8');
console.log('Cleanup complete - all remaining backend labels fixed in indexecom1.html');
