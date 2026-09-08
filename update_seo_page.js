const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, 'indexapp1.html');
const targetPath = path.join(__dirname, 'indexseo1.html');

let html = fs.readFileSync(templatePath, 'utf8');

// 1. Meta / Head Title & Meta tags
html = html.replace(
  /<title>.*?<\/title>/s,
  '<title>Search Engine Optimization Services | Webspide</title>'
);

html = html.replace(
  /<meta name="description"\s+content=".*?">/s,
  '<meta name="description"\n        content="Improve rankings, organic traffic, and conversions with Webspide’s technical SEO, content, keyword research, link building, local, and ecommerce SEO services.">'
);

html = html.replace(
  /<meta name="keywords"\s+content=".*?">/s,
  '<meta name="keywords"\n        content="SEO services, SEO company, SEO agency, Search engine optimization services, Search engine optimization company, Search engine optimization agency, Professional SEO services, Technical SEO services, On-page SEO services, Local SEO services, Ecommerce SEO services, SEO content writing services, Link-building services, International SEO services, SEO consulting services">'
);

// 2. Hero Section
html = html.replace(
  /<div class="badge fade-in">.*?<\/div>/s,
  '<div class="badge fade-in">Search Engine Optimization Services</div>'
);

html = html.replace(
  /<h1 class="fade-in delay-1">.*?<\/h1>/s,
  `<h1 class="fade-in delay-1">
      <span class="grad">SEARCH ENGINE</span>
      <span class="grad">OPTIMIZATION</span>
      <span class="outline">Organic Growth</span>
    </h1>`
);

html = html.replace(
  /<p class="hero-desc fade-in delay-2">.*?<\/p>/s,
  '<p class="hero-desc fade-in delay-2">Webspide provides strategic search engine optimization services for startups, enterprises, ecommerce brands, and global organizations. Our SEO specialists improve technical performance, content relevance, search visibility, and website authority through research-driven campaigns. We create sustainable strategies designed to attract qualified organic traffic, strengthen digital credibility, and support measurable business growth across competitive markets.</p>'
);

// 3. Orbit Cards Mobile (6 items)
const mobileOrbitCards = `<div class="orbit-cards-mobile">
  <a href="#svc-card-1" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div><div><div class="orb-card-name">Keywords & Strategy</div><div class="orb-card-tag">Intent mapping & research</div></div></a>
  <a href="#svc-card-2" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><div><div class="orb-card-name">On-Page SEO</div><div class="orb-card-tag">Titles, meta & structure</div></div></a>
  <a href="#svc-card-3" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg></div><div><div class="orb-card-name">Technical SEO</div><div class="orb-card-tag">Crawlability & Web Vitals</div></div></a>
  <a href="#svc-card-4" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></div><div><div class="orb-card-name">SEO Content</div><div class="orb-card-tag">Search-optimized writing</div></div></a>
  <a href="#svc-card-5" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></div><div><div class="orb-card-name">Link Building</div><div class="orb-card-tag">Authority & backlinks</div></div></a>
  <a href="#svc-card-6" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div><div><div class="orb-card-name">Local & Ecom SEO</div><div class="orb-card-tag">Map pack & category growth</div></div></a>
</div>`;

html = html.replace(/<div class="orbit-cards-mobile">.*?<\/div>\s*<!-- BANNER 1 -->/s, mobileOrbitCards + '\n\n<!-- BANNER 1 -->');

// 4. Banner 1 & Banner 2 replacement
const bannersFullContent = `<!-- BANNER 1 -->
<div class="banner banner-1 section-soft-gradient">
  <div class="b1-right-line"></div>
  <div class="b1-corner-dot tl"></div><div class="b1-corner-dot tr"></div><div class="b1-corner-dot bl"></div><div class="b1-corner-dot br"></div>
  <div class="b1-content">
    <div class="b1-header">
      <div class="b1-title gradient-heading">Drive Traffic and Increase Conversions with<span>Our SEO Services</span></div>
      <p class="b1-desc">Strong search visibility helps businesses reach customers at the exact moment they are researching products, services, or solutions. Webspide delivers comprehensive SEO services covering keyword strategy, on-page optimization, technical SEO, content, authority building, local visibility, ecommerce growth, analytics, and continuous improvement for sustainable organic performance.</p>
    </div>
    <div class="b1-cards">
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div><div class="b1-card-title">Data-Driven SEO Strategies</div></div><p class="b1-card-desc">We combine keyword research, competitor analysis, search-intent mapping, website data, and performance insights to create focused SEO strategies. Every recommendation is prioritized around relevance, opportunity, user needs, technical feasibility, wider business objectives, and measurable campaign success.</p></div>
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></div><div class="b1-card-title">Enhanced Online Visibility</div></div><p class="b1-card-desc">Our SEO specialists improve the signals that help search engines discover, understand, and present your website. Better technical foundations, content relevance, internal linking, and authority can increase qualified visibility across important services, products, topics, and target markets.</p></div>
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div><div class="b1-card-title">Full-Spectrum SEO Solutions</div></div><p class="b1-card-desc">Webspide manages the connected elements of organic search, including technical audits, on-page optimization, content development, link earning, local SEO, ecommerce SEO, and reporting. This integrated approach prevents isolated changes from limiting overall search performance and growth.</p></div>
    </div>
  </div>
</div>

<!-- BANNER 2 -->
<div class="banner banner-2 section-soft-gradient">
  <div class="b2-content">
    <div class="b2-cards">
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div><div class="b2-card-title">Local &amp; Global Reach</div></div><p class="b1-card-desc">We develop location-focused and international SEO strategies according to your audience, service areas, languages, and markets. Our work can support local discovery, multi-location visibility, country targeting, regional content, and broader organic growth across international search environments.</p></div>
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><polyline points="3 20 21 20"/></svg></div><div class="b2-card-title">Transparent Analytics &amp; Reporting</div></div><p class="b1-card-desc">Clear reporting connects SEO activity with meaningful performance indicators such as visibility, rankings, organic traffic, engagement, leads, and conversions. We explain completed work, emerging opportunities, technical concerns, and recommended priorities so stakeholders can make informed decisions.</p></div>
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><div class="b2-card-title">Sustainable SEO Growth</div></div><p class="b1-card-desc">Our approach prioritizes useful content, sound technical practices, ethical promotion, and continuous improvement rather than short-term manipulation. This creates stronger foundations for sustainable rankings, qualified traffic, brand credibility, and long-term digital growth across changing search environments.</p></div>
    </div>
  </div>
</div>`;

html = html.replace(/<!-- BANNER 1 -->.*?(?=<!-- ═══════════════════════════════════════════|\s*<section class="services-section)/s, bannersFullContent + '\n\n\n');

// Helper function to generate SVG visuals for service cards
function getSvgVisual(num) {
  const imgs = {
    '01': 'search-engine-optimization-services-keyword-research-seo-strategy.webp',
    '02': 'search-engine-optimization-services-on-page-seo.webp',
    '03': 'search-engine-optimization-services-technical-seo.webp',
    '04': 'search-engine-optimization-services-seo-content-writing-optimization.webp',
    '05': 'search-engine-optimization-services-link-building-off-page-seo.webp',
    '06': 'search-engine-optimization-services-local-seo.webp',
    '07': 'search-engine-optimization-services-ecommerce-seo.webp',
    '08': 'search-engine-optimization-services-seo-analytics-reporting.webp'
  };
  const alts = {
    '01': 'Keyword Research & SEO Strategy',
    '02': 'On-Page SEO',
    '03': 'Technical SEO',
    '04': 'SEO Content Writing & Optimization',
    '05': 'Link Building & Off-Page SEO',
    '06': 'Local SEO',
    '07': 'Ecommerce SEO',
    '08': 'SEO Analytics & Reporting'
  };
  return `<img src="Images/Webspide-Images_/Digital Marketting/search-engine-optimization-services/Service/${imgs[num]}" alt="${alts[num]}" style="width:100%;height:auto;display:block;border:none;outline:none;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);background:transparent;">`;
}

// 5. Services Section Header & 8 Cards
const servicesData = [
  {
    num: '01',
    title: 'Keyword Research &<br><span>SEO Strategy</span>',
    desc: 'Effective search engine optimization begins with understanding what potential customers search for, why they search, and which pages should meet those needs. Webspide researches commercial, informational, local, branded, and long-tail keywords relevant to your services, products, markets, and audience. We also study competitors, search-result patterns, and current website performance to identify realistic opportunities.',
    p1: 'Our specialists group keywords by intent and map them to suitable existing or planned pages. This prevents several pages from competing for the same topic and helps content teams build clearer website structures. We prioritize opportunities according to relevance, business value, competition, conversion potential, and the effort required to improve visibility.',
    p2: 'The completed SEO strategy guides on-page optimization, content creation, internal linking, technical improvements, and authority-building activities. Rather than treating keywords as isolated phrases, we use them to shape useful experiences that answer real questions and support customer decisions. Ongoing performance reviews allow the strategy to evolve as rankings, competitors, search behavior, products, and business priorities change. We also document priority pages, supporting topics, expected intent, and recommended optimization actions for implementation.',
    cta: 'Build Your SEO Strategy →',
    reverse: false
  },
  {
    num: '02',
    title: 'On-Page<br><span>SEO</span>',
    desc: 'Webspide improves individual webpages so search engines and users can understand their purpose quickly. Our on-page SEO work covers titles, meta descriptions, headings, URLs, body content, images, internal links, calls to action, and structured information. We review each page against its target search intent, audience needs, and role within the wider website.',
    p1: 'We refine keyword placement naturally without forcing repetitive phrases into the copy. Content gaps, weak introductions, duplicate topics, unclear hierarchy, and poor linking are addressed where necessary. We also improve page readability, semantic structure, image information, and conversion paths so visitors can find answers and move toward relevant actions with less friction.',
    p2: 'On-page optimization is coordinated with technical SEO and content strategy because strong pages depend on crawlability, speed, mobile usability, and website architecture. Our recommendations are documented clearly and implemented according to agreed priorities. The result is a more organized, relevant, and user-friendly website that supports stronger organic visibility, engagement, click-through rates, and lead or sales opportunities. Regular reviews help maintain consistency as new pages, services, products, campaigns, and editorial updates are published.',
    cta: 'Optimize Your Website Pages →',
    reverse: true
  },
  {
    num: '03',
    title: 'Technical<br><span>SEO</span>',
    desc: 'Technical SEO ensures that search engines can efficiently access, interpret, and index the right website pages. Webspide conducts structured audits covering crawlability, indexation, website architecture, canonicals, redirects, XML sitemaps, robots directives, broken links, duplicate pages, rendering, structured data, mobile behavior, security, and performance. We prioritize issues according to their likely impact and implementation risk.',
    p1: 'Our specialists work with developers and content teams to resolve technical barriers without disrupting important functionality. Improvements may include correcting redirect chains, consolidating duplicate URLs, strengthening internal linking, fixing status errors, improving page templates, optimizing Core Web Vitals, and clarifying signals across multilingual, ecommerce, or JavaScript-driven websites.',
    p2: 'After implementation, we validate changes through crawling, analytics, search-console data, and representative page checks. Technical SEO is monitored continuously because websites evolve through releases, plugins, migrations, products, and content updates. A stable technical foundation helps protect visibility, improve user experience, support efficient crawling, and give high-quality content a better opportunity to perform across competitive search results. We also document resolved issues, remaining dependencies, monitoring priorities, and developer guidance for future releases.',
    cta: 'Improve Your Technical SEO →',
    reverse: false
  },
  {
    num: '04',
    title: 'SEO Content Writing &<br><span>Optimization</span>',
    desc: 'Webspide creates and improves search-focused content that answers user questions while supporting business goals. Our SEO content writing services can cover service pages, product categories, landing pages, articles, guides, location pages, and supporting resources. Every assignment begins with keyword intent, audience research, competitor review, content purpose, and the action readers should take.',
    p1: 'Writers structure content with clear headings, useful explanations, natural keyword placement, internal links, and appropriate calls to action. We avoid empty keyword repetition and focus instead on clarity, originality, topical coverage, and practical value. Existing pages can be refreshed to improve accuracy, readability, relevance, organization, and alignment with current products or services.',
    p2: 'Content performance is reviewed through visibility, rankings, engagement, conversions, and internal-linking opportunities. Insights from real search behavior can guide future updates and new topics. By combining editorial quality with SEO strategy, we help businesses build content libraries that attract qualified visitors, demonstrate expertise, support customer decisions, and strengthen long-term organic authority across important commercial and informational searches. Editorial calendars and content briefs can also support consistent publishing across priority topics and customer journey stages.',
    cta: 'Create SEO-Optimized Content →',
    reverse: true
  },
  {
    num: '05',
    title: 'Link Building &<br><span>Off-Page SEO</span>',
    desc: 'Webspide develops ethical off-page SEO strategies designed to strengthen website authority, brand discovery, and referral opportunities. We begin by reviewing your backlink profile, competitors, industry landscape, existing relationships, and content assets. This helps identify relevant opportunities instead of pursuing large volumes of low-quality links that may provide little value or create unnecessary risk.',
    p1: 'Our activities can include digital outreach, guest contributions, resource promotion, local citations, partner mentions, unlinked-brand reclamation, and content-led link earning. Prospects are evaluated for relevance, credibility, audience fit, editorial quality, and placement context. We do not rely on manipulative shortcuts or promise unrealistic numbers of backlinks from unrelated websites.',
    p2: 'Off-page performance is monitored through acquired links, referral traffic, authority signals, brand mentions, and the organic pages they support. We also identify harmful or suspicious patterns requiring review. A disciplined link-building approach complements strong content and technical SEO, helping search engines and users recognize your website as a more credible resource within its industry, market, and subject areas. Campaigns are documented transparently so clients understand outreach priorities, earned placements, limitations, and next opportunities.',
    cta: 'Strengthen Your Website Authority →',
    reverse: false
  },
  {
    num: '06',
    title: 'Local<br><span>SEO</span>',
    desc: 'Webspide helps location-based businesses improve visibility for customers searching within specific cities, regions, and service areas. Our local SEO services begin with an assessment of your website, business information, location pages, local competitors, reviews, citations, and map presence. We then create a strategy suited to single-location businesses, service-area companies, or multi-location organizations.',
    p1: 'Optimization may include business-profile improvements, consistent names, addresses and phone details, local keyword mapping, location-page content, structured data, review workflows, map information, and relevant citation building. We also strengthen internal links and website signals that help each location communicate its services, coverage, and value clearly to nearby customers.',
    p2: 'Local performance is reviewed through map visibility, local rankings, website visits, enquiries, calls, direction requests, and conversion data where available. Strategies are refined according to competition, seasonality, reviews, and changing service areas. The result is a more consistent local presence that helps qualified customers discover, evaluate, and contact your business across search and map experiences. We also support location expansion planning by defining scalable page structures, content standards, and listing requirements.',
    cta: 'Improve Your Local Visibility →',
    reverse: true
  },
  {
    num: '07',
    title: 'Ecommerce<br><span>SEO</span>',
    desc: 'Webspide provides ecommerce SEO services for online stores seeking stronger product discovery, qualified organic traffic, and sustainable revenue growth. We review category structures, product pages, filters, faceted navigation, internal search, duplicate URLs, inventory behavior, structured data, images, mobile experience, and website performance. This reveals technical and content barriers affecting both shoppers and search engines.',
    p1: 'Our specialists optimize category targeting, product information, metadata, internal links, navigation, canonicals, indexation controls, and ecommerce schema where appropriate. We identify keyword opportunities across product types, attributes, brands, use cases, and customer questions. Improvements are planned carefully to support usability and conversion without creating unnecessary indexed combinations or duplicate content.',
    p2: 'Performance is measured through category and product visibility, organic sessions, revenue, conversions, and search demand. We coordinate SEO with merchandising, development, and content teams because store changes can affect large numbers of URLs. A structured ecommerce strategy helps customers find relevant products more easily while giving search engines clearer signals about your catalog, categories, availability, and commercial priorities. We also monitor seasonal demand, discontinued products, pagination, and inventory changes that may influence organic performance.',
    cta: 'Grow Your Ecommerce Traffic →',
    reverse: false
  },
  {
    num: '08',
    title: 'SEO Analytics &<br><span>Reporting</span>',
    desc: 'Webspide turns SEO data into clear information that supports practical decisions. We establish reporting around agreed business goals and track relevant indicators such as organic visibility, keyword rankings, traffic, landing-page engagement, leads, sales, conversions, technical health, content performance, and backlink development. Measurement is adapted to your website, market, and available tracking systems.',
    p1: 'Our reports explain what work was completed, what changed, which pages or topics improved, and where additional attention is required. We review trends rather than relying on isolated daily movements, and we separate meaningful progress from normal ranking fluctuations. Where tracking limitations exist, we identify them clearly and recommend suitable improvements.',
    p2: 'Analytics support continuous optimization by revealing content gaps, underperforming pages, conversion issues, technical problems, and emerging search opportunities. Regular reviews help prioritize the next actions according to likely impact and resources. Transparent reporting gives stakeholders a clearer understanding of campaign progress, supports accountability, and keeps SEO activity connected to broader marketing, customer-acquisition, and business-growth objectives. Custom dashboards and scheduled reviews can provide different stakeholders with the level of detail they require.',
    cta: 'Get Detailed SEO Reporting →',
    reverse: true
  }
];

let serviceCardsHtml = `<section class="services-section section-light" id="services">
  <div class="services-section-head">
    <div class="section-tag">What We Do</div>
    <h2 class="section-title gradient-heading">Our Search Engine Optimization Services</h2>
    <p class="section-sub" style="margin-bottom:0">End-to-end SEO solutions engineered for technical perfection, content relevance, search authority, and sustainable organic traffic growth.</p>
  </div>
  <br>\n`;

servicesData.forEach((item, index) => {
  const cardIndex = index + 1;
  const revClass = item.reverse ? ' reverse' : '';
  const animClass = index % 2 === 0 ? 'float-anim-d' : 'float-anim';
  
  serviceCardsHtml += `  <!-- CARD ${item.num} — ${item.title.replace('<br>', ' ').replace(/<\/?span>/g, '')} -->
  <div class="service-card${revClass} reveal" id="svc-card-${cardIndex}">
    <div class="card-text">
      <div class="card-num">${item.num}</div>
      <h2 class="card-title">${item.title}</h2><br>
      <p class="card-desc">${item.desc}</p>
      <div class="card-desc-extra" data-extra>
        <p>${item.p1}</p><br>
        <p>${item.p2}</p>
      </div>
      <br>
      <div class="card-btns">
        <a href="#contact" class="svc-btn-primary">${item.cta}</a>
        <button type="button" class="svc-btn-link" data-readmore>Read More<svg class="rm-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></button>
      </div>
    </div>
    <div class="card-visual">
      <div class="illus-wrap ${animClass}" style="max-width:340px; position:relative;">
        ${getSvgVisual(item.num)}
      </div>
    </div>
  </div>\n\n`;
});

serviceCardsHtml += `</section>`;

html = html.replace(/<section class="services-section section-light" id="services">.*?<\/section>/s, serviceCardsHtml);

// 6. Tech stack section header
html = html.replace(
  /<div class="ts-header">.*?<\/div>/s,
  `<div class="ts-header">
      <div class="ts-badge">Tools & Software</div>
      <h2 class="gradient-heading">Our SEO <span>Tools & Platforms</span></h2>
      <h3>for Search Engine Optimization Services</h3>
      <p>We leverage industry-leading search analytics, audit tools, keyword research engines, and performance trackers to drive data-led optimization.</p>
    </div>`
);

// 7. Why Choose Us Section
const whyChooseHtml = `<div class="sections section-soft-gradient">
  <div class="left">
    <br>
    <div class="villan-badge">Why Choose Webspide</div>
    <div class="left-title gradient-heading">Why Choose<br>Webspide For<br><span class="purple">Search Engine<br>Optimization<br>Services?</span></div>
    <div class="title-underline"></div>
    <p class="left-desc">Webspide combines technical expertise, content strategy, transparent communication, and continuous optimization to deliver SEO services for international businesses. We focus on sustainable growth rather than short-term ranking promises. From audits and implementation through reporting and refinement, every campaign is aligned with your website, audience, competition, resources, commercial priorities, and long-term digital goals across diverse international markets.</p>
    <div class="illustration">
      <div class="gear-left">⚙</div>
      <div class="gear-sm">⚙</div>
      <div class="code-tag">&lt;/&gt;</div>
      <div class="laptop">
        <div class="laptop-screen">
          <div class="screen-code"><span>function</span> <em>initSEO</em>() {<br>&nbsp;&nbsp;<span>const</span> audit = [];<br>&nbsp;&nbsp;<em>optimizeSearch</em>(audit);<br>&nbsp;&nbsp;<span>return</span> audit;<br>}</div>
        </div>
        <div class="laptop-base"></div>
        <div class="laptop-bottom"></div>
      </div>
    </div>
  </div>
  <div class="right">
    <div class="process-timeline">
      <div class="feature-row">
        <div class="num">01</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Experienced SEO <span class="accent">Specialists</span></div>
          <p class="feature-desc">Our SEO specialists understand technical optimization, search intent, content strategy, analytics, local visibility, ecommerce structures, and authority development. This connected expertise helps us identify the issues and opportunities that matter most. Clients receive practical recommendations shaped around their website, industry, audience, and resources rather than generic checklists applied without context.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">02</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Customized SEO <span class="accent">Strategies</span></div>
          <p class="feature-desc">Every business has different products, customers, markets, competitors, and website challenges. We develop tailored SEO strategies based on research, technical findings, content gaps, current visibility, and commercial priorities. This focused approach helps direct effort toward the pages and opportunities most likely to support qualified traffic, leads, sales, and sustainable organic growth.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">03</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Transparent Reporting &amp; <span class="accent">Communication</span></div>
          <p class="feature-desc">We explain completed work, performance changes, limitations, risks, and recommended actions in clear language. Reports connect SEO activity with relevant indicators such as visibility, traffic, engagement, leads, and conversions. Regular communication keeps stakeholders informed and supports faster decisions throughout every campaign.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">04</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Ethical &amp; Sustainable <span class="accent">SEO Practices</span></div>
          <p class="feature-desc">Webspide follows responsible SEO practices centered on useful content, technically sound websites, relevant promotion, and genuine user value. We avoid manipulative shortcuts that may create avoidable risk or temporary results, supporting stronger credibility and more stable organic growth over time.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">05</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Complete SEO <span class="accent">Service Coverage</span></div>
          <p class="feature-desc">Our services connect keyword research, technical SEO, on-page optimization, content, local visibility, ecommerce SEO, authority building, and analytics within one coordinated strategy. Managing these areas together reduces gaps between teams and recommendations, giving clients a clearer roadmap and consistent implementation standards.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">06</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Long-Term Optimization <span class="accent">&amp; Support</span></div>
          <p class="feature-desc">SEO requires continued attention as competitors, content, search behavior, algorithms, and websites change. We monitor performance, review new opportunities, resolve emerging issues, and refine priorities over time. This long-term partnership helps protect earlier improvements and keeps the strategy connected to business goals.</p>
        </div>
      </div>
    </div>
  </div>
</div>`;

// Replace Why Choose Us section cleanly
html = html.replace(/(?:<!-- WHY CHOOSE US -->\s*)?<div class="sections section-soft-gradient">.*?<\/div>\s*<\/div>\s*<\/div>\s*<section class="how-we-work"/s, `<!-- WHY CHOOSE US -->\n` + whyChooseHtml + `\n\n\n<section class="how-we-work"`);

// 8. How We Work Section
const workflowSection = `<section class="how-we-work" id="how-we-work">
  <div class="hww-header">
    <div class="hww-badge-top">HOW WE WORK</div>
    <h2 class="section-title gradient-heading">Our Search Engine Optimization Workflow Process</h2>
    <div class="hww-sub-top">Our SEO workflow combines research, technical analysis, content optimization, authority development, measurement, and continuous improvement to build sustainable organic visibility, qualified traffic, and business growth.</div>
  </div>
  <div class="hww-wrap">
    <div id="hwwCard" class="hww-card"></div>
  </div>
</section>`;

html = html.replace(/<section class="how-we-work" id="how-we-work">.*?<\/section>/s, workflowSection);

// 9. Contact section head
const contactHead = `<section class="contact-section section-light" id="contact">
  <div class="section-head" style="margin-bottom:2.5rem">
    <div class="section-tag">Get In Touch</div>
    <h2 class="section-title gradient-heading">Ready to Improve Your Organic Search Performance?</h2>
    <p class="section-sub">Tell us about your website, target markets, current SEO challenges, and business goals. Our team will review your requirements and recommend a practical search engine optimization approach focused on qualified visibility, traffic, and sustainable growth.</p>
  </div>`;

html = html.replace(/<section class="contact-section section-light" id="contact">.*?<div class="contact-wrap">/s, contactHead + '\n  <div class="contact-wrap">');

// 10. JavaScript Services Array (8 items)
const jsServices = `  const SERVICES=[
    {num:'01',name:'Keyword Research & SEO Strategy',tag:'Commercial, informational, local, branded, and long-tail keyword intent mapping',label:'Keywords & Strategy',svg:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',target:'svc-card-1'},
    {num:'02',name:'On-Page SEO',tag:'Page titles, meta tags, headings, URLs, body content, images, and semantic hierarchy',label:'On-Page SEO',svg:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',target:'svc-card-2'},
    {num:'03',name:'Technical SEO',tag:'Crawlability, indexation, sitemaps, Core Web Vitals, redirects, and schema markup',label:'Technical SEO',svg:'<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>',target:'svc-card-3'},
    {num:'04',name:'SEO Content Writing & Optimization',tag:'Search-intent copywriting, article refresh, landing page content, and guide creation',label:'SEO Content',svg:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>',target:'svc-card-4'},
    {num:'05',name:'Link Building & Off-Page SEO',tag:'Ethical digital outreach, unlinked brand reclamation, resource links, and authority',label:'Link Building',svg:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',target:'svc-card-5'},
    {num:'06',name:'Local SEO',tag:'Map pack optimization, NAP consistency, local citation building, and location pages',label:'Local SEO',svg:'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',target:'svc-card-6'},
    {num:'07',name:'Ecommerce SEO',tag:'Category page optimization, product schema, faceted navigation controls, and catalog growth',label:'Ecommerce SEO',svg:'<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>',target:'svc-card-7'},
    {num:'08',name:'SEO Analytics & Reporting',tag:'Rank tracking, organic visibility, conversion reporting, and continuous site audits',label:'Analytics & Reporting',svg:'<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><polyline points="3 20 21 20"/>',target:'svc-card-8'}
  ];`;

html = html.replace(/const SERVICES=\[\s*\{num:'01'.*?\];/s, jsServices);

// 11. JavaScript Workflow Steps Array
const jsSteps = `  const steps=[
    {num:'01',label:'SEO Audit & Strategy Analysis',title:'SEO Audit & Strategy Analysis',desc:'We begin by evaluating your website, current organic visibility, technical condition, content, backlink profile, competitors, target markets, and business objectives. This stage identifies obstacles, opportunities, priorities, and the appropriate direction for the campaign.',subs:[{title:'Business & Website Analysis',desc:'We analyze your business model, target customers, competitors, markets, and commercial priorities.',icon:'<path d="M3 3h18v18H3zM3 9h18M9 21V9"/>'},{title:'Technical SEO Audit',desc:'We review crawlability, indexation, architecture, redirects, mobile usability, security, and performance.',icon:'<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>'},{title:'Content & Authority Assessment',desc:'We evaluate existing content, keyword coverage, internal links, backlinks, and website credibility.',icon:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>'},{title:'Goal & KPI Definition',desc:'We define realistic SEO objectives, measurement requirements, priorities, and campaign success indicators.',icon:'<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>'}],deliverables:['Comprehensive SEO audit report','Prioritized issue and opportunity list','Campaign goals and performance indicators','Strategic SEO roadmap'],illus:'<img src="Images/Webspide-Images_/Digital Marketting/search-engine-optimization-services/Workflow/search-engine-optimization-services-seo-audit-strategy-analysis.webp" alt="SEO Audit & Strategy Analysis" style="width:100%;height:auto;display:block;border:none;outline:none;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);background:transparent;">' },
    {num:'02',label:'Keyword & Competitive Planning',title:'Keyword & Competitive Planning',desc:'We research customer search behavior, keyword intent, competitors, content gaps, and search-result patterns. This stage creates a structured keyword and page strategy aligned with your services, products, markets, audience needs, and business value.',subs:[{title:'Keyword Research',desc:'We identify relevant commercial, informational, local, branded, and long-tail search opportunities.',icon:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>'},{title:'Search Intent Analysis',desc:'We determine what users expect to find for each important keyword and topic.',icon:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>'},{title:'Competitor Research',desc:'We examine competitor rankings, content, authority, website structure, and visible search strategies.',icon:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>'},{title:'Keyword Mapping',desc:'We assign target keywords to existing or planned pages to prevent unnecessary competition.',icon:'<rect x="3" y="4" width="18" height="16" rx="2"/><line x1="7" y1="8" x2="17" y2="8"/>'}],deliverables:['Prioritized keyword research document','Competitor and search-gap analysis','Search-intent classification','Keyword-to-page mapping plan'],illus:'<img src="Images/Webspide-Images_/Digital Marketting/search-engine-optimization-services/Workflow/search-engine-optimization-services-keyword-competitive-planning.webp" alt="Keyword & Competitive Planning" style="width:100%;height:auto;display:block;border:none;outline:none;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);background:transparent;">' },
    {num:'03',label:'On-Page, Technical & Content Optimization',title:'On-Page, Technical & Content Optimization',desc:'We improve the website’s technical foundation, page relevance, content quality, internal linking, and user experience. Each change is prioritized according to expected impact, implementation requirements, available resources, and the agreed SEO strategy.',subs:[{title:'Technical SEO Implementation',desc:'We resolve prioritized crawlability, indexation, performance, architecture, and structured-data issues.',icon:'<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>'},{title:'On-Page Optimization',desc:'We improve titles, descriptions, headings, URLs, images, content, and internal links.',icon:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>'},{title:'Content Development',desc:'We create or update useful pages that match search intent and customer needs.',icon:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>'},{title:'User Experience Improvements',desc:'We strengthen readability, navigation, mobile behavior, page speed, and conversion pathways.',icon:'<rect x="2" y="3" width="20" height="14" rx="2"/>'}],deliverables:['Technically optimized website foundation','Updated on-page SEO elements','Optimized or newly created content','Improved internal linking and user journeys'],illus:'<img src="Images/Webspide-Images_/Digital Marketting/search-engine-optimization-services/Workflow/search-engine-optimization-services-on-page-technical-content-optimization.webp" alt="On-Page, Technical & Content Optimization" style="width:100%;height:auto;display:block;border:none;outline:none;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);background:transparent;">' },
    {num:'04',label:'Authority Building & Off-Page SEO',title:'Authority Building & Off-Page SEO',desc:'We strengthen your website’s external credibility through relevant outreach, content promotion, citations, partnerships, and link-earning activities. The approach prioritizes quality, relevance, transparency, and sustainable authority rather than manipulative or high-risk link acquisition.',subs:[{title:'Backlink Profile Review',desc:'We analyze existing links, referring domains, anchor patterns, risks, and competitor authority.',icon:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>'},{title:'Outreach & Digital Promotion',desc:'We promote relevant content and resources to suitable industry websites and publishers.',icon:'<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>'},{title:'Citation & Brand Mention Development',desc:'We improve trusted business references, local citations, and unlinked brand opportunities.',icon:'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>'},{title:'Link Quality Monitoring',desc:'We evaluate acquired links for relevance, credibility, context, and long-term value.',icon:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'}],deliverables:['Backlink and authority assessment','Prioritized outreach opportunity list','Relevant citations and earned placements','Transparent off-page SEO report'],illus:'<img src="Images/Webspide-Images_/Digital Marketting/search-engine-optimization-services/Workflow/search-engine-optimization-services-authority-building-off-page-seo.webp" alt="Authority Building & Off-Page SEO" style="width:100%;height:auto;display:block;border:none;outline:none;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);background:transparent;">' },
    {num:'05',label:'Analytics & Performance Review',title:'Analytics & Performance Review',desc:'We monitor visibility, rankings, traffic, engagement, conversions, technical health, content performance, and authority development. Regular analysis helps separate meaningful campaign progress from temporary fluctuations and identifies areas requiring further attention.',subs:[{title:'Ranking & Visibility Monitoring',desc:'We track priority keywords, landing pages, competitors, and overall organic search presence.',icon:'<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>'},{title:'Traffic & Conversion Analysis',desc:'We review organic visits, user behavior, enquiries, sales, and conversion performance.',icon:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>'},{title:'Technical Health Monitoring',desc:'We identify new crawl, indexation, performance, security, and website-quality issues.',icon:'<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>'},{title:'Campaign Reporting',desc:'We explain completed actions, results, limitations, opportunities, and recommended priorities clearly.',icon:'<rect x="3" y="4" width="18" height="16" rx="2"/>'}],deliverables:['Organic performance dashboard','Keyword and visibility report','Traffic and conversion analysis','Monthly SEO progress report'],illus:'<img src="Images/Webspide-Images_/Digital Marketting/search-engine-optimization-services/Workflow/search-engine-optimization-services-analytics-performance-review.webp" alt="Analytics & Performance Review" style="width:100%;height:auto;display:block;border:none;outline:none;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);background:transparent;">' },
    {num:'06',label:'Continuous Optimization & Growth',title:'Continuous Optimization & Growth',desc:'SEO continues as search behavior, competitors, website content, technology, and business priorities change. We use performance insights to refine the strategy, update pages, resolve emerging issues, strengthen authority, and identify new growth opportunities.',subs:[{title:'Strategy Refinement',desc:'We adjust priorities based on performance data, market changes, and business requirements.',icon:'<path d="M12 2L2 7l10 5 10-5-10-5z"/>'},{title:'Content Improvement',desc:'We refresh existing pages and develop new content for emerging search opportunities.',icon:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>'},{title:'Technical Maintenance',desc:'We monitor releases, migrations, website changes, and new technical SEO concerns.',icon:'<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>'},{title:'Growth Opportunity Analysis',desc:'We identify additional services, products, locations, topics, and markets for expansion.',icon:'<polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/>'}],deliverables:['Updated SEO action plan','Continuous content and technical improvements','New keyword and growth opportunities','Ongoing optimization and maintenance report'],illus:'<img src="Images/Webspide-Images_/Digital Marketting/search-engine-optimization-services/Workflow/search-engine-optimization-services-continuous-optimization-growth.webp" alt="Continuous Optimization & Growth" style="width:100%;height:auto;display:block;border:none;outline:none;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);background:transparent;">' }
  ];`;

html = html.replace(/const steps=\[\s*\{num:'01'.*?\];/s, jsSteps);

fs.writeFileSync(targetPath, html, 'utf8');
console.log('Successfully updated indexseo1.html with 100% precision!');
