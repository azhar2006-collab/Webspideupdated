const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'indexecom1.html');
let html = fs.readFileSync(filePath, 'utf8');

// Replace Tech Stack title and intro text if needed
const oldTsTitle = /<h2 class="gradient-heading">Technologies We Use for <span>Backend Development<\/span><\/h2>/;
const newTsTitle = '<h2 class="gradient-heading">Technologies We Use for <span>eCommerce Web Development</span></h2>';

const oldTsDesc = /<p>We select dependable backend technologies based on each application's functionality, scalability, security, performance, integration, and maintenance requirements.<\/p>/;
const newTsDesc = '<p>We select proven technologies according to each store’s functionality, scalability, security, integrations, performance, and long-term maintenance requirements.</p>';

if (oldTsTitle.test(html)) html = html.replace(oldTsTitle, newTsTitle);
if (oldTsDesc.test(html)) html = html.replace(oldTsDesc, newTsDesc);

// Replace the entire <div class="ts-timeline">...</div> block
const newTechStackHTML = `<div class="ts-timeline">
      <div class="ts-row">
        <div class="ts-hex-wrap"><svg viewBox="0 0 62 62" fill="none"><path d="M31 3L56.5 17.5V46.5L31 61L5.5 46.5V17.5L31 3Z" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.7)" stroke-width="1.4"/></svg><div class="ts-hex-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div></div>
        <div class="ts-row-label"><span>1. Front-End Technologies</span></div>
        <div class="ts-card"><div class="ts-tech-grid">
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js"/><span>React.js</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" style="filter:invert(1)"/><span>Next.js</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js"/><span>Vue.js</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular"/><span>Angular</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5"/><span>HTML5</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3"/><span>CSS3</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS"/><span>Tailwind CSS</span></div>
        </div></div>
      </div>
      <div class="ts-row">
        <div class="ts-hex-wrap"><svg viewBox="0 0 62 62" fill="none"><path d="M31 3L56.5 17.5V46.5L31 61L5.5 46.5V17.5L31 3Z" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.7)" stroke-width="1.4"/></svg><div class="ts-hex-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg></div></div>
        <div class="ts-row-label"><span>2. Back-End Technologies</span></div>
        <div class="ts-card"><div class="ts-tech-grid">
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js"/><span>Node.js</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" style="filter:invert(1)"/><span>Express.js</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" alt="Laravel"/><span>Laravel</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" style="filter:invert(1) brightness(0.7) sepia(1) hue-rotate(90deg)"/><span>Django</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot"/><span>Spring Boot</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" alt=".NET Core"/><span>.NET Core</span></div>
        </div></div>
      </div>
      <div class="ts-row">
        <div class="ts-hex-wrap"><svg viewBox="0 0 62 62" fill="none"><path d="M31 3L56.5 17.5V46.5L31 61L5.5 46.5V17.5L31 3Z" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.7)" stroke-width="1.4"/></svg><div class="ts-hex-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg></div></div>
        <div class="ts-row-label"><span>3. Databases & Search Technologies</span></div>
        <div class="ts-card"><div class="ts-tech-grid">
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL"/><span>MySQL</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL"/><span>PostgreSQL</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB"/><span>MongoDB</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase"/><span>Firebase</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis"/><span>Redis</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg" alt="Elasticsearch"/><span>Elasticsearch</span></div>
        </div></div>
      </div>
      <div class="ts-row">
        <div class="ts-hex-wrap"><svg viewBox="0 0 62 62" fill="none"><path d="M31 3L56.5 17.5V46.5L31 61L5.5 46.5V17.5L31 3Z" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.7)" stroke-width="1.4"/></svg><div class="ts-hex-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg></div></div>
        <div class="ts-row-label"><span>4. Hosting & Deployment</span></div>
        <div class="ts-card"><div class="ts-tech-grid">
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt="AWS" style="filter:invert(0.85) sepia(0.4) saturate(3) hue-rotate(160deg)"/><span>Amazon Web Services</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="GCP"/><span>Google Cloud Platform</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure"/><span>Microsoft Azure</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" alt="Vercel" style="filter:invert(1)"/><span>Vercel</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" alt="Netlify"/><span>Netlify</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg" alt="Cloudflare"/><span>Cloudflare CDN</span></div>
        </div></div>
      </div>
      <div class="ts-row">
        <div class="ts-hex-wrap"><svg viewBox="0 0 62 62" fill="none"><path d="M31 3L56.5 17.5V46.5L31 61L5.5 46.5V17.5L31 3Z" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.7)" stroke-width="1.4"/></svg><div class="ts-hex-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg></div></div>
        <div class="ts-row-label"><span>5. eCommerce Platforms</span></div>
        <div class="ts-card"><div class="ts-tech-grid">
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg" alt="Shopify"/><span>Shopify</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg" alt="WooCommerce"/><span>WooCommerce</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg" alt="Magento"/><span>Magento</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg" alt="Adobe Commerce"/><span>Adobe Commerce</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:36px;height:36px;"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg><span>Headless Commerce Platforms</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#C026B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:36px;height:36px;"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg><span>Custom eCommerce Platforms</span></div>
        </div></div>
      </div>
    </div>`;

const timelineRegex = /<div class="ts-timeline">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;
if (timelineRegex.test(html)) {
  html = html.replace(/<div class="ts-timeline">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/, newTechStackHTML + '\n  </div>\n</section>');
  console.log('Successfully updated Tech Stack HTML for eCommerce in indexecom1.html');
} else {
  console.error('Could not match ts-timeline regex in indexecom1.html');
}

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully updated indexecom1.html Tech Stack section');
