const fs = require('fs');

let html = fs.readFileSync('index1.html', 'utf8');

// 1. Tech Stack Section Replacement
const tsStart = html.indexOf('<section class="section-light" style="position:relative;z-index:1">');
const tsEnd = html.indexOf('<section class="how-we-work"', tsStart);

if (tsStart !== -1 && tsEnd !== -1) {
  const newTechStackSection = `<section class="section-light" style="position:relative;z-index:1">
  <div class="ts-section-wrapper" style="max-width:1200px;margin:0 auto;padding:60px 20px;">
    <div class="ts-header">
      <div class="ts-badge">Technology</div>
      <h2 class="gradient-heading">Technologies We Use for <span>Backend Development</span></h2>
      <p style="max-width:800px;margin:15px auto 0;color:var(--ws-text-muted);font-size:1.05rem;line-height:1.7;">We select dependable backend technologies based on each application’s functionality, scalability, security, performance, integration, and maintenance requirements.</p>
    </div>
    <div class="ts-timeline" style="margin-top:40px;">
      <!-- 1. Programming Languages -->
      <div class="ts-row">
        <div class="ts-hex-wrap"><svg viewBox="0 0 62 62" fill="none"><path d="M31 3L56.5 17.5V46.5L31 61L5.5 46.5V17.5L31 3Z" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.7)" stroke-width="1.4"/></svg><div class="ts-hex-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div></div>
        <br/>
        <div class="ts-row-label"><span><br>1. Programming Languages</span></div>
        <div class="ts-card"><div class="ts-tech-grid">
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js"/><span>Node.js</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript"/><span>JavaScript</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python"/><span>Python</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" alt="Ruby"/><span>Ruby</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java"/><span>Java</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#"/><span>C#</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" alt=".NET"/><span>.NET</span></div>
        </div></div>
      </div>

      <!-- 2. Frameworks & Libraries -->
      <div class="ts-row">
        <div class="ts-hex-wrap"><svg viewBox="0 0 62 62" fill="none"><path d="M31 3L56.5 17.5V46.5L31 61L5.5 46.5V17.5L31 3Z" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.7)" stroke-width="1.4"/></svg><div class="ts-hex-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg></div></div>
        <br/>
        <div class="ts-row-label"><span><br>2. Frameworks &amp; Libraries</span></div>
        <div class="ts-card"><div class="ts-tech-grid">
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js"/><span>Express.js</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" alt="NestJS"/><span>NestJS</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django"/><span>Django</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask"/><span>Flask</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" alt="FastAPI"/><span>FastAPI</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" alt="Laravel"/><span>Laravel</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot"/><span>Spring Boot</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" alt="ASP.NET Core"/><span>ASP.NET Core</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg" alt="Ruby on Rails"/><span>Ruby on Rails</span></div>
        </div></div>
      </div>

      <!-- 3. Databases & Data Storage -->
      <div class="ts-row">
        <div class="ts-hex-wrap"><svg viewBox="0 0 62 62" fill="none"><path d="M31 3L56.5 17.5V46.5L31 61L5.5 46.5V17.5L31 3Z" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.7)" stroke-width="1.4"/></svg><div class="ts-hex-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg></div></div>
        <br/>
        <div class="ts-row-label"><span><br>3. Databases &amp; Data Storage</span></div>
        <div class="ts-card"><div class="ts-tech-grid">
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL"/><span>PostgreSQL</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL"/><span>MySQL</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg" alt="MariaDB"/><span>MariaDB</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB"/><span>MongoDB</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" alt="Cassandra"/><span>Cassandra</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis"/><span>Redis</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure SQL Database"/><span>Azure SQL</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud SQL"/><span>Cloud SQL</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="Amazon Aurora"/><span>Amazon Aurora</span></div>
        </div></div>
      </div>

      <!-- 4. API Development & Integration -->
      <div class="ts-row">
        <div class="ts-hex-wrap"><svg viewBox="0 0 62 62" fill="none"><path d="M31 3L56.5 17.5V46.5L31 61L5.5 46.5V17.5L31 3Z" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.7)" stroke-width="1.4"/></svg><div class="ts-hex-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></div></div>
        <br/>
        <div class="ts-row-label"><span><br>4. API Development &amp; Integration</span></div>
        <div class="ts-card"><div class="ts-tech-grid">
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#1F4FB2" stroke-width="2" style="width:28px;height:28px;"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/></svg><span>RESTful APIs</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt="GraphQL"/><span>GraphQL</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2" style="width:28px;height:28px;"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg><span>gRPC</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#C026B8" stroke-width="2" style="width:28px;height:28px;"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg><span>WebSockets</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#102A7A" stroke-width="2" style="width:28px;height:28px;"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/></svg><span>Webhooks</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#1F4FB2" stroke-width="2" style="width:28px;height:28px;"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg><span>OAuth</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2" style="width:28px;height:28px;"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg><span>JWT</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt="AWS API Gateway"/><span>AWS API Gateway</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#07164F" stroke-width="2" style="width:28px;height:28px;"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polygon points="2 17 12 22 22 17 12 12 2 17"/></svg><span>Kong</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Apigee"/><span>Apigee</span></div>
        </div></div>
      </div>

      <!-- 5. Authentication & Security -->
      <div class="ts-row">
        <div class="ts-hex-wrap"><svg viewBox="0 0 62 62" fill="none"><path d="M31 3L56.5 17.5V46.5L31 61L5.5 46.5V17.5L31 3Z" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.7)" stroke-width="1.4"/></svg><div class="ts-hex-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div></div>
        <br/>
        <div class="ts-row-label"><span><br>5. Authentication &amp; Security</span></div>
        <div class="ts-card"><div class="ts-tech-grid">
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#1F4FB2" stroke-width="2" style="width:28px;height:28px;"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg><span>OAuth 2.0</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2" style="width:28px;height:28px;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span>OpenID Connect</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#C026B8" stroke-width="2" style="width:28px;height:28px;"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg><span>JSON Web Tokens</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#102A7A" stroke-width="2" style="width:28px;height:28px;"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg><span>LDAP / SAML</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#1F4FB2" stroke-width="2" style="width:28px;height:28px;"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg><span>Single Sign-On</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2" style="width:28px;height:28px;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg><span>MFA</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#C026B8" stroke-width="2" style="width:28px;height:28px;"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg><span>RBAC</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#07164F" stroke-width="2" style="width:28px;height:28px;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg><span>Rate Limiting</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#7A0D78" stroke-width="2" style="width:28px;height:28px;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><span>DDoS Protection</span></div>
        </div></div>
      </div>

      <!-- 6. Caching & Performance Optimization -->
      <div class="ts-row">
        <div class="ts-hex-wrap"><svg viewBox="0 0 62 62" fill="none"><path d="M31 3L56.5 17.5V46.5L31 61L5.5 46.5V17.5L31 3Z" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.7)" stroke-width="1.4"/></svg><div class="ts-hex-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div></div>
        <br/>
        <div class="ts-row-label"><span><br>6. Caching &amp; Performance</span></div>
        <div class="ts-card"><div class="ts-tech-grid">
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis"/><span>Redis</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#1F4FB2" stroke-width="2" style="width:28px;height:28px;"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/></svg><span>Memcached</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2" style="width:28px;height:28px;"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg><span>Varnish Cache</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg" alt="Cloudflare"/><span>Cloudflare</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt="CloudFront"/><span>Amazon CloudFront</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#07164F" stroke-width="2" style="width:28px;height:28px;"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg><span>Akamai</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#C026B8" stroke-width="2" style="width:28px;height:28px;"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><span>Query Opt</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#102A7A" stroke-width="2" style="width:28px;height:28px;"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg><span>Load Balancing</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2" style="width:28px;height:28px;"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><span>CDN Integration</span></div>
        </div></div>
      </div>

      <!-- 7. DevOps, Deployment & CI/CD -->
      <div class="ts-row">
        <div class="ts-hex-wrap"><svg viewBox="0 0 62 62" fill="none"><path d="M31 3L56.5 17.5V46.5L31 61L5.5 46.5V17.5L31 3Z" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.7)" stroke-width="1.4"/></svg><div class="ts-hex-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/></svg></div></div>
        <br/>
        <div class="ts-row-label"><span><br>7. DevOps, Deployment &amp; CI/CD</span></div>
        <div class="ts-card"><div class="ts-tech-grid">
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub Actions"/><span>GitHub</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" alt="GitLab CI/CD"/><span>GitLab</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" alt="Jenkins"/><span>Jenkins</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure DevOps"/><span>Azure DevOps</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker"/><span>Docker</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes"/><span>Kubernetes</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt="AWS"/><span>AWS</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud Platform"/><span>GCP</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure Functions"/><span>Azure Functions</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud Run"/><span>Cloud Run</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt="AWS Fargate"/><span>AWS Fargate</span></div>
        </div></div>
      </div>

      <!-- 8. Logging, Monitoring & Debugging -->
      <div class="ts-row">
        <div class="ts-hex-wrap"><svg viewBox="0 0 62 62" fill="none"><path d="M31 3L56.5 17.5V46.5L31 61L5.5 46.5V17.5L31 3Z" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.7)" stroke-width="1.4"/></svg><div class="ts-hex-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div></div>
        <br/>
        <div class="ts-row-label"><span><br>8. Logging &amp; Monitoring</span></div>
        <div class="ts-card"><div class="ts-tech-grid">
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg" alt="Elasticsearch"/><span>Elasticsearch</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#1F4FB2" stroke-width="2" style="width:28px;height:28px;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg><span>Logstash</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2" style="width:28px;height:28px;"><rect x="3" y="3" width="18" height="18" rx="2"/></svg><span>Kibana</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#C026B8" stroke-width="2" style="width:28px;height:28px;"><circle cx="12" cy="12" r="10"/></svg><span>Splunk</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sentry/sentry-original.svg" alt="Sentry"/><span>Sentry</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#07164F" stroke-width="2" style="width:28px;height:28px;"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg><span>Datadog</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt="AWS CloudWatch"/><span>AWS CloudWatch</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" alt="Postman"/><span>Postman</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg" alt="Swagger"/><span>Swagger</span></div>
        </div></div>
      </div>
    </div>
  </div>
</section>`;

  html = html.substring(0, tsStart) + newTechStackSection + html.substring(tsEnd);
  console.log('Replaced Tech Stack section successfully.');
} else {
  console.error('Failed to locate Tech Stack section boundaries.');
}

// 2. Workflow Section Replacement
const wfStart = html.indexOf('<section class="how-we-work"');
const wfEnd = html.indexOf('</section>', wfStart) + 10;

if (wfStart !== -1 && wfEnd !== -1) {
  const newWorkflowSection = `<section class="how-we-work" id="how-we-work">
  <div class="hww-inner">
    <div class="hww-left">
      <div class="badge fade-in">HOW WE WORK</div>
      <h2 class="gradient-heading">Our Backend Development<br><span>Workflow Process</span></h2>
      <p class="hww-desc">Our backend development workflow follows a structured approach covering requirements, architecture, development, testing, deployment, and support to deliver secure, scalable, and dependable systems.</p>
      
      <div class="hww-nav" id="hwwNav">
        <button type="button" class="hww-nav-item active" data-step="0">
          <span class="hww-nav-num">01</span>
          <span class="hww-nav-title">Requirements &amp; Architecture Analysis</span>
        </button>
        <button type="button" class="hww-nav-item" data-step="1">
          <span class="hww-nav-num">02</span>
          <span class="hww-nav-title">Project Planning &amp; Technical Setup</span>
        </button>
        <button type="button" class="hww-nav-item" data-step="2">
          <span class="hww-nav-num">03</span>
          <span class="hww-nav-title">Backend &amp; API Development</span>
        </button>
        <button type="button" class="hww-nav-item" data-step="3">
          <span class="hww-nav-num">04</span>
          <span class="hww-nav-title">Testing, Security &amp; Optimization</span>
        </button>
        <button type="button" class="hww-nav-item" data-step="4">
          <span class="hww-nav-num">05</span>
          <span class="hww-nav-title">Deployment &amp; CI/CD Launch</span>
        </button>
        <button type="button" class="hww-nav-item" data-step="5">
          <span class="hww-nav-num">06</span>
          <span class="hww-nav-title">Maintenance &amp; Continuous Improvement</span>
        </button>
      </div>
    </div>
    
    <div class="hww-right">
      <div class="hww-card" id="hwwCard">
        <!-- Step 0 -->
        <div class="hww-step-content active" data-step-content="0">
          <div class="hww-card-num">01</div>
          <h3 class="hww-card-title">Requirements &amp; Architecture Analysis</h3>
          <p class="hww-card-desc">We begin by understanding your business processes, users, application functions, data requirements, integrations, security expectations, and projected growth. This information helps us define an appropriate backend structure and technology direction.</p>
          <div class="hww-deliverables">
            <h4>What We Deliver in This Step</h4>
            <ul>
              <li>Approved backend requirements document</li>
              <li>Initial system architecture</li>
              <li>Data and integration plan</li>
              <li>Technology recommendation and project roadmap</li>
            </ul>
          </div>
        </div>
        
        <!-- Step 1 -->
        <div class="hww-step-content" data-step-content="1">
          <div class="hww-card-num">02</div>
          <h3 class="hww-card-title">Project Planning &amp; Technical Setup</h3>
          <p class="hww-card-desc">Once requirements are approved, we establish the development plan, backend architecture, database design, environments, standards, and delivery milestones. This creates an organised technical foundation for efficient development and collaboration.</p>
          <div class="hww-deliverables">
            <h4>What We Deliver in This Step</h4>
            <ul>
              <li>Detailed backend architecture</li>
              <li>Database design and data models</li>
              <li>Configured development environments</li>
              <li>Sprint schedule and coding standards</li>
            </ul>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="hww-step-content" data-step-content="2">
          <div class="hww-card-num">03</div>
          <h3 class="hww-card-title">Backend &amp; API Development</h3>
          <p class="hww-card-desc">Our developers transform the approved architecture into functional server-side systems, databases, APIs, authentication, and business logic. Every component is developed according to documented operational and technical requirements.</p>
          <div class="hww-deliverables">
            <h4>What We Deliver in This Step</h4>
            <ul>
              <li>Functional backend application</li>
              <li>Secure API endpoints</li>
              <li>Implemented database system</li>
              <li>Authentication and access-control modules</li>
            </ul>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="hww-step-content" data-step-content="3">
          <div class="hww-card-num">04</div>
          <h3 class="hww-card-title">Testing, Security &amp; Optimization</h3>
          <p class="hww-card-desc">Before deployment, we test functionality, APIs, databases, integrations, security controls, and application performance. Identified issues are documented, corrected, and retested under realistic operating conditions.</p>
          <div class="hww-deliverables">
            <h4>What We Deliver in This Step</h4>
            <ul>
              <li>Functional and API testing report</li>
              <li>Security assessment and resolved issues</li>
              <li>Performance and load-testing results</li>
              <li>Integration and data-validation approval</li>
            </ul>
          </div>
        </div>

        <!-- Step 4 -->
        <div class="hww-step-content" data-step-content="4">
          <div class="hww-card-num">05</div>
          <h3 class="hww-card-title">Deployment &amp; CI/CD Launch</h3>
          <p class="hww-card-desc">After quality approval, we deploy the backend to its production environment and configure automation, infrastructure, monitoring, security, and recovery systems for a controlled and dependable launch.</p>
          <div class="hww-deliverables">
            <h4>What We Deliver in This Step</h4>
            <ul>
              <li>Production-ready backend system</li>
              <li>Configured CI/CD pipeline</li>
              <li>Cloud and server setup</li>
              <li>Monitoring, backup, and recovery configuration</li>
            </ul>
          </div>
        </div>

        <!-- Step 5 -->
        <div class="hww-step-content" data-step-content="5">
          <div class="hww-card-num">06</div>
          <h3 class="hww-card-title">Maintenance &amp; Continuous Improvement</h3>
          <p class="hww-card-desc">Our support continues after deployment through monitoring, security updates, database maintenance, troubleshooting, optimization, and feature enhancements. This keeps the backend reliable and prepared for evolving requirements.</p>
          <div class="hww-deliverables">
            <h4>What We Deliver in This Step</h4>
            <ul>
              <li>Security and software updates</li>
              <li>Monitoring and technical support</li>
              <li>Database and performance maintenance</li>
              <li>Feature enhancements and maintenance reports</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`;

  html = html.substring(0, wfStart) + newWorkflowSection + html.substring(wfEnd);
  console.log('Replaced Workflow section successfully.');
} else {
  console.error('Failed to locate Workflow section boundaries.');
}

// 3. Why Choose Section Replacement
const wcStart = html.indexOf('<div class="villan-badge">Why Choose Webspide</div>');
const wcEnd = html.indexOf('</section>', wcStart) + 10;

if (wcStart !== -1 && wcEnd !== -1) {
  const newWhyChooseBlock = `<div class="villan-badge">Why Choose Webspide</div>
    <div class="left-title gradient-heading">Why Choose<br>Webspide For<br><span class="purple">Backend Development</span></div>
    <div class="title-underline"></div>
    <p class="left-desc">Webspide combines backend engineering expertise, structured project management, and dependable communication to build systems that support real business operations. Our backend development services are designed for security, scalability, performance, maintainability, and smooth integration. From architecture planning through deployment and long-term support, we provide international clients with reliable technical delivery and practical solutions prepared for continued growth.</p>
    <div class="why-cards">
      <div class="why-card"><div class="why-card-num">01</div><div class="why-card-title">Experienced Backend Development Team</div><p class="why-card-desc">Our backend developers work across server-side architecture, databases, APIs, cloud platforms, security, and application integrations. This broad expertise helps us select suitable technologies and solve complex technical requirements without losing sight of business goals. Every solution is planned for dependable operation, clean maintainability, and efficient collaboration with front-end, mobile, product, and internal technology teams worldwide.</p></div>
      <div class="why-card"><div class="why-card-num">02</div><div class="why-card-title">Quality-Focused Engineering Standards</div><p class="why-card-desc">We follow structured coding standards, peer reviews, version control, testing, and documentation throughout development. Functional behaviour, error handling, database operations, APIs, and security controls are carefully verified before deployment. This quality-focused process reduces avoidable defects, improves maintainability, and gives clients a backend system that performs reliably under realistic operating conditions and future development changes consistently.</p></div>
      <div class="why-card"><div class="why-card-num">03</div><div class="why-card-title">Clear Communication and Delivery</div><p class="why-card-desc">International projects require organised communication, visible milestones, and timely feedback. We establish practical reporting channels, responsibilities, review stages, and approval processes from the beginning. Our team explains technical decisions clearly, shares meaningful progress, and raises risks early, helping stakeholders make informed decisions while keeping backend development aligned with agreed requirements, priorities, and delivery expectations throughout.</p></div>
      <div class="why-card"><div class="why-card-num">04</div><div class="why-card-title">Security and Performance by Design</div><p class="why-card-desc">Security and performance are addressed during architecture, development, integration, testing, and deployment. We use validation, access controls, secure authentication, encryption, caching, database optimization, and monitoring according to project needs. Building these considerations into the system from the start helps protect information, improve response times, and support stable application performance as usage and data volumes grow.</p></div>
      <div class="why-card"><div class="why-card-num">05</div><div class="why-card-title">Scalable and Flexible Architecture</div><p class="why-card-desc">We design backend systems that can support additional users, transactions, services, integrations, and markets as your business expands. Modular architecture, structured databases, reusable components, and appropriate cloud services make controlled growth easier to manage. This approach helps reduce unnecessary rebuilding and provides a dependable technical foundation for future features, products, operational changes, and digital transformation initiatives.</p></div>
      <div class="why-card"><div class="why-card-num">06</div><div class="why-card-title">Ongoing Support and Maintenance</div><p class="why-card-desc">Our work can continue after deployment through monitoring, troubleshooting, security updates, database maintenance, performance tuning, backups, and feature enhancements. We help clients keep backend systems current and reliable as technologies and business priorities evolve. Long-term support provides continuity, faster issue resolution, and a knowledgeable technical partner for future releases, integrations, scaling requirements, and operational improvements.</p></div>
    </div>`;

  html = html.substring(0, wcStart) + newWhyChooseBlock + html.substring(wcEnd);
  console.log('Replaced Why Choose section successfully.');
} else {
  console.error('Failed to locate Why Choose section boundaries.');
}

fs.writeFileSync('index1.html', html, 'utf8');
console.log('Updated index1.html completely!');
