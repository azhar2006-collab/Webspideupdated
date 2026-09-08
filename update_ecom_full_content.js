const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'indexecom1.html');
let html = fs.readFileSync(filePath, 'utf8');

// ── 1. SEO / HEAD ──────────────────────────────────────────────────────────
html = html.replace(
  '<title>Backend Development Services | Webspide</title>',
  '<title>eCommerce Website Development Services | Webspide</title>'
);
html = html.replace(
  /content="Build secure, scalable backend systems with Webspide[^"]*"/,
  'content="Build secure, scalable online stores with Webspide\'s custom eCommerce development, platform integration, payment, marketplace, PWA, and optimization services."'
);
html = html.replace(
  /content="backend development services,[^"]*"/i,
  'content="eCommerce website development services, eCommerce web development services, eCommerce website development, eCommerce development company, custom eCommerce development, Shopify development services, WooCommerce development services, Magento development services, marketplace development services"'
);

// ── 2. HERO SECTION ────────────────────────────────────────────────────────
html = html.replace(
  '<div class="badge fade-in">Backend Development Solutions</div>',
  '<div class="badge fade-in">eCommerce Development Solutions</div>'
);
html = html.replace(
  '<span class="grad">BACKEND</span>\n      <span class="grad">DEVELOPMENT SERVICES</span>\n      <span class="outline">Scalable Applications</span>',
  '<span class="grad">eCOMMERCE</span>\n      <span class="grad">WEBSITE DEVELOPMENT</span>\n      <span class="outline">Services</span>'
);
html = html.replace(
  'Webspide delivers secure, scalable, and high-performance backend development services for startups, enterprises, and global businesses. We build reliable server-side systems, databases, APIs, cloud solutions, and integrations tailored to your operational needs. From architecture planning to deployment and support, our backend specialists create stable digital foundations that support long-term business growth.',
  'Webspide creates secure, scalable, and conversion-focused eCommerce websites for startups, retailers, wholesalers, and global brands. Our eCommerce website development services combine strategy, responsive design, platform engineering, payment integration, inventory workflows, and performance optimization. We build tailored online stores that simplify management, strengthen customer experiences, and support sustainable growth across markets.'
);

// ── 3. INTRO BANNER (B1) ───────────────────────────────────────────────────
html = html.replace(
  'Powering Seamless Digital Experiences with<span>Backend Development</span>',
  'Transform Your Online Business with<span>Professional eCommerce Development</span>'
);
html = html.replace(
  'A reliable backend is essential for every high-performing web or mobile application. Webspide provides backend development services focused on speed, security, scalability, and seamless system communication. Whether you need APIs, databases, cloud infrastructure, business logic, or real-time processing, we build tailored solutions that support efficient digital operations.',
  'A successful online store must combine intuitive shopping experiences with reliable technology and efficient operations. Webspide provides custom eCommerce development for B2B and B2C businesses worldwide. We create secure, responsive platforms that simplify product discovery, payments, order management, integrations, and future expansion while supporting stronger engagement, conversions, and customer retention.'
);

// B1 cards
html = html.replace(
  '<div class="b1-card-title">Robust Security &amp; Authentication</div></div><p class="b1-card-desc">We implement secure authentication, role-based access, encryption, validation, and responsible coding practices to protect users, transactions, and business data. Our backend development solutions reduce vulnerabilities and support dependable access across connected applications, platforms, and services.</p>',
  '<div class="b1-card-title">Custom eCommerce Solutions</div></div><p class="b1-card-desc">We build custom eCommerce solutions around your products, customers, pricing, workflows, and expansion plans. Tailored features, flexible architecture, practical administration, and reliable integrations help your online store operate efficiently while adapting to changing market and business requirements.</p>'
);
html = html.replace(
  '<div class="b1-card-title">Scalable Architecture for Growth</div></div><p class="b1-card-desc">Our backend development company designs modular, flexible architectures that support increasing traffic, users, transactions, integrations, and business functions. Scalable infrastructure helps your application expand smoothly without frequent rebuilding or unnecessary disruption to existing digital operations.</p>',
  '<div class="b1-card-title">B2B &amp; B2C eCommerce Solutions</div></div><p class="b1-card-desc">Our B2B eCommerce solutions support account pricing, bulk ordering, approvals, and complex purchasing workflows. For consumer brands, we create B2C experiences focused on product discovery, simple checkout, personalization, mobile usability, customer engagement, and repeat purchases.</p>'
);
html = html.replace(
  '<div class="b1-card-title">Seamless API Integration</div></div><p class="b1-card-desc">We develop and integrate secure APIs connecting front-end applications, payment systems, CRMs, ERPs, cloud platforms, and external services. Reliable API communication improves automation, reduces repetitive work, and creates consistent data flow across your entire digital ecosystem.</p>',
  '<div class="b1-card-title">Secure Payment Gateway Integration</div></div><p class="b1-card-desc">We integrate trusted payment gateways with encryption, transaction validation, fraud-prevention controls, and localized payment options. Customers can complete purchases confidently using suitable cards, wallets, bank methods, or regional services while your business receives accurate payment and order information.</p>'
);

// B2 cards
html = html.replace(
  '<div class="b2-card-title">Cloud-Based &amp; Serverless Solutions</div></div><p class="b1-card-desc">Our cloud and serverless backend development services improve flexibility, availability, and infrastructure efficiency. We design solutions for leading cloud platforms, enabling automatic scaling, managed services, and dependable deployment without unnecessary server-management complexity.</p>',
  '<div class="b2-card-title">Progressive Web Apps for eCommerce</div></div><p class="b1-card-desc">We develop progressive web apps that deliver fast, responsive, app-like shopping experiences through the browser. Features such as offline access, home-screen installation, push notifications, and efficient loading can improve mobile engagement without requiring separate native applications.</p>'
);
html = html.replace(
  '<div class="b2-card-title">Optimized Database Management</div></div><p class="b1-card-desc">We design structured databases, optimise queries, implement caching, and establish reliable backup strategies for consistent application performance. Effective database management supports faster responses, accurate information, secure access, and efficient processing as your data volume increases.</p>',
  '<div class="b2-card-title">SEO &amp; Performance Optimization</div></div><p class="b1-card-desc">Our eCommerce development approach includes technical SEO, structured content, responsive performance, caching, optimized media, and efficient code. Faster, search-friendly stores help customers discover products, browse smoothly, and complete purchases across devices and varying network conditions.</p>'
);
html = html.replace(
  '<div class="b2-card-title">End-to-End Support &amp; Maintenance</div></div><p class="b1-card-desc">Our backend development company provides monitoring, troubleshooting, security updates, performance optimisation, and feature improvements after launch. Ongoing support keeps your backend reliable, secure, compatible, and prepared for changing business requirements and technology environments.</p>',
  '<div class="b2-card-title">AI-Powered Product Recommendations</div></div><p class="b1-card-desc">We integrate intelligent recommendation features that use browsing, purchase, and product data to present more relevant items. Personalized suggestions, complementary products, and targeted cross-selling can improve discovery, increase average order value, and create more useful shopping journeys.</p>'
);

// ── 4. SERVICES SECTION TITLE & SUBTITLE ──────────────────────────────────
html = html.replace(
  /01\. Custom Backend Development/,
  '01. Custom eCommerce Website Development'
);
html = html.replace(
  'Enterprise-grade backend solutions engineered for security, scalability, and performance.',
  'Secure, scalable, and conversion-focused eCommerce solutions for growing businesses worldwide.'
);

// ── 5. WHY CHOOSE SECTION ─────────────────────────────────────────────────
html = html.replace(
  '<div class="left-title gradient-heading">Why Choose<br>Webspide For<br><span class="purple">Backend<br>Development<br>Se',
  '<div class="left-title gradient-heading">Why Choose<br>Webspide For<br><span class="purple">eCommerce<br>Development<br>Se'
);
html = html.replace(
  /Why Choose<br>Webspide For<br><span class="purple">Backend[\s\S]*?<\/span>/,
  'Why Choose<br>Webspide For<br><span class="purple">eCommerce<br>Development<br>Services</span>'
);
html = html.replace(
  'Webspide combines backend engineering expertise, structured project management, and dependable communication to build systems that support real business operations. Our backend development services are designed for security, scalability, performance, maintainability, and smooth integration. From architecture planning through deployment and long-term support, we provide international clients with reliable technical delivery and practical solutions prepared for continued growth.',
  'Webspide combines commerce strategy, user-focused design, dependable development, and transparent project management to build online stores around real business needs. Our eCommerce website development services support B2B and B2C companies worldwide. From planning through launch and maintenance, we prioritize quality, security, scalability, communication, conversion performance, and practical long-term value for every client engagement across diverse industries.'
);

// Why Choose features
html = html.replace(
  '<div class="feature-title">Experienced Backend <span class="accent">Development Team</span></div>\n          <p class="feature-desc">Our backend developers work across server-side architecture, databases, APIs, cloud platforms, security, and application integrations. This broad expertise helps us select suitable technologies and solve complex technical requirements without losing sight of business goals. Every solution is planned for dependable operation, clean maintainability, and efficient collaboration with front-end, mobile, product, and internal technology teams worldwide.</p>',
  '<div class="feature-title">Experienced eCommerce <span class="accent">Development Team</span></div>\n          <p class="feature-desc">Our developers understand storefront design, commerce platforms, payment systems, product data, orders, integrations, and performance requirements. This combined expertise helps us build practical solutions instead of disconnected features. Every store is developed around your business model, customer journey, administrative needs, and growth plans, creating a stronger foundation for reliable operations and future improvements.</p>'
);
html = html.replace(
  '<div class="feature-title">Quality-Focused <span class="accent">Engineering Standards</span></div>\n          <p class="feature-desc">We follow structured coding standards, peer reviews, version control, testing, and documentation throughout development. Functional behaviour, error handling, database operations, APIs, and security controls are carefully verified before deployment. This quality-focused process reduces avoidable defects, improves maintainability, and gives clients a backend system that performs reliably under realistic operating conditions and future development changes consistently.</p>',
  '<div class="feature-title">Quality-Focused <span class="accent">Delivery</span></div>\n          <p class="feature-desc">We follow structured development standards, code reviews, testing procedures, and documentation practices throughout each project. Storefronts, payments, customer accounts, product functions, integrations, and administrative workflows are verified carefully before launch. This quality-focused approach reduces avoidable errors, improves maintainability, and helps your eCommerce platform perform consistently across supported devices, browsers, markets, and realistic purchasing scenarios.</p>'
);
html = html.replace(
  '<div class="feature-title">Clear Communication <span class="accent">and Delivery</span></div>\n          <p class="feature-desc">International projects require organised communication, visible milestones, and timely feedback. We establish practical reporting channels, responsibilities, review stages, and approval processes from the beginning. Our team explains technical decisions clearly, shares meaningful progress, and raises risks early, helping stakeholders make informed decisions while keeping backend development aligned with agreed requirements, priorities, and delivery expectations throughout.</p>',
  '<div class="feature-title">Clear International <span class="accent">Communication</span></div>\n          <p class="feature-desc">Successful international projects depend on clear communication, organized feedback, and dependable progress updates. We establish agreed channels, milestones, responsibilities, and review stages from the beginning. Our team explains technical decisions in practical terms, raises risks early, and keeps stakeholders informed so approvals, development, and launch activities can move forward with fewer misunderstandings or unnecessary delays.</p>'
);
html = html.replace(
  '<div class="feature-title">Security and Performance <span class="accent">by Design</span></div>\n          <p class="feature-desc">Security and performance are addressed during architecture, development, integration, testing, and deployment. We use validation, access controls, secure authentication, encryption, caching, database optimization, and monitoring according to project needs. Building these considerations into the system from the start helps protect information, improve response times, and support stable application performance as usage and data volumes grow.</p>',
  '<div class="feature-title">Secure and Reliable <span class="accent">Commerce Solutions</span></div>\n          <p class="feature-desc">Security and reliability are considered during architecture, development, integration, testing, and deployment. We apply secure authentication, validation, access controls, payment-provider practices, backups, and monitoring according to project requirements. This approach helps protect customer information, transactions, and business data while supporting stable store operation and trustworthy shopping experiences across devices and markets.</p>'
);
html = html.replace(
  '<div class="feature-title">Scalable and Flexible <span class="accent">Architecture</span></div>\n          <p class="feature-desc">We design backend systems that can support additional users, transactions, services, integrations, and markets as your business expands. Modular architecture, structured databases, reusable components, and appropriate cloud services make controlled growth easier to manage. This approach helps reduce unnecessary rebuilding and provides a dependable technical foundation for future features, products, operational changes, and digital transformation initiatives.</p>',
  '<div class="feature-title">Scalable Platforms <span class="accent">for Growth</span></div>\n          <p class="feature-desc">We build modular eCommerce platforms that can accommodate new products, users, warehouses, markets, currencies, payment methods, and integrations as your business develops. Suitable architecture, reusable components, structured databases, and maintainable code reduce unnecessary limitations. Your store is planned not only for its initial launch, but also for practical expansion and continuous improvement over time.</p>'
);
html = html.replace(
  '<div class="feature-title">Ongoing Support and <span class="accent">Maintenance</span></div>\n          <p class="feature-desc">Our work can continue after deployment through monitoring, troubleshooting, security updates, database maintenance, performance tuning, backups, and feature enhancements. We help clients keep backend systems current and reliable as technologies and business priorities evolve. Long-term support provides continuity, faster issue resolution, and a knowledgeable technical partner for future releases, integrations, scaling requirements, and operational improvements.</p>',
  '<div class="feature-title">Long-Term Support <span class="accent">and Optimization</span></div>\n          <p class="feature-desc">Our involvement can continue after launch through maintenance, security updates, performance monitoring, bug resolution, backups, and feature enhancements. We help clients keep their stores reliable as technologies, customer expectations, and business priorities change. This long-term support provides continuity, faster issue resolution, and a dependable technical partner for future releases, integrations, optimization, and international expansion initiatives.</p>'
);

// ── 6. TECH STACK SECTION TITLE ───────────────────────────────────────────
html = html.replace(
  /<h2 class="gradient-heading">Technologies We Use for <span>Backend Development<\/span><\/h2>/,
  '<h2 class="gradient-heading">Technologies We Use for <span>eCommerce Development</span></h2>'
);
html = html.replace(
  /We select dependable backend technologies based on each application's functionality, scalability, security, performance, integration, and maintenance requirements\./,
  "We select proven technologies according to each store's functionality, scalability, security, integrations, performance, and long-term maintenance requirements."
);

// ── 7. ORBITAL SERVICES SERVICES ──────────────────────────────────────────
const oldServices = `{num:'01',name:'Custom Backend Dev',tag:'Reliable server-side systems, databases, APIs, and business logic engineered for performance',`;
if (html.includes(oldServices)) {
  // Replace entire SERVICES array
  const servicesStart = html.indexOf('const SERVICES=[');
  const servicesEnd = html.indexOf('];', servicesStart) + 2;
  if (servicesStart !== -1 && servicesEnd > servicesStart) {
    const newServices = `const SERVICES=[
    {num:'01',name:'Custom eCommerce Dev',tag:'Tailored online stores with product catalogue, checkout, accounts, and commerce logic',svg:'<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>',target:'svc-card-1'},
    {num:'02',name:'Shopify & WooCommerce',tag:'Platform setup, theme development, plugin integration, and store customisation',svg:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',target:'svc-card-2'},
    {num:'03',name:'Headless eCommerce',tag:'Decoupled storefronts with modern frameworks and commerce APIs for flexible delivery',svg:'<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>',target:'svc-card-3'},
    {num:'04',name:'Marketplace Dev',tag:'Multi-vendor platforms with vendor dashboards, commissions, and order management',svg:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',target:'svc-card-4'},
    {num:'05',name:'Payment Gateway',tag:'Secure card, wallet, and regional payment integration with fraud prevention controls',svg:'<rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>',target:'svc-card-5'},
    {num:'06',name:'Cart & Checkout',tag:'Optimized checkout flows, guest checkout, shipping estimates, and conversion improvements',svg:'<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>',target:'svc-card-6'},
    {num:'07',name:'Inventory & Orders',tag:'Real-time stock tracking, order routing, fulfillment, and ERP integrations',svg:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>',target:'svc-card-7'},
    {num:'08',name:'Third-Party & APIs',tag:'CRM, ERP, shipping, analytics, and marketplace integrations for connected commerce',svg:'<circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="9"/>',target:'svc-card-8'},
    {num:'09',name:'Progressive Web Apps',tag:'Fast, app-like eCommerce experiences with offline support and push notifications',svg:'<path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>',target:'svc-card-9'},
    {num:'10',name:'SEO & Performance',tag:'Technical SEO, Core Web Vitals, caching, image optimization, and structured data',svg:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',target:'svc-card-10'},
    {num:'11',name:'AI Recommendations',tag:'Intelligent product suggestions using browsing, purchase, and catalogue data',svg:'<path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 17.93V18a1 1 0 0 0-2 0v1.93A8 8 0 0 1 4.07 12H6a1 1 0 0 0 0-2H4.07A8 8 0 0 1 11 4.07V6a1 1 0 0 0 2 0V4.07A8 8 0 0 1 19.93 10H18a1 1 0 0 0 0 2h1.93A8 8 0 0 1 13 19.93z"/>',target:'svc-card-11'}
  ];`;
    html = html.substring(0, servicesStart) + newServices + html.substring(servicesEnd);
    console.log('Replaced SERVICES array');
  }
}

// ── 8. HWW card-left-desc ─────────────────────────────────────────────────
html = html.replace(
  'Step by step, we build secure and scalable backend systems.',
  'Step by step, we build dependable online stores that grow with your business.'
);

// ── 9. HWW h3 in Why Choose ──────────────────────────────────────────────
html = html.replace(
  '<h3>for Backend Development Services</h3>',
  '<h3>for eCommerce Website Development Services</h3>'
);

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully completed full eCommerce content update in indexecom1.html');
