const fs = require('fs');

// We will use indexflutter1.html or indexios1.html as the structural template because it already has the 5-card layout, beautiful orbital JS, accordion handlers, and styling.
let html = fs.readFileSync('indexios1.html', 'utf8');

// 1. Meta & Title
html = html.replace(
  /<title>.*?<\/title>/s,
  `<title>React Native App Development Services | Webspide</title>`
);

html = html.replace(
  /<meta name="description"\s+content=".*?">/s,
  `<meta name="description"\n        content="Build secure, scalable cross-platform apps with Webspide’s React Native development, UI/UX, migration, testing, deployment, and support services.">`
);

html = html.replace(
  /<meta name="keywords"\s+content=".*?">/s,
  `<meta name="keywords"\n        content="React Native app development services, React Native app development, React Native development services, React Native app development company, React Native mobile app development, React Native mobile application development, Custom React Native app development, Cross-platform app development, React Native app developers, Hire React Native developers, React Native UI/UX design, React Native migration services, React Native app testing, React Native app maintenance, React Native for web, React Native application development company">`
);

// 2. Hero Section
html = html.replace(
  /<div class="badge fade-in">.*?<\/div>/s,
  `<div class="badge fade-in">REACT NATIVE APP DEVELOPMENT SERVICES</div>`
);

html = html.replace(
  /<h1 class="fade-in delay-1">[\s\S]*?<\/h1>/s,
  `<h1 class="fade-in delay-1">
      <span class="grad">REACT NATIVE</span>
      <span class="grad">APP DEVELOPMENT COMPANY</span>
      <span class="outline"></span>
    </h1>`
);

html = html.replace(
  /<p class="hero-desc fade-in delay-2">[\s\S]*?<\/p>/s,
  `<p class="hero-desc fade-in delay-2">Webspide builds secure, scalable, and high-performing React Native applications for startups, enterprises, and global brands. Our React Native app development services cover strategy, UI/UX design, cross-platform engineering, API integration, testing, migration, deployment, and ongoing support. We create consistent Android and iOS experiences tailored to your users, operations, brand, and long-term growth.</p>`
);

// 3. Banner 1 & Banner 2 (Introduction to React Native App Development Services)
const newBanners = `<!-- BANNER 1 -->
<div class="banner banner-1 section-soft-gradient">
  <div class="b1-right-line"></div>
  <div class="b1-corner-dot tl"></div><div class="b1-corner-dot tr"></div><div class="b1-corner-dot bl"></div><div class="b1-corner-dot br"></div>
  <div class="b1-content">
    <div class="b1-header">
      <div class="b1-title gradient-heading">Elevate Your Business with<span>React Native App Development</span></div>
      <p class="b1-desc">React Native helps businesses create Android and iOS applications through a coordinated development approach. Webspide provides end-to-end React Native app development services covering planning, design, engineering, integrations, testing, deployment, migration, and maintenance. Every application is developed around user needs, platform expectations, security, performance, scalability, and measurable business outcomes.</p>
    </div>
    <div class="b1-cards">
      <div class="b1-card">
        <div class="b1-card-hdr">
          <div class="b1-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
          <div class="b1-card-title">Faster Time-to-Market</div>
        </div>
        <p class="b1-card-desc">React Native supports reusable components and coordinated development across Android and iOS. This helps teams validate features earlier, reduce duplicated work, accelerate testing, and move toward launch faster while maintaining consistent application behaviour and quality.</p>
      </div>
      <div class="b1-card">
        <div class="b1-card-hdr">
          <div class="b1-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><line x1="12" y1="6" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="18"/></svg></div>
          <div class="b1-card-title">Cost-Effective Development</div>
        </div>
        <p class="b1-card-desc">A shared development approach reduces the need to build every feature separately for Android and iOS. Businesses can control engineering, testing, and maintenance effort while still delivering reliable experiences tailored to each supported mobile platform.</p>
      </div>
      <div class="b1-card">
        <div class="b1-card-hdr">
          <div class="b1-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div>
          <div class="b1-card-title">Native-Like Performance</div>
        </div>
        <p class="b1-card-desc">Our developers combine React Native components with platform-specific capabilities where required. Efficient architecture, optimized rendering, secure integrations, and careful testing help applications deliver responsive interactions, dependable workflows, and smooth experiences across supported Android and iOS devices.</p>
      </div>
    </div>
  </div>
</div>

<!-- BANNER 2 -->
<div class="banner banner-2 section-soft-gradient">
  <div class="b2-content">
    <div class="b2-cards">
      <div class="b1-card">
        <div class="b1-card-hdr">
          <div class="b1-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/></svg></div>
          <div class="b2-card-title">Easy Maintenance &amp; Upgrades</div>
        </div>
        <p class="b1-card-desc">Reusable code, modular components, structured architecture, and clear documentation simplify future updates. Teams can introduce features, resolve issues, improve integrations, and support newer operating-system versions without maintaining completely separate application codebases for every platform or device.</p>
      </div>
      <div class="b1-card">
        <div class="b1-card-hdr">
          <div class="b1-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
          <div class="b2-card-title">Scalable &amp; Flexible Applications</div>
        </div>
        <p class="b1-card-desc">We plan React Native applications to accommodate growing users, transactions, features, integrations, and markets. Maintainable architecture and suitable cloud services help the product evolve without unnecessary redevelopment, performance instability, or fragmented experiences across supported platforms.</p>
      </div>
      <div class="b1-card">
        <div class="b1-card-hdr">
          <div class="b1-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
          <div class="b2-card-title">Experienced React Native Developers</div>
        </div>
        <p class="b1-card-desc">Our React Native developers understand JavaScript, TypeScript, native modules, APIs, databases, testing, security, and application architecture. This combined expertise helps us create dependable, maintainable products aligned with practical business requirements, user expectations, and long-term growth plans.</p>
      </div>
    </div>
  </div>
</div>`;

html = html.replace(/<!-- BANNER 1 -->[\s\S]*?<!-- BANNER 2 -->[\s\S]*?<\/div>\s*<\/div>/i, newBanners);

// 4. Section 3: OUR REACT NATIVE APP DEVELOPMENT SERVICES (5 Cards)
const newServicesSection = `<section class="services-section section-light" id="services">
  <div class="services-section-head">
    <div class="section-tag">What We Do</div>
    <h2 class="section-title gradient-heading">OUR REACT NATIVE APP DEVELOPMENT SERVICES</h2>
    <p class="section-sub" style="margin-bottom:0">End-to-end cross-platform mobile solutions engineered for performance, scalability, and seamless connectivity across Android and iOS.</p>
  </div>
  <br>

  <!-- CARD 01 — Custom React Native App Development -->
  <div class="service-card reveal" id="svc-card-1">
    <div class="card-text">
      <div class="card-num">01</div>
      <h2 class="card-title">Custom React Native App Development</h2><br>
      <p class="card-desc">Webspide provides custom React Native app development for businesses that need consistent Android and iOS applications built around specific users, workflows, and commercial goals. We begin by understanding your audience, required features, data, integrations, security expectations, and growth plans. This discovery helps us define a practical product structure instead of forcing your requirements into a generic application model.</p>
      <div class="card-desc-extra" data-extra>
        <p>Our React Native developers use JavaScript or TypeScript, reusable components, native modules, secure APIs, databases, notifications, payments, maps, analytics, and other suitable services to build dependable mobile products. We focus on responsive interfaces, clean code, accessibility, performance, and maintainability while adapting platform-specific behaviour where Android and iOS users expect different interactions.</p><br><p>From product planning and UI/UX design through development, testing, deployment, and support, our React Native app development services cover the complete delivery process. The finished application is designed to accommodate new users, features, integrations, markets, and transaction volumes as your business grows. Documentation and release guidance also support internal teams with administration, reporting, customer service, and future product planning. This structured approach supports predictable releases and responsible long-term application ownership.</p>
      </div>
      <br>
      <div class="card-btns">
        <a href="#contact" class="svc-btn-primary">Get Your Custom React Native App</a>
        <button type="button" class="svc-btn-link" data-readmore>Read More<svg class="rm-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></button>
      </div>
    </div>
    <div class="card-visual">
      <div class="illus-wrap float-anim-d2" style="max-width:340px; position:relative;">
        <img src="1.webp" alt="Custom React Native App Development" style="width: 100%; height: auto; display: block; mix-blend-mode: multiply; filter: contrast(1.05) saturate(1.1);">
      </div>
    </div>
  </div>

  <!-- CARD 02 — React Native UI/UX Design & Prototyping -->
  <div class="service-card reverse reveal" id="svc-card-2">
    <div class="card-text">
      <div class="card-num">02</div>
      <h2 class="card-title">React Native UI/UX Design<br><span>&amp; Prototyping</span></h2><br>
      <p class="card-desc">Successful cross-platform applications require clear journeys, familiar interactions, and interfaces suited to both Android and iOS. Webspide combines user research, information architecture, wireframing, prototyping, and visual design to create experiences aligned with your audience and business goals. We consider platform conventions, accessibility, content priorities, screen sizes, and user expectations before defining important workflows.</p>
      <div class="card-desc-extra" data-extra>
        <p>Our designers create low-fidelity wireframes, interactive prototypes, responsive layouts, reusable components, typography, colours, icons, and motion patterns. Prototypes help stakeholders understand how the application will behave before development begins. Feedback can be incorporated early, reducing uncertainty, unnecessary revisions, and implementation risks while preserving a consistent brand experience across supported mobile platforms.</p><br><p>Once the design direction is approved, we prepare developer-ready screens, component states, specifications, and interaction guidance. The completed React Native UI/UX supports smooth onboarding, confident task completion, stronger engagement, and platform-appropriate behaviour. We also plan empty states, errors, permissions, notifications, accessibility settings, and future features so the design remains practical as the product evolves and new releases are introduced. Clear design documentation helps developers reproduce approved interactions accurately and maintain consistency during future feature updates.</p>
      </div>
      <br>
      <div class="card-btns">
        <a href="#contact" class="svc-btn-primary">Enhance Your App UI/UX</a>
        <button type="button" class="svc-btn-link" data-readmore>Read More<svg class="rm-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></button>
      </div>
    </div>
    <div class="card-visual">
      <div class="illus-wrap float-anim-d2" style="max-width:340px; position:relative;">
        <img src="custom-web-development-front-end-services.webp" alt="React Native UI/UX Design" style="width: 100%; height: auto; display: block; mix-blend-mode: multiply; filter: contrast(1.05) saturate(1.1);">
      </div>
    </div>
  </div>

  <!-- CARD 03 — React Native for Web & Cross-Platform Apps -->
  <div class="service-card reveal" id="svc-card-3">
    <div class="card-text">
      <div class="card-num">03</div>
      <h2 class="card-title">React Native for Web<br><span>&amp; Cross-Platform Apps</span></h2><br>
      <p class="card-desc">Webspide uses React Native technologies to help businesses extend suitable product experiences across Android, iOS, and selected web environments. We evaluate your users, workflows, browser requirements, device capabilities, deployment needs, and existing systems before recommending a shared approach. This ensures platform expansion supports genuine operational and commercial objectives rather than creating unnecessary technical complexity.</p>
      <div class="card-desc-extra" data-extra>
        <p>Our developers reuse components and business logic where practical while adapting navigation, inputs, layouts, permissions, APIs, and platform behaviour where required. We focus on responsive design, performance, accessibility, security, and maintainability across supported environments. Platform-specific testing ensures that shared development does not compromise important user expectations or device capabilities.</p><br><p>Cross-platform React Native development can support customer applications, booking systems, commerce platforms, dashboards, communication tools, and internal business products. Our team manages architecture, design, engineering, integration, testing, deployment, and documentation. The completed solution provides a coordinated product foundation while remaining flexible enough for future platform-specific improvements, additional integrations, new users, and changing business requirements. Deployment guidance also explains platform differences, update responsibilities, and practical support requirements for long-term product management.</p>
      </div>
      <br>
      <div class="card-btns">
        <a href="#contact" class="svc-btn-primary">Build Cross-Platform Applications</a>
        <button type="button" class="svc-btn-link" data-readmore>Read More<svg class="rm-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></button>
      </div>
    </div>
    <div class="card-visual">
      <div class="illus-wrap float-anim-d2" style="max-width:340px; position:relative;">
        <img src="custom-web-development-back-end-services.webp" alt="React Native for Web & Cross-Platform Apps" style="width: 100%; height: auto; display: block; mix-blend-mode: multiply; filter: contrast(1.05) saturate(1.1);">
      </div>
    </div>
  </div>

  <!-- CARD 04 — React Native App Migration & Upgrade -->
  <div class="service-card reverse reveal" id="svc-card-4">
    <div class="card-text">
      <div class="card-num">04</div>
      <h2 class="card-title">React Native App Migration<br><span>&amp; Upgrade</span></h2><br>
      <p class="card-desc">Webspide helps businesses migrate native, hybrid, or outdated mobile applications to React Native and modernize existing React Native codebases. We begin with a technical assessment covering architecture, dependencies, integrations, data, security, performance, platform requirements, and current user journeys. This review identifies risks and defines a controlled migration or upgrade strategy for Android and iOS.</p>
      <div class="card-desc-extra" data-extra>
        <p>Our work can include rebuilding interfaces, replacing unsupported libraries, improving architecture, updating React Native versions, modernizing APIs, strengthening security, and optimizing performance. We preserve important functionality and data while introducing changes in manageable phases. Regression testing across supported devices helps reduce disruption for existing users and protects essential business workflows throughout the transition.</p><br><p>Migration and upgrade services can improve maintainability, consistency, speed, and readiness for future features. Before release, we complete testing, deployment preparation, rollback planning, and documentation. The modernized application provides a stronger technical foundation for continued support, new integrations, operating-system updates, and product growth without unnecessarily rebuilding reliable business logic that still serves users effectively. Release notes, user communication planning, and post-launch monitoring help teams manage significant changes with greater confidence.</p>
      </div>
      <br>
      <div class="card-btns">
        <a href="#contact" class="svc-btn-primary">Migrate Your Application</a>
        <button type="button" class="svc-btn-link" data-readmore>Read More<svg class="rm-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></button>
      </div>
    </div>
    <div class="card-visual">
      <div class="illus-wrap float-anim-d2" style="max-width:340px; position:relative;">
        <img src="custom-cms-development-services.webp-artguru.webp" alt="React Native App Migration & Upgrade" style="width: 100%; height: auto; display: block; mix-blend-mode: multiply; filter: contrast(1.05) saturate(1.1);">
      </div>
    </div>
  </div>

  <!-- CARD 05 — React Native App Testing & Maintenance -->
  <div class="service-card reveal" id="svc-card-5">
    <div class="card-text">
      <div class="card-num">05</div>
      <h2 class="card-title">React Native App Testing<br><span>&amp; Maintenance</span></h2><br>
      <p class="card-desc">Webspide provides React Native app testing and maintenance to keep Android and iOS applications stable, secure, and compatible throughout their lifecycle. We review supported devices, operating-system versions, user roles, integrations, critical workflows, and release priorities to create a practical quality plan. This ensures important scenarios receive appropriate coverage before and after launch.</p>
      <div class="card-desc-extra" data-extra>
        <p>Our testing can include functional, usability, compatibility, API, security, performance, and regression checks. We combine manual and automated methods where suitable, document defects clearly, and retest completed fixes. Maintenance can include dependency updates, crash resolution, platform compatibility work, performance tuning, security improvements, and adjustments for changing third-party services.</p><br><p>After release, ongoing monitoring and planned updates help the application respond to operating-system changes, framework releases, user feedback, and evolving business needs. Clear reports keep stakeholders informed about completed work, identified risks, and recommended priorities. Long-term support provides continuity for feature enhancements, integration changes, technical modernization, and future releases without repeatedly rebuilding project knowledge. Support priorities, release schedules, response procedures, and ownership responsibilities are documented to create a more dependable maintenance partnership.</p>
      </div>
      <br>
      <div class="card-btns">
        <a href="#contact" class="svc-btn-primary">Get Reliable App Maintenance</a>
        <button type="button" class="svc-btn-link" data-readmore>Read More<svg class="rm-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></button>
      </div>
    </div>
    <div class="card-visual">
      <div class="illus-wrap float-anim-d2" style="max-width:340px; position:relative;">
        <img src="custom-web-development-ecommerce-platform.webp" alt="React Native App Testing & Maintenance" style="width: 100%; height: auto; display: block; mix-blend-mode: multiply; filter: contrast(1.05) saturate(1.1);">
      </div>
    </div>
  </div>
</section>`;

html = html.replace(/<section class="services-section[\s\S]*?<\/section>/i, newServicesSection);

// 5. Why Choose Us Section
html = html.replace(
  /Why Choose Webspide for[\s\S]*?<\/h2>/i,
  `Why Choose Webspide for React Native App Development Services?</h2>`
);

html = html.replace(
  /<p class="left-desc">[\s\S]*?<\/p>/i,
  `<p class="left-desc">Webspide combines React Native strategy, user-focused design, cross-platform engineering, and transparent project management to create dependable mobile applications for global businesses. Our React Native app development services prioritize quality, security, performance, communication, scalability, and long-term value. From initial planning through deployment and support, every stage is managed around your users, operations, technical needs, brand, and growth objectives.</p>`
);

// Why Choose Us Feature Cards (6 items)
const newWhyChooseCards = `<div class="feature-row">
        <div class="num">01</div>
        <div class="connector"><div class="timeline-dot"></div></div>
        <div class="feature-body">
          <h3 class="feature-title">Skilled React Native Developers</h3>
          <p class="feature-desc">Our developers work with React Native, JavaScript, TypeScript, native modules, APIs, databases, cloud services, testing tools, and modern mobile architecture. This combined expertise helps us solve design, technical, and operational requirements as one connected product. Clients receive maintainable applications built for dependable performance, efficient integration, consistent platform behaviour, and future expansion across users, features, devices, and markets.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">02</div>
        <div class="connector"><div class="timeline-dot"></div></div>
        <div class="feature-body">
          <h3 class="feature-title">Agile &amp; Transparent Development</h3>
          <p class="feature-desc">We divide projects into manageable phases with clear priorities, milestones, reviews, and approval points. Regular communication gives stakeholders visibility into progress, decisions, risks, and upcoming work. This agile approach supports practical feedback, controlled changes, and dependable delivery while keeping the React Native application aligned with business requirements, user expectations, budgets, and agreed outcomes throughout development.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">03</div>
        <div class="connector"><div class="timeline-dot"></div></div>
        <div class="feature-body">
          <h3 class="feature-title">User-Centric &amp; Engaging UI/UX</h3>
          <p class="feature-desc">Our designers create intuitive, accessible, and brand-aligned React Native experiences using clear journeys, reusable components, smooth interactions, and platform-aware layouts. Research, wireframing, prototyping, and stakeholder reviews guide important decisions. The resulting interface helps users understand features, complete tasks confidently, and enjoy consistent experiences across Android and iOS while supporting stronger engagement, satisfaction, and retention across diverse customer journeys.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">04</div>
        <div class="connector"><div class="timeline-dot"></div></div>
        <div class="feature-body">
          <h3 class="feature-title">Scalable &amp; Future-Ready Applications</h3>
          <p class="feature-desc">We plan React Native applications around modular architecture, reusable components, secure integrations, and maintainable code. This foundation helps the product accommodate increasing users, transactions, features, services, and markets without unnecessary redevelopment. Platform-aware engineering and structured documentation also make future updates, migrations, team collaboration, and operating-system compatibility easier to manage as business requirements evolve across changing operational environments.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">05</div>
        <div class="connector"><div class="timeline-dot"></div></div>
        <div class="feature-body">
          <h3 class="feature-title">Robust Security &amp; Quality Assurance</h3>
          <p class="feature-desc">Security and quality are considered during architecture, coding, integration, testing, deployment, and maintenance. We implement suitable authentication, encryption, secure storage, validation, permissions, and API protections while testing critical workflows across representative devices. This structured approach helps protect users, business information, and transactions while supporting reliable performance, compliance awareness, and responsible application growth across supported mobile platforms.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">06</div>
        <div class="connector"><div class="timeline-dot"></div></div>
        <div class="feature-body">
          <h3 class="feature-title">Dedicated Post-Launch Support</h3>
          <p class="feature-desc">Our involvement can continue after launch through crash monitoring, bug fixes, framework updates, security improvements, performance tuning, and feature enhancements. We help clients keep React Native applications dependable as platforms, libraries, integrations, and user expectations change. Long-term support provides continuity, faster issue resolution, and a knowledgeable technical partner for future releases, modernization, scaling, and product growth.</p>
        </div>
      </div>`;

html = html.replace(/<div class="feature-row">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/i, newWhyChooseCards);

// 6. How We Work Section (Workflow)
html = html.replace(
  /<h2 class="section-title gradient-heading">Our [\s\S]*? Process<\/h2>/i,
  `<h2 class="section-title gradient-heading">Our React Native App Development Workflow Process</h2>`
);

html = html.replace(
  /<p class="hww-sub-desc">[\s\S]*?<\/p>/i,
  `<p class="hww-sub-desc">Our React Native app development workflow combines discovery, planning, UI/UX, cross-platform engineering, testing, deployment, and continuous improvement to efficiently deliver secure, scalable mobile products.</p>`
);

// 7. SERVICES JS Array & Mobile Orbit Cards for React Native
const newServicesJs = `const SERVICES=[
    {num:'01',name:'Custom React Native App',tag:'Tailored cross-platform mobile apps for Android & iOS',label:'Custom App',svg:'<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>',target:'svc-card-1'},
    {num:'02',name:'React Native UI/UX Design',tag:'Platform-aware, brand-aligned interfaces & wireframes',label:'UI/UX Design',svg:'<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.58 7.58"/><circle cx="11" cy="11" r="2"/>',target:'svc-card-2'},
    {num:'03',name:'React Native for Web & Mobile',tag:'Extending product reach across Android, iOS, & Web',label:'Cross-Platform',svg:'<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',target:'svc-card-3'},
    {num:'04',name:'React Native App Migration',tag:'Modernizing legacy native or hybrid apps to React Native',label:'App Migration',svg:'<polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>',target:'svc-card-4'},
    {num:'05',name:'Testing & Maintenance',tag:'Ongoing QA, OS compatibility, security & bug fixes',label:'Testing & QA',svg:'<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',target:'svc-card-5'}
  ];`;

const newMobileCardsHtml = `<div class="orbit-cards-mobile">
  <a href="#svc-card-1" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg></div><div><div class="orb-card-name">Custom React Native</div><div class="orb-card-tag">Cross-platform build</div></div></a>
  <a href="#svc-card-2" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.58 7.58"/><circle cx="11" cy="11" r="2"/></svg></div><div><div class="orb-card-name">React Native UI/UX</div><div class="orb-card-tag">Android & iOS guidelines</div></div></a>
  <a href="#svc-card-3" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div><div><div class="orb-card-name">Cross-Platform Web</div><div class="orb-card-tag">Shared codebase expansion</div></div></a>
  <a href="#svc-card-4" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/></svg></div><div><div class="orb-card-name">App Migration</div><div class="orb-card-tag">Modernizing legacy apps</div></div></a>
  <a href="#svc-card-5" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><div><div class="orb-card-name">Testing & Maintenance</div><div class="orb-card-tag">Continuous support & QA</div></div></a>
</div>`;

html = html.replace(/const SERVICES\s*=\s*\[[\s\S]*?\];/i, newServicesJs);
html = html.replace(/<div class="orbit-cards-mobile">[\s\S]*?<\/div>/i, newMobileCardsHtml);

// Global sweeping replacements for any remaining web references
html = html.replace(/Custom Web Development Services/g, 'React Native App Development Services');
html = html.replace(/Custom Web Development Service/g, 'React Native App Development Service');

fs.writeFileSync('indexreact1.html', html, 'utf8');
console.log('Successfully updated indexreact1.html with full React Native text content!');
