const fs = require('fs');
const path = require('path');

// Base template from pristine index1.html
const templatePath = path.join(__dirname, 'index1.html');
let html = fs.readFileSync(templatePath, 'utf8');

console.log('Base template index1.html size:', html.length);

// ── 0. CSS UPDATE FOR ALTERNATING REVERSE CARDS ────────────────────────────
if (!html.includes('.service-card.reverse { flex-direction: row-reverse !important; }')) {
  const styleEnd = html.indexOf('</style>');
  const altCss = `
/* Alternating Service Cards Layout */
@media (min-width: 901px) {
  .service-card.reverse {
    flex-direction: row-reverse !important;
  }
}
@media (max-width: 900px) {
  .service-card, .service-card.reverse {
    flex-direction: column !important;
  }
}
`;
  html = html.substring(0, styleEnd) + altCss + html.substring(styleEnd);
}

// ── 1. HEAD / META ──────────────────────────────────────────────────────────
html = html.replace(
  /<title>.*?<\/title>/i,
  '<title>Front-End Development Services for Modern Websites | Webspide</title>'
);

html = html.replace(
  /<meta\s+name="description"[\s\S]*?>/i,
  '<meta name="description" content="Build fast, responsive, and accessible interfaces with Webspide’s custom front-end development, SPA, PWA, UI/UX, integration, and optimization services.">'
);

html = html.replace(
  /<meta\s+name="keywords"[\s\S]*?>/i,
  '<meta name="keywords" content="front-end development services, front-end web development services, front-end website development, custom front-end development services, front-end development company, front-end web development company, front-end development agency, front-end developers, hire front-end developers, responsive web development services, javascript development services, single-page application development, progressive web app development, ui/ux development services, front-end performance optimization, cms front-end integration">'
);

// ── 2. HERO SECTION ────────────────────────────────────────────────────────
html = html.replace(
  /<div class="badge fade-in">.*?<\/div>/i,
  '<div class="badge fade-in">Front-End Development Solutions</div>'
);

html = html.replace(
  /<h1 class="fade-in delay-1">[\s\S]*?<\/h1>/i,
  `<h1 class="fade-in delay-1">
      <span class="grad">FRONT-END</span>
      <span class="grad">DEVELOPMENT SERVICES</span>
      <span class="outline">Responsive Interfaces</span>
    </h1>`
);

html = html.replace(
  /<p class="hero-desc fade-in delay-2">[\s\S]*?<\/p>/i,
  '<p class="hero-desc fade-in delay-2">Webspide delivers responsive, accessible, and high-performing front-end development services for startups, enterprises, and global brands. We transform approved designs and business requirements into intuitive digital interfaces using modern frameworks and clean code. Our team builds engaging websites and web applications that work smoothly across devices, browsers, platforms, and evolving user expectations.</p>'
);

// ── 3. NAV MEGA MENU & MOBILE MENU LINKS ──────────────────────────────────
const oldMegaColStart = html.indexOf('<div class="mega-col-title">');
if (oldMegaColStart !== -1) {
  const megaColEnd = html.indexOf('</div>', html.indexOf('<a href=', oldMegaColStart));
  const newMegaCol = `<div class="mega-col-title">Front-End Services</div>
                <a href="#svc-card-1" class="mega-link">Custom Front-End Development</a>
                <a href="#svc-card-2" class="mega-link">Responsive Web Development</a>
                <a href="#svc-card-3" class="mega-link">UI/UX Development &amp; Prototyping</a>
                <a href="#svc-card-4" class="mega-link">Single Page Application Dev</a>
                <a href="#svc-card-5" class="mega-link">Front-End Framework Dev</a>
                <a href="#svc-card-6" class="mega-link">JavaScript &amp; Optimization</a>
                <a href="#svc-card-7" class="mega-link">Performance Optimization</a>
                <a href="#svc-card-8" class="mega-link">Cross-Browser Compatibility</a>
                <a href="#svc-card-9" class="mega-link">Progressive Web Apps (PWAs)</a>
                <a href="#svc-card-10" class="mega-link">CMS &amp; eCommerce Integration</a>`;
  
  const colContentStart = html.indexOf('<a href=', oldMegaColStart);
  const colContentEnd = html.indexOf('</div>', colContentStart);
  html = html.substring(0, oldMegaColStart) + newMegaCol + html.substring(colContentEnd);
}

// Mobile Menu
const mobSectionStart = html.indexOf('<div class="mob-section-title">');
if (mobSectionStart !== -1) {
  const mobSectionEnd = html.indexOf('<div class="mob-section-title">', mobSectionStart + 30);
  const newMobLinks = `<div class="mob-section-title">Front-End Development Services</div>
    <a href="#svc-card-1" class="mob-sub-link">Custom Front-End Development</a>
    <a href="#svc-card-2" class="mob-sub-link">Responsive Web Development</a>
    <a href="#svc-card-3" class="mob-sub-link">UI/UX Development &amp; Prototyping</a>
    <a href="#svc-card-4" class="mob-sub-link">Single Page Application Development</a>
    <a href="#svc-card-5" class="mob-sub-link">Front-End Framework Development</a>
    <a href="#svc-card-6" class="mob-sub-link">JavaScript Development &amp; Optimization</a>
    <a href="#svc-card-7" class="mob-sub-link">Front-End Performance Optimization</a>
    <a href="#svc-card-8" class="mob-sub-link">Cross-Browser &amp; Platform Compatibility</a>
    <a href="#svc-card-9" class="mob-sub-link">Progressive Web App Development</a>
    <a href="#svc-card-10" class="mob-sub-link">CMS &amp; eCommerce Front-End Integration</a>
    `;
  html = html.substring(0, mobSectionStart) + newMobLinks + html.substring(mobSectionEnd);
}

// ── 4. B1 / INTRO SECTION ──────────────────────────────────────────────────
html = html.replace(
  /<div class="b1-title gradient-heading">[\s\S]*?<\/div>/i,
  '<div class="b1-title gradient-heading">Transform Your Web Presence with<span>Professional Front-End Development</span></div>'
);

html = html.replace(
  /<p class="b1-desc">[\s\S]*?<\/p>/i,
  '<p class="b1-desc">A well-built front end shapes how users understand, navigate, and interact with your digital platform. Webspide provides professional front-end development services that combine responsive design, precise implementation, accessibility, speed, and scalable architecture. We create polished interfaces aligned with your brand, business goals, technical environment, and customer expectations.</p>'
);

// B1 Cards (6 cards)
const b1Start = html.indexOf('<!-- B1 CARDS GRID -->');
const b1End = html.indexOf('</section>', b1Start);

const b1CardsNewHtml = `<!-- B1 CARDS GRID -->
    <div class="b1-cards-grid">
      <!-- Card 1 -->
      <div class="b1-card">
        <div class="b1-card-top">
          <div class="b1-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M6 8l3 3-3 3M11 14h6"/></svg>
          </div>
          <div class="b1-card-title">Pixel-Perfect UI Development</div>
        </div>
        <p class="b1-card-desc">We translate approved designs into accurate, responsive interfaces with consistent spacing, typography, colours, components, and interactions. Careful implementation preserves your brand identity while creating polished digital experiences that remain clear, functional, and visually balanced across screen sizes.</p>
      </div>

      <!-- Card 2 -->
      <div class="b1-card">
        <div class="b1-card-top">
          <div class="b1-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
          </div>
          <div class="b1-card-title">Cross-Browser &amp; Cross-Platform Compatibility</div>
        </div>
        <p class="b1-card-desc">Our developers build and test interfaces across leading browsers, operating systems, devices, and resolutions. Progressive enhancement, responsive layouts, and compatibility checks help users receive a consistent experience without broken elements, unexpected behaviour, or avoidable platform-specific limitations.</p>
      </div>

      <!-- Card 3 -->
      <div class="b1-card">
        <div class="b1-card-top">
          <div class="b1-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <div class="b1-card-title">Enhanced Website Performance</div>
        </div>
        <p class="b1-card-desc">We optimise code, images, scripts, fonts, rendering, and asset delivery to improve front-end performance. Faster loading and smoother interactions support stronger usability, engagement, conversions, search visibility, and customer satisfaction across different devices and network conditions.</p>
      </div>
    </div>

    <br>

    <!-- B2 CARDS GRID -->
    <div class="b2-cards-grid">
      <!-- Card 4 -->
      <div class="b2-card">
        <div class="b2-card-top">
          <div class="b2-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polygon points="2 17 12 22 22 17 12 12 2 17"/></svg>
          </div>
          <div class="b2-card-title">Scalable &amp; Future-Ready Solutions</div>
        </div>
        <p class="b1-card-desc">We use component-based architecture, maintainable code, documented standards, and suitable frameworks to support future changes. Your interface can accommodate new pages, features, integrations, markets, and user requirements without creating unnecessary technical complexity or requiring frequent redevelopment.</p>
      </div>

      <!-- Card 5 -->
      <div class="b2-card">
        <div class="b2-card-top">
          <div class="b2-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
          </div>
          <div class="b2-card-title">Seamless CMS &amp; eCommerce Integration</div>
        </div>
        <p class="b1-card-desc">Our front-end development services connect interfaces with content management systems, commerce platforms, APIs, and business applications. Reliable integration keeps content, products, customer information, and transactions synchronized while maintaining responsive performance and consistent user experiences throughout.</p>
      </div>

      <!-- Card 6 -->
      <div class="b2-card">
        <div class="b2-card-top">
          <div class="b2-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <div class="b2-card-title">Dedicated Front-End Development Team</div>
        </div>
        <p class="b1-card-desc">Businesses can hire front-end developers with experience in modern frameworks, responsive interfaces, accessibility, testing, and performance optimization. Our team works through structured communication, documented requirements, transparent milestones, and dependable delivery practices for international development engagements.</p>
      </div>
    </div>
  </div>`;

if (b1Start !== -1 && b1End !== -1) {
  html = html.substring(0, b1Start) + b1CardsNewHtml + html.substring(b1End);
}

// ── 5. SERVICES SECTION (WITH ALTERNATING REVERSE CARDS) ───────────────────
const svcSectionStart = html.indexOf('<section class="services-section section-light" id="services">');
const svcSectionEnd = html.indexOf('</section>', html.indexOf('<!-- CARD 10', svcSectionStart));

const newServicesSectionHtml = `<section class="services-section section-light" id="services">
  <div class="services-section-head">
    <div class="section-tag">What We Do</div>
    <h2 class="section-title gradient-heading">Our Front-End Development Services</h2>
    <p class="section-sub" style="margin-bottom:0">Responsive, accessible, and high-performing front-end solutions engineered with modern frameworks and clean component architecture.</p>
  </div>
  <br>

  <!-- CARD 01 — Custom Front-End Development -->
  <div class="service-card reveal" id="svc-card-1">
    <div class="card-text">
      <div class="card-num">01</div>
      <h2 class="card-title">Custom Front-End<br><span>Development</span></h2><br>
      <p class="card-desc">Webspide provides custom front-end development services for businesses that need interfaces built around specific users, workflows, and brand requirements. We begin by reviewing approved designs, content priorities, functional expectations, devices, browsers, and technical dependencies. This helps us create a clear implementation plan rather than forcing the project into a generic template or unsuitable component library.</p>
      <div class="card-desc-extra" data-extra>
        <p>Our developers build responsive pages, reusable components, forms, dashboards, animations, and interactive features using technologies suited to the project. We focus on clean code, accessibility, semantic structure, predictable behaviour, and maintainable styling. Interfaces are integrated carefully with APIs, back-end systems, content platforms, or eCommerce services to ensure accurate data and smooth user interactions.</p><br>
        <p>From initial technical review through coding, testing, optimisation, and handover, our front-end web development services support the complete delivery process. The finished interface is designed to remain consistent, fast, and easy to extend as content, features, markets, and business requirements evolve. Documentation and component guidance also help internal teams manage future updates with greater confidence. We also review analytics, localisation, content governance, and browser support where these factors influence implementation.</p>
      </div>
      <br>
      <div class="card-btns">
        <a href="#contact" class="svc-btn-primary">Get Custom Front-End Solutions →</a>
        <button type="button" class="svc-btn-link" data-readmore>Read More<svg class="rm-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></button>
      </div>
    </div>
    <div class="card-visual">
      <div class="illus-wrap float-anim-d2" style="max-width:340px; position:relative;">
        <img src="custom-web-development-front-end-services.webp" alt="Custom Front-End Development" style="width:100%;height:auto;display:block;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);">
      </div>
    </div>
  </div>

  <!-- CARD 02 — Responsive Web Development (ALTERNATE REVERSE) -->
  <div class="service-card reveal reverse" id="svc-card-2">
    <div class="card-text">
      <div class="card-num">02</div>
      <h2 class="card-title">Responsive Web<br><span>Development</span></h2><br>
      <p class="card-desc">Customers may access your website from smartphones, tablets, laptops, desktops, and screens with very different dimensions. Webspide’s responsive web development services create flexible interfaces that adapt naturally across these environments. We plan layouts, content priorities, navigation, media, and interactions according to available screen space instead of simply shrinking a desktop design.</p>
      <div class="card-desc-extra" data-extra>
        <p>Our front-end developers use mobile-first techniques, flexible grids, responsive typography, modern CSS, and carefully selected breakpoints. We test menus, forms, tables, images, buttons, and interactive elements across common devices and orientations. Accessibility, touch targets, loading behaviour, and content readability are reviewed to ensure each experience remains practical and visually consistent.</p><br>
        <p>Whether you need a new responsive website or improvements to an existing platform, our front-end development company manages implementation, testing, and performance refinement. The completed interface helps users browse and complete important actions without unnecessary zooming, scrolling, or layout problems. It also supports broader reach, stronger engagement, improved mobile usability, and easier future expansion across devices. Responsive implementation also makes future content additions and design updates easier to manage consistently.</p>
      </div>
      <br>
      <div class="card-btns">
        <a href="#contact" class="svc-btn-primary">Build a Responsive Website →</a>
        <button type="button" class="svc-btn-link" data-readmore>Read More<svg class="rm-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></button>
      </div>
    </div>
    <div class="card-visual">
      <div class="illus-wrap float-anim-d2" style="max-width:340px; position:relative;">
        <img src="custom-web-development-full-stack-services.webp" alt="Responsive Web Development" style="width:100%;height:auto;display:block;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);">
      </div>
    </div>
  </div>

  <!-- CARD 03 — UI/UX Development & Prototyping -->
  <div class="service-card reveal" id="svc-card-3">
    <div class="card-text">
      <div class="card-num">03</div>
      <h2 class="card-title">UI/UX Development<br><span>&amp; Prototyping</span></h2><br>
      <p class="card-desc">Webspide turns user-experience plans and visual concepts into practical front-end interfaces through UI/UX development and prototyping. We examine audience needs, user journeys, content structure, brand guidelines, accessibility, and conversion goals before defining screens and interactions. Early prototypes help stakeholders understand how the experience will work before full development begins.</p>
      <div class="card-desc-extra" data-extra>
        <p>Our process may include wireframes, clickable prototypes, design systems, responsive layouts, component states, and interaction patterns. We refine navigation, forms, calls to action, feedback messages, and information hierarchy to reduce confusion and support confident task completion. Usability observations and stakeholder reviews help identify improvements while changes are still efficient to make.</p><br>
        <p>Once the direction is approved, our front-end developers translate the interface into reusable, responsive components aligned with the prototype. We coordinate with back-end teams and content owners to ensure the final experience works with real data and operational requirements. The result is a visually coherent, accessible, and user-focused platform designed to improve engagement, retention, and conversions. Design decisions are documented so later development and content updates remain consistent across the platform.</p>
      </div>
      <br>
      <div class="card-btns">
        <a href="#contact" class="svc-btn-primary">Create Your UI/UX Experience →</a>
        <button type="button" class="svc-btn-link" data-readmore>Read More<svg class="rm-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></button>
      </div>
    </div>
    <div class="card-visual">
      <div class="illus-wrap float-anim-d2" style="max-width:340px; position:relative;">
        <img src="custom-cms-development-services.webp-artguru.webp" alt="UI/UX Development &amp; Prototyping" style="width:100%;height:auto;display:block;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);">
      </div>
    </div>
  </div>

  <!-- CARD 04 — Single Page Application Development (ALTERNATE REVERSE) -->
  <div class="service-card reveal reverse" id="svc-card-4">
    <div class="card-text">
      <div class="card-num">04</div>
      <h2 class="card-title">Single Page Application<br><span>Development</span></h2><br>
      <p class="card-desc">Webspide develops single-page applications for platforms that require fast, dynamic, and highly interactive browser experiences. Rather than reloading complete pages for every action, an SPA updates relevant interface sections as users navigate or complete tasks. We evaluate the application’s workflows, data requirements, SEO considerations, and expected usage before recommending this architecture.</p>
      <div class="card-desc-extra" data-extra>
        <p>Our front-end developers use frameworks such as React, Angular, or Vue.js to build reusable components, routing, state management, forms, dashboards, and real-time interactions. APIs connect the interface with back-end services while loading states, validation, error handling, authentication, and permissions are implemented carefully. Performance, accessibility, and maintainable application structure remain central throughout development.</p><br>
        <p>Single-page applications are suitable for SaaS products, customer portals, administrative systems, analytics dashboards, and other interaction-heavy platforms. Our front-end web development company manages architecture, coding, integration, testing, optimisation, and deployment support. The completed application provides smooth navigation and responsive interactions while remaining prepared for additional features, users, modules, and data requirements. We also document component behaviour, data flow, and deployment considerations for future technical teams effectively.</p>
      </div>
      <br>
      <div class="card-btns">
        <a href="#contact" class="svc-btn-primary">Develop a High-Performance SPA →</a>
        <button type="button" class="svc-btn-link" data-readmore>Read More<svg class="rm-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></button>
      </div>
    </div>
    <div class="card-visual">
      <div class="illus-wrap float-anim-d2" style="max-width:340px; position:relative;">
        <img src="custom-web-development-enterprise-portals.webp" alt="Single Page Application Development" style="width:100%;height:auto;display:block;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);">
      </div>
    </div>
  </div>

  <!-- CARD 05 — Front-End Framework Development -->
  <div class="service-card reveal" id="svc-card-5">
    <div class="card-text">
      <div class="card-num">05</div>
      <h2 class="card-title">Front-End Framework<br><span>Development</span></h2><br>
      <p class="card-desc">Selecting an appropriate front-end framework influences application performance, maintainability, development speed, and future scalability. Webspide evaluates project complexity, team requirements, integrations, content behaviour, SEO needs, and expected growth before recommending React, Angular, Vue.js, or another suitable approach. We avoid choosing technology solely because it is popular or familiar.</p>
      <div class="card-desc-extra" data-extra>
        <p>Our developers use component-based architecture, routing, state management, type safety, testing tools, and framework conventions to create organised applications. Shared components and documented patterns help maintain visual consistency while reducing duplicated effort. We also consider server-side rendering, static generation, code splitting, and API communication where these methods improve user experience or technical performance.</p><br>
        <p>Whether you need a new framework-based application, an interface migration, or support for an existing codebase, our front-end development agency provides practical implementation and guidance. The result is a structured, scalable, and maintainable front end aligned with the project’s real operational needs. Technical documentation supports onboarding, future updates, quality control, and collaboration between internal or external teams. This framework guidance also helps clients avoid unnecessary dependencies and long-term technical restrictions.</p>
      </div>
      <br>
      <div class="card-btns">
        <a href="#contact" class="svc-btn-primary">Choose the Right Front-End Framework →</a>
        <button type="button" class="svc-btn-link" data-readmore>Read More<svg class="rm-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></button>
      </div>
    </div>
    <div class="card-visual">
      <div class="illus-wrap float-anim-d2" style="max-width:340px; position:relative;">
        <img src="custom-web-development-back-end-services.webp" alt="Front-End Framework Development" style="width:100%;height:auto;display:block;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);">
      </div>
    </div>
  </div>

  <!-- CARD 06 — JavaScript Development & Optimization (ALTERNATE REVERSE) -->
  <div class="service-card reveal reverse" id="svc-card-6">
    <div class="card-text">
      <div class="card-num">06</div>
      <h2 class="card-title">JavaScript Development<br><span>&amp; Optimization</span></h2><br>
      <p class="card-desc">JavaScript powers the dynamic behaviour behind modern websites and web applications. Webspide provides JavaScript development and optimization for interactive forms, dashboards, search, filters, calculators, real-time updates, animations, and application workflows. We review the required functionality and existing code carefully so new features remain dependable without creating unnecessary complexity or performance problems.</p>
      <div class="card-desc-extra" data-extra>
        <p>Our developers use modern JavaScript or TypeScript, suitable libraries, modular code, asynchronous processing, and clear error handling. We reduce duplicated logic, remove unused scripts, manage dependencies, and improve loading through code splitting or deferred execution where appropriate. Compatibility, accessibility, security, and maintainability are considered alongside visual interaction and application responsiveness.</p><br>
        <p>For existing platforms, we can analyse slow execution, render-blocking resources, large bundles, memory issues, and browser errors before implementing improvements. For new projects, optimisation is built into development from the beginning. The completed solution delivers smoother interactions, faster response, and cleaner code while supporting future front-end features, framework upgrades, integrations, and changing user expectations. Detailed findings can also guide future development standards, dependency management, and performance monitoring priorities effectively.</p>
      </div>
      <br>
      <div class="card-btns">
        <a href="#contact" class="svc-btn-primary">Optimize Your JavaScript →</a>
        <button type="button" class="svc-btn-link" data-readmore>Read More<svg class="rm-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></button>
      </div>
    </div>
    <div class="card-visual">
      <div class="illus-wrap float-anim-d2" style="max-width:340px; position:relative;">
        <img src="custom-web-development-api-integrations.webp" alt="JavaScript Development &amp; Optimization" style="width:100%;height:auto;display:block;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);">
      </div>
    </div>
  </div>

  <!-- CARD 07 — Front-End Performance Optimization -->
  <div class="service-card reveal" id="svc-card-7">
    <div class="card-text">
      <div class="card-num">07</div>
      <h2 class="card-title">Front-End Performance<br><span>Optimization</span></h2><br>
      <p class="card-desc">Front-end performance affects user satisfaction, conversions, mobile usability, and search visibility. Webspide reviews how browsers load, render, and respond to your website or application, identifying issues involving scripts, stylesheets, images, fonts, components, third-party tools, and network requests. Findings are prioritised according to measurable impact rather than applying generic changes without context.</p>
      <div class="card-desc-extra" data-extra>
        <p>Our optimisation work can include asset compression, modern image formats, lazy loading, code splitting, minification, caching, font improvements, reduced JavaScript execution, and removal of unnecessary resources. We also assess Core Web Vitals, rendering behaviour, interaction delays, and mobile performance. Changes are tested carefully to protect design, functionality, tracking, accessibility, and connected services.</p><br>
        <p>Whether improving a corporate website, eCommerce storefront, portal, or single-page application, our front-end web development services provide clear recommendations and implementation support. Results are verified through performance tools and real-device testing where appropriate. The outcome is a faster, smoother digital experience that supports engagement, retention, technical SEO, and dependable performance as traffic and content increase. We can also establish performance budgets and monitoring priorities for ongoing development and content changes.</p>
      </div>
      <br>
      <div class="card-btns">
        <a href="#contact" class="svc-btn-primary">Improve Front-End Performance →</a>
        <button type="button" class="svc-btn-link" data-readmore>Read More<svg class="rm-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></button>
      </div>
    </div>
    <div class="card-visual">
      <div class="illus-wrap float-anim-d2" style="max-width:340px; position:relative;">
        <img src="custom-web-development-performance-optimization.webp" alt="Front-End Performance Optimization" style="width:100%;height:auto;display:block;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);">
      </div>
    </div>
  </div>

  <!-- CARD 08 — Cross-Browser & Cross-Platform Compatibility (ALTERNATE REVERSE) -->
  <div class="service-card reveal reverse" id="svc-card-8">
    <div class="card-text">
      <div class="card-num">08</div>
      <h2 class="card-title">Cross-Browser &amp;<br><span>Cross-Platform Compatibility</span></h2><br>
      <p class="card-desc">A website may appear correct in one browser yet behave differently in another because rendering engines, device capabilities, and operating systems vary. Webspide provides cross-browser and cross-platform compatibility services to reduce these inconsistencies. We define supported environments according to your audience, project requirements, analytics, and the practical capabilities of selected technologies.</p>
      <div class="card-desc-extra" data-extra>
        <p>Our front-end developers test layouts, navigation, forms, media, animations, typography, JavaScript behaviour, and interactive components across major browsers and devices. We use responsive design, progressive enhancement, appropriate fallbacks, standards-based code, and targeted fixes rather than unreliable browser-specific workarounds. Accessibility and touch interaction are also reviewed during compatibility testing.</p><br>
        <p>Compatibility work can be included in new front-end development or applied to an existing platform with reported issues. We document defects, resolve priority problems, and retest affected areas before approval. The completed interface delivers a more consistent experience across supported desktops, smartphones, tablets, browsers, and operating systems, helping your business reach users without avoidable technical barriers or broken interactions. A compatibility matrix can also guide future testing, browser support decisions, and release planning.</p>
      </div>
      <br>
      <div class="card-btns">
        <a href="#contact" class="svc-btn-primary">Ensure Cross-Platform Compatibility →</a>
        <button type="button" class="svc-btn-link" data-readmore>Read More<svg class="rm-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></button>
      </div>
    </div>
    <div class="card-visual">
      <div class="illus-wrap float-anim-d2" style="max-width:340px; position:relative;">
        <img src="custom-web-development-website-migration.webp" alt="Cross-Browser &amp; Cross-Platform Compatibility" style="width:100%;height:auto;display:block;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);">
      </div>
    </div>
  </div>

  <!-- CARD 09 — Progressive Web App Development -->
  <div class="service-card reveal" id="svc-card-9">
    <div class="card-text">
      <div class="card-num">09</div>
      <h2 class="card-title">Progressive Web App<br><span>Development</span></h2><br>
      <p class="card-desc">Webspide develops progressive web applications that combine broad web accessibility with selected app-like capabilities. PWAs can offer fast repeat visits, home-screen installation, offline or low-connectivity support, background updates, and push notifications through compatible browsers. We first assess your users, content, functionality, and business objectives to confirm whether the approach provides meaningful value.</p>
      <div class="card-desc-extra" data-extra>
        <p>Our developers create responsive interfaces, service workers, web app manifests, caching strategies, secure API connections, and reliable update behaviour. We carefully plan which content or functions should remain available offline and how users receive feedback during network changes. Performance, accessibility, browser support, security, and maintainability guide the technical implementation.</p><br>
        <p>Progressive web app development can suit eCommerce, field services, content platforms, customer portals, booking tools, and other mobile-focused experiences. Our front-end development company manages planning, interface development, integration, testing, deployment, and documentation. The finished PWA delivers an engaging browser-based experience while remaining flexible enough for future features, integrations, content changes, and evolving platform capabilities. We also provide guidance for notification permissions, cache updates, installation prompts, and ongoing monitoring effectively.</p>
      </div>
      <br>
      <div class="card-btns">
        <a href="#contact" class="svc-btn-primary">Build a Progressive Web App →</a>
        <button type="button" class="svc-btn-link" data-readmore>Read More<svg class="rm-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></button>
      </div>
    </div>
    <div class="card-visual">
      <div class="illus-wrap float-anim-d2" style="max-width:340px; position:relative;">
        <img src="custom-web-development-progressive-web-apps.webp" alt="Progressive Web App Development" style="width:100%;height:auto;display:block;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);">
      </div>
    </div>
  </div>

  <!-- CARD 10 — CMS & eCommerce Front-End Integration (ALTERNATE REVERSE) -->
  <div class="service-card reveal reverse" id="svc-card-10">
    <div class="card-text">
      <div class="card-num">10</div>
      <h2 class="card-title">CMS &amp; eCommerce<br><span>Front-End Integration</span></h2><br>
      <p class="card-desc">Webspide integrates responsive front-end interfaces with content management systems and eCommerce platforms, connecting design with practical publishing and commerce functions. We work with WordPress, Shopify, Magento, headless CMS platforms, custom systems, and approved APIs. Each integration begins with understanding content structures, product data, customer journeys, administrative workflows, and performance requirements.</p>
      <div class="card-desc-extra" data-extra>
        <p>Our front-end developers create templates, reusable components, dynamic sections, product displays, search, filters, carts, forms, and account experiences that receive accurate data from connected systems. We handle loading states, validation, caching, error behaviour, and responsive presentation carefully. The interface is designed to remain consistent while content or catalogue information changes through administrative tools.</p><br>
        <p>Whether you need a new storefront, a headless content experience, or a redesigned interface for an existing platform, our front-end web development services support implementation, testing, and optimisation. The completed integration helps content and commerce teams manage daily updates without sacrificing usability, speed, accessibility, or brand consistency. Documentation also supports maintenance, platform upgrades, and future feature development. Administrator workflows are considered so everyday publishing and merchandising tasks remain practical for internal teams.</p>
      </div>
      <br>
      <div class="card-btns">
        <a href="#contact" class="svc-btn-primary">Integrate Your CMS or eCommerce Platform →</a>
        <button type="button" class="svc-btn-link" data-readmore>Read More<svg class="rm-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></button>
      </div>
    </div>
    <div class="card-visual">
      <div class="illus-wrap float-anim-d2" style="max-width:340px; position:relative;">
        <img src="custom-web-development-ecommerce-platform.webp" alt="CMS &amp; eCommerce Front-End Integration" style="width:100%;height:auto;display:block;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);">
      </div>
    </div>
  </div>
</section>`;

if (svcSectionStart !== -1 && svcSectionEnd !== -1) {
  html = html.substring(0, svcSectionStart) + newServicesSectionHtml + html.substring(svcSectionEnd + 10);
}

// ── 6. TECH STACK SECTION ─────────────────────────────────────────────────
const tsSectionOldStart = html.indexOf('<div class="ts-section-wrapper">');
const tsSectionOldEnd = html.indexOf('</section>', tsSectionOldStart);

const newTechStackHtml = `<div class="ts-section-wrapper">
    <div class="ts-header">
      <div class="ts-badge">Technology</div>
      <h2 class="gradient-heading">Technologies We Use for <span>Front-End Development</span></h2>
      <p>We use modern front-end technologies selected for responsiveness, accessibility, performance, scalability, integration, testing, and long-term maintainability.</p>
    </div>
    <div class="ts-timeline">
      <!-- 1. Programming Languages & Markup -->
      <div class="ts-row">
        <div class="ts-hex-wrap"><svg viewBox="0 0 62 62" fill="none"><path d="M31 3L56.5 17.5V46.5L31 61L5.5 46.5V17.5L31 3Z" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.7)" stroke-width="1.4"/></svg><div class="ts-hex-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div></div>
        <br/>
        <div class="ts-row-label"><span><br>1. Programming Languages &amp; Markup</span></div>
        <div class="ts-card"><div class="ts-tech-grid">
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5"/><span>HTML5</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3"/><span>CSS3</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript"/><span>JavaScript</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript"/><span>TypeScript</span></div>
        </div></div>
      </div>

      <!-- 2. Front-End Frameworks & Libraries -->
      <div class="ts-row">
        <div class="ts-hex-wrap"><svg viewBox="0 0 62 62" fill="none"><path d="M31 3L56.5 17.5V46.5L31 61L5.5 46.5V17.5L31 3Z" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.7)" stroke-width="1.4"/></svg><div class="ts-hex-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg></div></div>
        <br/>
        <div class="ts-row-label"><span><br>2. Front-End Frameworks &amp; Libraries</span></div>
        <div class="ts-card"><div class="ts-tech-grid">
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js"/><span>React.js</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular"/><span>Angular</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js"/><span>Vue.js</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js"/><span>Next.js</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" alt="Svelte"/><span>Svelte</span></div>
        </div></div>
      </div>

      <!-- 3. UI & Component Libraries -->
      <div class="ts-row">
        <div class="ts-hex-wrap"><svg viewBox="0 0 62 62" fill="none"><path d="M31 3L56.5 17.5V46.5L31 61L5.5 46.5V17.5L31 3Z" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.7)" stroke-width="1.4"/></svg><div class="ts-hex-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div></div>
        <br/>
        <div class="ts-row-label"><span><br>3. UI &amp; Component Libraries</span></div>
        <div class="ts-card"><div class="ts-tech-grid">
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap"/><span>Bootstrap</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS"/><span>Tailwind CSS</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt="Material UI"/><span>Material UI</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#1890ff" stroke-width="2" style="width:28px;height:28px;"><path d="M12 2L2 22h20L12 2z"/></svg><span>Ant Design</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#319795" stroke-width="2" style="width:28px;height:28px;"><circle cx="12" cy="12" r="10"/></svg><span>Chakra UI</span></div>
        </div></div>
      </div>

      <!-- 4. State Management -->
      <div class="ts-row">
        <div class="ts-hex-wrap"><svg viewBox="0 0 62 62" fill="none"><path d="M31 3L56.5 17.5V46.5L31 61L5.5 46.5V17.5L31 3Z" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.7)" stroke-width="1.4"/></svg><div class="ts-hex-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg></div></div>
        <br/>
        <div class="ts-row-label"><span><br>4. State Management</span></div>
        <div class="ts-card"><div class="ts-tech-grid">
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Redux"/><span>Redux</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2" style="width:28px;height:28px;"><circle cx="12" cy="12" r="9"/></svg><span>Zustand</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vuex"/><span>Vuex</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#FFE56D" stroke-width="2" style="width:28px;height:28px;"><path d="M12 2l3 7h7l-5.5 4.5 2 7.5-6.5-4.5-6.5 4.5 2-7.5L2 9h7z"/></svg><span>Pinia</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="NgRx"/><span>NgRx</span></div>
        </div></div>
      </div>

      <!-- 5. API & Data Handling -->
      <div class="ts-row">
        <div class="ts-hex-wrap"><svg viewBox="0 0 62 62" fill="none"><path d="M31 3L56.5 17.5V46.5L31 61L5.5 46.5V17.5L31 3Z" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.7)" stroke-width="1.4"/></svg><div class="ts-hex-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></div></div>
        <br/>
        <div class="ts-row-label"><span><br>5. API &amp; Data Handling</span></div>
        <div class="ts-card"><div class="ts-tech-grid">
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#1F4FB2" stroke-width="2" style="width:28px;height:28px;"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/></svg><span>RESTful APIs</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt="GraphQL"/><span>GraphQL</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#5A29E4" stroke-width="2" style="width:28px;height:28px;"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg><span>Axios</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#102A7A" stroke-width="2" style="width:28px;height:28px;"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><span>Fetch API</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#C026B8" stroke-width="2" style="width:28px;height:28px;"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg><span>WebSockets</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#07164F" stroke-width="2" style="width:28px;height:28px;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg><span>JSON</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#1F4FB2" stroke-width="2" style="width:28px;height:28px;"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg><span>API Authentication</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2" style="width:28px;height:28px;"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg><span>Real-Time Sync</span></div>
        </div></div>
      </div>

      <!-- 6. Performance & Optimization -->
      <div class="ts-row">
        <div class="ts-hex-wrap"><svg viewBox="0 0 62 62" fill="none"><path d="M31 3L56.5 17.5V46.5L31 61L5.5 46.5V17.5L31 3Z" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.7)" stroke-width="1.4"/></svg><div class="ts-hex-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div></div>
        <br/>
        <div class="ts-row-label"><span><br>6. Performance &amp; Optimization</span></div>
        <div class="ts-card"><div class="ts-tech-grid">
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" alt="Webpack"/><span>Webpack</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" alt="Vite"/><span>Vite</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg" alt="Babel"/><span>Babel</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#1F4FB2" stroke-width="2" style="width:28px;height:28px;"><path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6"/></svg><span>Code Splitting</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2" style="width:28px;height:28px;"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><span>Lazy Loading</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#C026B8" stroke-width="2" style="width:28px;height:28px;"><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/></svg><span>Asset Minification</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#102A7A" stroke-width="2" style="width:28px;height:28px;"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><span>Image Optimization</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#07164F" stroke-width="2" style="width:28px;height:28px;"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg><span>Browser Caching</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2" style="width:28px;height:28px;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><span>Lighthouse Audits</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2" style="width:28px;height:28px;"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg><span>Core Web Vitals</span></div>
        </div></div>
      </div>

      <!-- 7. Motion & Animation -->
      <div class="ts-row">
        <div class="ts-hex-wrap"><svg viewBox="0 0 62 62" fill="none"><path d="M31 3L56.5 17.5V46.5L31 61L5.5 46.5V17.5L31 3Z" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.7)" stroke-width="1.4"/></svg><div class="ts-hex-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-4M12 2v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83"/></svg></div></div>
        <br/>
        <div class="ts-row-label"><span><br>7. Motion &amp; Animation</span></div>
        <div class="ts-card"><div class="ts-tech-grid">
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2" style="width:28px;height:28px;"><rect x="3" y="3" width="18" height="18" rx="2"/></svg><span>Framer Motion</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#88CE02" stroke-width="2" style="width:28px;height:28px;"><polygon points="12 2 2 7 12 12 22 7 12 2"/></svg><span>GSAP</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#00D2B8" stroke-width="2" style="width:28px;height:28px;"><circle cx="12" cy="12" r="9"/></svg><span>Lottie</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS Animations"/><span>CSS Animations</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#FFB300" stroke-width="2" style="width:28px;height:28px;"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg><span>SVG Animations</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#1F4FB2" stroke-width="2" style="width:28px;height:28px;"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg><span>Scroll Interactions</span></div>
        </div></div>
      </div>

      <!-- 8. Cross-Browser Compatibility & Testing -->
      <div class="ts-row">
        <div class="ts-hex-wrap"><svg viewBox="0 0 62 62" fill="none"><path d="M31 3L56.5 17.5V46.5L31 61L5.5 46.5V17.5L31 3Z" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.7)" stroke-width="1.4"/></svg><div class="ts-hex-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg></div></div>
        <br/>
        <div class="ts-row-label"><span><br>8. Cross-Browser &amp; Testing</span></div>
        <div class="ts-card"><div class="ts-tech-grid">
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" alt="Selenium"/><span>Selenium</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="Jest"/><span>Jest</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#1B1F24" stroke-width="2" style="width:28px;height:28px;"><circle cx="12" cy="12" r="10"/></svg><span>Cypress</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#2EAD33" stroke-width="2" style="width:28px;height:28px;"><polygon points="5 3 19 12 5 21 5 3"/></svg><span>Playwright</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Testing Library"/><span>React Testing Lib</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#2055B5" stroke-width="2" style="width:28px;height:28px;"><rect x="2" y="3" width="20" height="14" rx="2"/></svg><span>BrowserStack</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2" style="width:28px;height:28px;"><rect x="5" y="2" width="14" height="20" rx="2"/></svg><span>Responsive Testing</span></div>
        </div></div>
      </div>

      <!-- 9. Progressive Web App Technologies -->
      <div class="ts-row">
        <div class="ts-hex-wrap"><svg viewBox="0 0 62 62" fill="none"><path d="M31 3L56.5 17.5V46.5L31 61L5.5 46.5V17.5L31 3Z" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.7)" stroke-width="1.4"/></svg><div class="ts-hex-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg></div></div>
        <br/>
        <div class="ts-row-label"><span><br>9. Progressive Web App Tech</span></div>
        <div class="ts-card"><div class="ts-tech-grid">
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#1F4FB2" stroke-width="2" style="width:28px;height:28px;"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg><span>Service Workers</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2" style="width:28px;height:28px;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg><span>Web App Manifest</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#C026B8" stroke-width="2" style="width:28px;height:28px;"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/></svg><span>Cache Storage</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#102A7A" stroke-width="2" style="width:28px;height:28px;"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/></svg><span>Push Notifications</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#07164F" stroke-width="2" style="width:28px;height:28px;"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg><span>Background Sync</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#1F4FB2" stroke-width="2" style="width:28px;height:28px;"><rect x="2" y="3" width="20" height="14" rx="2"/></svg><span>Responsive Design</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2" style="width:28px;height:28px;"><path d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/></svg><span>Offline Strategies</span></div>
        </div></div>
      </div>

      <!-- 10. Version Control & Collaboration -->
      <div class="ts-row">
        <div class="ts-hex-wrap"><svg viewBox="0 0 62 62" fill="none"><path d="M31 3L56.5 17.5V46.5L31 61L5.5 46.5V17.5L31 3Z" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.7)" stroke-width="1.4"/></svg><div class="ts-hex-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 9v12M18 9a9 9 0 0 1-9 9"/></svg></div></div>
        <br/>
        <div class="ts-row-label"><span><br>10. Version Control &amp; Collaboration</span></div>
        <div class="ts-card"><div class="ts-tech-grid">
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git"/><span>Git</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub"/><span>GitHub</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" alt="GitLab"/><span>GitLab</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" alt="Bitbucket"/><span>Bitbucket</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker"/><span>Docker</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#1F4FB2" stroke-width="2" style="width:28px;height:28px;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg><span>Code Reviews</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2" style="width:28px;height:28px;"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg><span>Component Docs</span></div>
        </div></div>
      </div>

      <!-- 11. Deployment & Hosting -->
      <div class="ts-row">
        <div class="ts-hex-wrap"><svg viewBox="0 0 62 62" fill="none"><path d="M31 3L56.5 17.5V46.5L31 61L5.5 46.5V17.5L31 3Z" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.7)" stroke-width="1.4"/></svg><div class="ts-hex-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg></div></div>
        <br/>
        <div class="ts-row-label"><span><br>11. Deployment &amp; Hosting</span></div>
        <div class="ts-card"><div class="ts-tech-grid">
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="#000" style="width:28px;height:28px;"><path d="M24 22.5D12 0 0 22.5h24z"/></svg><span>Vercel</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#00C7B7" stroke-width="2" style="width:28px;height:28px;"><polygon points="12 2 2 22 22 22 12 2"/></svg><span>Netlify</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase Hosting"/><span>Firebase</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="Amazon S3"/><span>Amazon S3</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt="CloudFront"/><span>CloudFront</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Microsoft Azure"/><span>Azure</span></div>
          <div class="ts-tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="GCP"/><span>Google Cloud</span></div>
          <div class="ts-tech-item"><svg viewBox="0 0 24 24" fill="none" stroke="#F38020" stroke-width="2" style="width:28px;height:28px;"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg><span>Cloudflare</span></div>
        </div></div>
      </div>
    </div>
  </div>`;

if (tsSectionOldStart !== -1 && tsSectionOldEnd !== -1) {
  html = html.substring(0, tsSectionOldStart) + newTechStackHtml + html.substring(tsSectionOldEnd);
}

// ── 7. WHY CHOOSE SECTION ─────────────────────────────────────────────────
html = html.replace(
  /<div class="left-title gradient-heading">[\s\S]*?<\/div>/i,
  '<div class="left-title gradient-heading">Why Choose<br>Webspide For<br><span class="purple">Front-End<br>Development<br>Services?</span></div>'
);

html = html.replace(
  /<p class="left-desc">[\s\S]*?<\/p>/i,
  '<p class="left-desc">Webspide combines user-focused design implementation, modern front-end engineering, and transparent project management to create interfaces built around real business requirements. Our front-end development services support startups, growing companies, and enterprises worldwide. From planning through deployment and ongoing support, we prioritise quality, communication, accessibility, performance, scalability, and practical long-term value across every digital engagement confidently internationally.</p>'
);

// Why Choose 6 features
const whyChooseOldStart = html.indexOf('<div class="process-timeline">');
const whyChooseOldEnd = html.indexOf('</div>\n  </div>\n</div>', whyChooseOldStart);

const newWhyChooseHtml = `<div class="process-timeline">
      <div class="feature-row">
        <div class="num">01</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M6 8l3 3-3 3M11 14h6"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Experienced Front-End <span class="accent">Developers</span></div>
          <p class="feature-desc">Our developers work across responsive interfaces, component architecture, JavaScript, modern frameworks, accessibility, testing, and performance optimization. This broad experience helps us solve visual and technical requirements as one connected task. Clients receive maintainable front-end solutions designed for consistent behaviour, efficient integration, and dependable operation across supported browsers, devices, platforms, and evolving user expectations worldwide consistently.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">02</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polygon points="2 17 12 22 22 17 12 12 2 17"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Modern and Appropriate <span class="accent">Technology Stack</span></div>
          <p class="feature-desc">We select technologies according to project complexity, performance, SEO, integration, maintainability, and future growth requirements. React, Angular, Vue.js, TypeScript, and related tools are used when they add practical value. This considered approach avoids unnecessary dependencies while creating scalable interfaces that internal teams and future developers can understand, maintain, test, and extend confidently over time.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">03</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Performance and <span class="accent">Accessibility Focus</span></div>
          <p class="feature-desc">Speed and accessibility are addressed during architecture, coding, testing, and optimization rather than added after launch. We improve loading behaviour, rendering, responsive interaction, semantic structure, keyboard access, and content clarity according to project needs. This creates more inclusive digital experiences while supporting engagement, conversions, technical SEO, and reliable use across devices and network conditions worldwide.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">04</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Custom Solutions for <span class="accent">Business Needs</span></div>
          <p class="feature-desc">Every organisation has different users, content, workflows, integrations, and commercial goals. Our custom front-end development services translate those requirements into appropriate components, journeys, and interactions instead of relying on unsuitable templates. The resulting interface aligns with your brand and operations while remaining flexible enough for future pages, features, products, markets, and customer expectations sustainably internationally.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">05</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Seamless CMS and <span class="accent">API Integration</span></div>
          <p class="feature-desc">We connect front-end interfaces with content platforms, commerce systems, back-end services, and third-party APIs through careful planning and testing. Data mapping, loading states, validation, errors, caching, and permissions are handled responsibly. This creates cohesive digital experiences that remain visually consistent, function reliably, and support practical administration across changing content, products, users, and integrations securely internationally.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">06</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Transparent Delivery and <span class="accent">Long-Term Support</span></div>
          <p class="feature-desc">International projects require clear communication, visible milestones, and dependable follow-through. We establish practical review stages, responsibilities, feedback channels, and documentation from the beginning. After launch, our support can include troubleshooting, updates, performance monitoring, compatibility improvements, and feature enhancements, giving clients continuity and a knowledgeable technical partner for future front-end development requirements worldwide with dependable continuity.</p>
        </div>
      </div>
    </div>`;

if (whyChooseOldStart !== -1 && whyChooseOldEnd !== -1) {
  html = html.substring(0, whyChooseOldStart) + newWhyChooseHtml + html.substring(whyChooseOldEnd);
}

// ── 8. WORKFLOW / HOW WE WORK SECTION ─────────────────────────────────────
html = html.replace(
  /<h2 class="section-title gradient-heading">Our Custom Web Development Process<\/h2>/i,
  '<h2 class="section-title gradient-heading">Our Front-End Development Workflow Process</h2>'
);

html = html.replace(
  /<div class="hww-sub-top">Step by step, we build digital experiences that make an impact.<\/div>/i,
  '<div class="hww-sub-top">Our front-end development workflow follows a structured process covering requirements, technical planning, interface development, integration, testing, deployment, and continuous improvement for reliable digital delivery worldwide.</div>'
);

// Update `const steps = [...]` in script
const stepsOldStart = html.indexOf('const steps=[');
const stepsOldEnd = html.indexOf('];', stepsOldStart);

const newStepsArrayHtml = `const steps=[
    {num:'01',label:'Requirements & Experience Analysis',title:'Requirements & Experience Analysis',desc:'We begin by understanding your business goals, target users, design expectations, content priorities, functional requirements, integrations, supported devices, and technical environment before defining the front-end direction.',subs:[{title:'Business Analysis',desc:'We analyse your business, audience, competitors, goals, and challenges.',icon:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M6 8l3 3-3 3M11 14h6"/>'},{title:'Requirement Gathering',desc:'We document pages, components, functions, integrations, and browser requirements.',icon:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>'},{title:'User Experience Review',desc:'We study user journeys, navigation, content priorities, and interactions.',icon:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>'},{title:'Technology Selection',desc:'We select suitable frameworks, libraries, testing, and deployment tools.',icon:'<polygon points="12 2 2 7 12 12 22 7 12 2"/>'}],deliverables:['Approved front-end requirements document','User journeys and interface structure','Component and feature plan','Technology recommendation and roadmap'],illus:'<img src="Workflow Image/custom-web-development-requirements-design-analysis.webp" alt="Requirements & Experience Analysis" style="max-width:320px;width:100%;height:auto;display:block;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);">' },
    {num:'02',label:'Project Planning & Technical Setup',title:'Project Planning & Technical Setup',desc:'Once requirements are approved, we prepare the application structure, coding standards, development environments, component strategy, milestones, responsibilities, and collaboration process for organised front-end implementation.',subs:[{title:'Front-End Architecture',desc:'We define components, routing, state, data flow, and dependencies.',icon:'<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>'},{title:'Development Environment Setup',desc:'We configure local, staging, testing, and production-ready environments.',icon:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>'},{title:'Component Planning',desc:'We identify shared components, layouts, states, and responsive behaviour.',icon:'<polygon points="12 2 2 7 12 12 22 7 12 2"/><polygon points="2 17 12 22 22 17 12 12 2 17"/>'},{title:'Sprint and Coding Standards',desc:'We establish tasks, reviews, documentation, naming, and version control.',icon:'<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 9v12M18 9a9 9 0 0 1-9 9"/>'}],deliverables:['Front-end architecture plan','Configured development environments','Component and design-system structure','Sprint schedule and coding standards'],illus:'<img src="Workflow Image/custom-web-development-project-planning-technical-setup.webp" alt="Project Planning & Technical Setup" style="max-width:320px;width:100%;height:auto;display:block;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);">' },
    {num:'03',label:'UI/UX & Front-End Development',title:'UI/UX & Front-End Development',desc:'Our developers transform approved designs and plans into responsive, accessible, and interactive interfaces. Every page, component, state, and interaction is developed around your brand and user requirements.',subs:[{title:'Responsive Interface Development',desc:'We build interfaces for desktops, tablets, smartphones, and browsers.',icon:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>'},{title:'Component Development',desc:'We create reusable components for consistent and scalable interfaces.',icon:'<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>'},{title:'JavaScript Functionality',desc:'We implement interactions, validation, state, animation, and dynamic behaviour.',icon:'<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>'},{title:'Accessibility Implementation',desc:'We apply semantic structure, keyboard support, and readable presentation.',icon:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'}],deliverables:['Responsive front-end interface','Reusable component library','Interactive application functionality','Accessibility-ready interface structure'],illus:'<img src="Workflow Image/custom-web-development-backend-api-development.webp" alt="UI/UX & Front-End Development" style="max-width:320px;width:100%;height:auto;display:block;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);">' },
    {num:'04',label:'Integration, Testing & Optimization',title:'Integration, Testing & Optimization',desc:'Before launch, we connect APIs and platforms, test interface behaviour, verify compatibility, and optimise loading performance. Identified issues are resolved and retested across supported environments.',subs:[{title:'API and Platform Integration',desc:'We connect interfaces with APIs, CMS, commerce, and back-end systems.',icon:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>'},{title:'Functional Testing',desc:'We test forms, navigation, components, states, and user interactions.',icon:'<polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>'},{title:'Cross-Browser Testing',desc:'We verify consistent behaviour across supported browsers and devices.',icon:'<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>'},{title:'Performance Optimization',desc:'We improve scripts, styles, assets, rendering, and loading behaviour.',icon:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'}],deliverables:['Completed API and platform integrations','Functional quality-assurance report','Browser and device compatibility review','Front-end performance results'],illus:'<img src="Workflow Image/custom-web-development-testing-performance-optimization.webp" alt="Integration, Testing & Optimization" style="max-width:320px;width:100%;height:auto;display:block;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);">' },
    {num:'05',label:'Deployment & Launch',title:'Deployment & Launch',desc:'After final approval, we deploy the front end to its production environment and complete hosting, domain, security, caching, analytics, monitoring, and launch-readiness checks.',subs:[{title:'Production Deployment',desc:'We deploy the approved interface safely to production infrastructure.',icon:'<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>'},{title:'Hosting and CDN Setup',desc:'We configure hosting, caching, delivery, domains, and SSL.',icon:'<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>'},{title:'Analytics Integration',desc:'We connect analytics, conversions, errors, and performance monitoring.',icon:'<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'},{title:'Launch Validation',desc:'We verify critical pages, functions, integrations, and responsive behaviour.',icon:'<polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1 2-2V5a2 2 0 0 1 2-2h11"/>'}],deliverables:['Fully deployed front-end application','Hosting, CDN, and SSL configuration','Analytics and monitoring setup','Launch checklist and final verification'],illus:'<img src="Workflow Image/custom-web-development-deployment-launch.webp" alt="Deployment & Launch" style="max-width:320px;width:100%;height:auto;display:block;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);">' },
    {num:'06',label:'Maintenance & Continuous Improvement',title:'Maintenance & Continuous Improvement',desc:'Our support can continue after launch through updates, compatibility monitoring, performance reviews, bug resolution, component improvements, and new feature development as business and user requirements evolve.',subs:[{title:'Framework and Dependency Updates',desc:'We update frameworks, libraries, packages, and security dependencies regularly.',icon:'<polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>'},{title:'Bug Fixes and Support',desc:'We resolve display, interaction, compatibility, and integration issues promptly.',icon:'<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>'},{title:'Performance Monitoring',desc:'We monitor loading, responsiveness, errors, and browser performance.',icon:'<line x1="18" y1="20" x2="18" y2="10"/><line x1="6" y1="20" x2="6" y2="14"/>'},{title:'Feature Enhancements',desc:'We add pages, components, interactions, integrations, and interface improvements.',icon:'<path d="M12 22v-4M12 2v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83"/>'}],deliverables:['Regular front-end updates','Bug fixes and technical support','Performance and compatibility monitoring','Feature enhancements and maintenance reports'],illus:'<img src="Workflow Image/custom-web-development-maintenance-continuous-improvement.webp" alt="Maintenance & Continuous Improvement" style="max-width:320px;width:100%;height:auto;display:block;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);">' }
  ];`;

if (stepsOldStart !== -1 && stepsOldEnd !== -1) {
  html = html.substring(0, stepsOldStart) + newStepsArrayHtml + html.substring(stepsOldEnd + 2);
}

// ── 9. ORBITAL SERVICES ARRAY IN SCRIPT ───────────────────────────────────
const servicesOldStart = html.indexOf('const SERVICES=[');
const servicesOldEnd = html.indexOf('];', servicesOldStart);

const newServicesArrayHtml = `const SERVICES=[
    {num:'01',name:'Custom Front-End Dev',tag:'Tailored front-end interfaces built for unique workflows, accessibility, and high performance',label:'Custom UI',svg:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',target:'svc-card-1'},
    {num:'02',name:'Responsive Web Dev',tag:'Flexible layouts adapting seamlessly across desktop, tablet, and mobile screens',label:'Responsive',svg:'<rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>',target:'svc-card-2'},
    {num:'03',name:'UI/UX & Prototyping',tag:'Converting user-experience plans into practical, interactive, and tested front-end components',label:'UI/UX',svg:'<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',target:'svc-card-3'},
    {num:'04',name:'Single Page Apps',tag:'Fast, dynamic SPA platforms with React, Vue, or Angular for seamless interaction',label:'SPA Dev',svg:'<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',target:'svc-card-4'},
    {num:'05',name:'Front-End Frameworks',tag:'Scalable component architecture with modern frameworks tailored to business goals',label:'Frameworks',svg:'<polygon points="12 2 2 7 12 12 22 7 12 2"/><polygon points="2 17 12 22 22 17 12 12 2 17"/>',target:'svc-card-5'},
    {num:'06',name:'JavaScript & Optimization',tag:'Modular, high-performance JS/TS execution for real-time features and smooth interactions',label:'JavaScript',svg:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',target:'svc-card-6'},
    {num:'07',name:'Performance Optimization',tag:'Core Web Vitals, asset minification, lazy loading, and code splitting for rapid page loads',label:'Speed',svg:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',target:'svc-card-7'},
    {num:'08',name:'Cross-Browser Compatibility',tag:'Flawless execution and progressive enhancement across all major browsers and devices',label:'Compatibility',svg:'<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',target:'svc-card-8'},
    {num:'09',name:'Progressive Web Apps',tag:'PWA solutions with offline support, service workers, push notifications, and fast loading',label:'PWA',svg:'<rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>',target:'svc-card-9'},
    {num:'10',name:'CMS & eCommerce Integration',tag:'Seamless front-end integration with WordPress, Shopify, Magento, and Headless APIs',label:'CMS & Ecom',svg:'<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>',target:'svc-card-10'}
  ];`;

if (servicesOldStart !== -1 && servicesOldEnd !== -1) {
  html = html.substring(0, servicesOldStart) + newServicesArrayHtml + html.substring(servicesOldEnd + 2);
}

// Write to indexfront1.html
fs.writeFileSync(path.join(__dirname, 'indexfront1.html'), html, 'utf8');

// WRITE ALSO TO index.html so both files are 100% updated!
fs.writeFileSync(path.join(__dirname, 'index.html'), html, 'utf8');

console.log('Successfully built clean front-end page in indexfront1.html AND index.html! Size:', html.length);
