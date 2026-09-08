const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, 'indexapp1.html');
const targetPath = path.join(__dirname, 'indexemail1.html');

let html = fs.readFileSync(templatePath, 'utf8');

// 1. Meta / Head Title & Meta tags
html = html.replace(
  /<title>.*?<\/title>/s,
  '<title>Email Marketing Services & Automation | Webspide</title>'
);

html = html.replace(
  /<meta name="description"\s+content=".*?">/s,
  '<meta name="description"\n        content="Grow engagement, leads, and revenue with Webspide’s email marketing services, including strategy, automation, design, campaign management, and analytics.">'
);

html = html.replace(
  /<meta name="keywords"\s+content=".*?">/s,
  '<meta name="keywords"\n        content="Email marketing services, Email marketing company, Email marketing agency, Email marketing automation services, Email campaign management services, Email marketing strategy, Email marketing solutions, Email marketing specialists, Email marketing service provider, Email newsletter services, B2B email marketing services, Ecommerce email marketing, Email list management, Email campaign services, Automated email marketing">'
);

// 2. Hero Section
html = html.replace(
  /<div class="badge fade-in">.*?<\/div>/s,
  '<div class="badge fade-in">Email Marketing Services</div>'
);

html = html.replace(
  /<h1 class="fade-in delay-1">.*?<\/h1>/s,
  `<h1 class="fade-in delay-1">
      <span class="grad">EMAIL MARKETING</span>
      <span class="grad">SERVICES</span>
      <span class="outline">Transform Campaigns</span>
    </h1>`
);

html = html.replace(
  /<p class="hero-desc fade-in delay-2">.*?<\/p>/s,
  '<p class="hero-desc fade-in delay-2">Webspide delivers strategic email marketing services for startups, ecommerce brands, enterprises, and global organizations. We plan, design, automate, manage, and optimize campaigns that nurture leads, strengthen customer relationships, and increase conversions. Our personalized email marketing solutions combine audience segmentation, engaging content, reliable delivery, analytics, and continuous improvement to support measurable business growth.</p>'
);

// 3. Orbit Cards Mobile (6 items)
const mobileOrbitCards = `<div class="orbit-cards-mobile">
  <a href="#svc-card-1" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div><div><div class="orb-card-name">Strategy</div><div class="orb-card-tag">Email strategy dev</div></div></a>
  <a href="#svc-card-2" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 1 0 7.75"/></svg></div><div><div class="orb-card-name">List Building</div><div class="orb-card-tag">Segmentation & hygiene</div></div></a>
  <a href="#svc-card-3" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></div><div><div class="orb-card-name">Design & Copy</div><div class="orb-card-tag">Responsive email templates</div></div></a>
  <a href="#svc-card-4" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div><div><div class="orb-card-name">Automation</div><div class="orb-card-tag">Workflows & drip campaigns</div></div></a>
  <a href="#svc-card-5" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div><div><div class="orb-card-name">Management</div><div class="orb-card-tag">End-to-end campaign ops</div></div></a>
  <a href="#svc-card-6" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><polyline points="3 20 21 20"/></svg></div><div><div class="orb-card-name">Analytics</div><div class="orb-card-tag">Reporting & A/B testing</div></div></a>
</div>`;

html = html.replace(/<div class="orbit-cards-mobile">.*?<\/div>\s*<!-- BANNER 1 -->/s, mobileOrbitCards + '\n\n<!-- BANNER 1 -->');

// 4. Banner 1 & Banner 2 replacement (replace complete block from BANNER 1 comment up to SERVICES SECTION comment or section start)
const bannersFullContent = `<!-- BANNER 1 -->
<div class="banner banner-1 section-soft-gradient">
  <div class="b1-right-line"></div>
  <div class="b1-corner-dot tl"></div><div class="b1-corner-dot tr"></div><div class="b1-corner-dot bl"></div><div class="b1-corner-dot br"></div>
  <div class="b1-content">
    <div class="b1-header">
      <div class="b1-title gradient-heading">Transform Your Marketing with<span>Expert Email Campaigns</span></div>
      <p class="b1-desc">Email remains one of the most effective channels for building direct, measurable customer relationships. Webspide provides end-to-end email marketing services covering strategy, list growth, segmentation, responsive design, content creation, automation, campaign management, deliverability, testing, analytics, and continuous optimization to improve engagement, conversions, retention, and long-term customer value.</p>
    </div>
    <div class="b1-cards">
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg></div><div class="b1-card-title">Targeted Email Campaigns</div></div><p class="b1-card-desc">Audience segmentation and personalized messaging help each subscriber receive more relevant communication. We organize campaigns around customer interests, behaviours, lifecycle stages, locations, and previous interactions to improve opens, clicks, conversions, and overall engagement without sending the same message to everyone.</p></div>
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div><div class="b1-card-title">Email Automation &amp; Workflow Optimization</div></div><p class="b1-card-desc">Automated workflows deliver timely messages when subscribers join, browse, purchase, abandon a cart, become inactive, or reach another important stage. This reduces repetitive manual work while supporting consistent follow-ups, lead nurturing, customer onboarding, retention, and revenue opportunities.</p></div>
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><polyline points="3 20 21 20"/></svg></div><div class="b1-card-title">Data-Driven Campaign Strategies</div></div><p class="b1-card-desc">We use campaign data, audience behaviour, conversion information, and testing results to improve future decisions. Clear insights reveal which subject lines, content, segments, offers, and sending schedules perform best, helping every campaign become more relevant, efficient, and measurable.</p></div>
    </div>
  </div>
</div>

<!-- BANNER 2 -->
<div class="banner banner-2 section-soft-gradient">
  <div class="b2-content">
    <div class="b2-cards">
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></div><div class="b2-card-title">Engaging Email Content &amp; Design</div></div><p class="b1-card-desc">Our team creates responsive email designs and clear, persuasive copy aligned with your brand. Strong hierarchy, accessible layouts, useful information, and focused calls to action help subscribers understand the message quickly and take the next relevant step across devices.</p></div>
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div><div class="b2-card-title">High Deliverability &amp; Inbox Placement</div></div><p class="b1-card-desc">Healthy lists, responsible sending practices, authentication guidance, engagement monitoring, and content checks help protect sender reputation. We work to reduce avoidable bounces, spam complaints, and delivery problems so more legitimate subscribers receive your campaigns in the intended inbox.</p></div>
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg></div><div class="b2-card-title">Continuous Optimization &amp; A/B Testing</div></div><p class="b1-card-desc">We test subject lines, sender names, previews, content, layouts, calls to action, segments, and sending times where suitable. Results guide practical improvements, allowing email marketing campaigns to adapt continuously to audience preferences, platform changes, and evolving business priorities.</p></div>
    </div>
  </div>
</div>`;

html = html.replace(/<!-- BANNER 1 -->.*?(?=<!-- ═══════════════════════════════════════════|\s*<section class="services-section)/s, bannersFullContent + '\n\n\n');

// Helper function to generate SVG visuals for service cards
function getSvgVisual(num) {
  return `<svg viewBox="0 0 320 256" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" width="280" height="216" rx="24" fill="rgba(59,92,200,0.06)" stroke="rgba(139,92,246,0.25)" stroke-width="2"/>
    <circle cx="160" cy="128" r="75" fill="rgba(192,132,252,0.12)" stroke="#8B5CF6" stroke-width="2" stroke-dasharray="6 6"/>
    <circle cx="160" cy="128" r="45" fill="rgba(31,79,178,0.2)" stroke="#1F4FB2" stroke-width="2"/>
    <text x="160" y="135" text-anchor="middle" fill="#07164F" font-size="28" font-family="'Orbitron', sans-serif" font-weight="900">${num}</text>
  </svg>`;
}

// 5. Services Section Header & 6 Cards
const servicesData = [
  {
    num: '01',
    title: 'Email Strategy<br><span>Development</span>',
    desc: 'Effective email marketing begins with a clear strategy connected to your audience, customer journey, and commercial goals. Webspide reviews your products, services, existing database, sales cycle, brand communication, technology, and current campaign performance. We then define practical objectives such as lead nurturing, repeat purchases, customer education, retention, event promotion, or revenue growth.',
    p1: 'Our email marketing specialists plan audience segments, campaign types, content themes, sending frequency, automation opportunities, platform requirements, consent processes, and performance indicators. The strategy also considers deliverability, personalization, testing, reporting, and coordination with your website, CRM, ecommerce platform, sales team, or customer-support workflows.',
    p2: 'The completed roadmap gives your team a structured approach instead of sending disconnected emails without a clear purpose. Campaign priorities, responsibilities, timelines, and measurement standards are documented for consistent execution. As audience behaviour and business requirements change, we use performance insights to refine the email marketing strategy, improve relevance, and identify new opportunities for engagement, conversions, customer loyalty, and long-term value.',
    cta: 'Start Your Email Strategy →',
    reverse: false
  },
  {
    num: '02',
    title: 'Email List Building &<br><span>Segmentation</span>',
    desc: 'A successful email marketing campaign depends on a permission-based list of people who genuinely want to hear from your business. Webspide develops list-building strategies using website forms, landing pages, lead magnets, event registrations, gated resources, checkout opportunities, referrals, and other suitable acquisition channels. Every method is planned around clear value and responsible consent.',
    p1: 'We organize subscriber data using relevant attributes such as location, interests, lifecycle stage, purchase history, engagement, lead source, customer type, and stated preferences. Segmentation allows campaigns to address different needs instead of sending identical messages to the entire database. We also review inactive contacts, duplicate records, invalid addresses, and avoidable data-quality issues.',
    p2: 'Our email list management approach supports cleaner data, stronger deliverability, more relevant personalization, and better campaign measurement. Forms, fields, tags, consent records, and CRM connections are documented so future growth remains manageable. Regular list hygiene and engagement reviews help reduce bounces, protect sender reputation, and ensure your email marketing services focus on quality subscribers.',
    cta: 'Grow Your Email List →',
    reverse: true
  },
  {
    num: '03',
    title: 'Email Design &<br><span>Content Creation</span>',
    desc: 'Webspide creates responsive email designs and persuasive content that communicate clearly across desktop and mobile inboxes. We begin with the campaign purpose, audience segment, brand identity, offer, desired action, and supporting information. This ensures the design and copy work together rather than competing for attention or overwhelming subscribers with unnecessary detail.',
    p1: 'Our team develops newsletters, promotional emails, product announcements, educational sequences, event invitations, transactional messages, and customer updates. Content can include subject lines, preview text, headlines, body copy, visuals, buttons, product blocks, and personalized elements. Layouts are structured for readability, accessibility, consistent branding, and compatibility across commonly used email clients.',
    p2: 'Each message is reviewed for clarity, accuracy, tone, links, calls to action, rendering, and mobile behaviour before release. Reusable templates can also improve consistency and reduce production time for future campaigns. By combining engaging content with focused design, our email marketing solutions help subscribers understand the value quickly, interact confidently, and move toward meaningful actions.',
    cta: 'Design Impactful Emails →',
    reverse: false
  },
  {
    num: '04',
    title: 'Email Marketing<br><span>Automation</span>',
    desc: 'Email marketing automation helps businesses communicate consistently at important moments without managing every message manually. Webspide plans automated workflows around subscriber actions, customer lifecycle stages, business rules, and available data. Common sequences include welcome emails, lead nurturing, onboarding, abandoned-cart reminders, post-purchase follow-ups, renewal notices, re-engagement campaigns, and milestone communications.',
    p1: 'Our specialists define triggers, delays, conditions, segments, message order, personalization, exclusions, goals, and exit rules for each workflow. We can coordinate automation with CRM systems, ecommerce platforms, forms, analytics, and other approved tools. Every sequence is designed to remain useful and timely while avoiding excessive frequency, conflicting messages, or unsuitable communication.',
    p2: 'Before activation, workflows are tested for logic, links, content, data movement, personalization, and subscriber experience. Performance is then monitored through delivery, engagement, conversion, and progression data. Continuous refinement helps improve timing, content, segmentation, and journey structure. The result is a scalable email marketing automation system that supports lead development and customer retention.',
    cta: 'Automate Your Email Campaigns →',
    reverse: true
  },
  {
    num: '05',
    title: 'Email Campaign<br><span>Management</span>',
    desc: 'Webspide manages complete email campaigns from planning and production through scheduling, delivery, monitoring, and optimization. We coordinate objectives, audiences, offers, content, design, approvals, platform setup, testing, and launch requirements within one structured process. This helps businesses maintain consistent communication while reducing operational pressure on internal marketing, sales, and customer-service teams.',
    p1: 'Our email marketing campaign services include list selection, segmentation, personalization, subject-line development, template preparation, link checking, deliverability review, test sends, scheduling, and quality assurance. Campaigns can support product launches, promotions, newsletters, events, customer education, retention, lead nurturing, and other communication goals.',
    p2: 'After sending, we review delivery, opens, clicks, conversions, unsubscribes, bounces, complaints, and audience behaviour. Findings are translated into practical recommendations for future campaigns rather than presented as isolated numbers. This end-to-end management approach improves consistency, accountability, and learning across your email program while helping every campaign remain aligned with business priorities.',
    cta: 'Manage Your Campaigns Effectively →',
    reverse: false
  },
  {
    num: '06',
    title: 'Email Analytics &<br><span>Reporting</span>',
    desc: 'Email marketing analytics reveal how subscribers respond and where campaigns can improve. Webspide establishes reporting around your objectives and available tracking, covering indicators such as deliveries, bounces, opens, clicks, click-to-open rates, conversions, revenue, unsubscribes, complaints, list growth, and automation performance. Metrics are interpreted within context rather than judged independently.',
    p1: 'We compare results across audience segments, campaigns, subject lines, content themes, devices, sending times, offers, and customer journeys where reliable data is available. A/B testing can evaluate selected variables without changing too many elements at once. We also identify tracking limitations, attribution gaps, and data-quality concerns that may affect decision-making.',
    p2: 'Reports explain what happened, what may have influenced performance, and which actions should follow. Clear recommendations help improve targeting, content, design, automation, deliverability, and campaign timing. Regular analysis turns individual sends into an ongoing learning process, giving stakeholders greater visibility into email marketing performance and ROI.',
    cta: 'Get Performance Insights →',
    reverse: true
  }
];

let serviceCardsHtml = `<section class="services-section section-light" id="services">
  <div class="services-section-head">
    <div class="section-tag">What We Do</div>
    <h2 class="section-title gradient-heading">Our Email Marketing Services</h2>
    <p class="section-sub" style="margin-bottom:0">End-to-end email solutions engineered for deliverability, engagement, automation, and measurable revenue growth.</p>
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
      <div class="ts-badge">Platforms & Tools</div>
      <h2 class="gradient-heading">Our Email Marketing <span>Tools & Platforms</span></h2>
      <h3>for Email Marketing Services</h3>
      <p>We select reliable email marketing platforms, CRM integrations, and deliverability tools according to each project's requirements.</p>
    </div>`
);

// 7. Why Choose Us Section
const whyChooseHtml = `<div class="sections section-soft-gradient">
  <div class="left">
    <br>
    <div class="villan-badge">Why Choose Webspide</div>
    <div class="left-title gradient-heading">Why Choose<br>Webspide For<br><span class="purple">Email Marketing<br>Services?</span></div>
    <div class="title-underline"></div>
    <p class="left-desc">Webspide combines strategy, creative communication, automation, deliverability, campaign management, and transparent reporting to provide dependable email marketing services for international businesses. We focus on relevance, measurable performance, responsible data use, and long-term customer value. Every campaign is planned around your audience, brand, technology, sales process, compliance requirements, available resources, and wider business objectives across global markets.</p>
    <div class="illustration">
      <div class="gear-left">⚙</div>
      <div class="gear-sm">⚙</div>
      <div class="code-tag">&lt;/&gt;</div>
      <div class="laptop">
        <div class="laptop-screen">
          <div class="screen-code"><span>function</span> <em>initEmail</em>() {<br>&nbsp;&nbsp;<span>const</span> list = [];<br>&nbsp;&nbsp;<em>sendCampaign</em>(list);<br>&nbsp;&nbsp;<span>return</span> list;<br>}</div>
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
          <div class="feature-title">Customized Email Marketing <span class="accent">Strategies</span></div>
          <p class="feature-desc">Every business has different customers, sales cycles, offers, platforms, and communication goals. We create tailored email marketing strategies based on your audience, data, customer journey, and available resources. This focused approach helps prioritize the campaigns, segments, automations, and content most likely to improve engagement, conversions, retention, and long-term customer relationships across selected international markets.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">02</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Advanced Email <span class="accent">Automation</span></div>
          <p class="feature-desc">Our specialists design automated workflows for welcome journeys, lead nurturing, abandoned carts, onboarding, renewals, re-engagement, and other important customer moments. Triggers, timing, conditions, personalization, and exit rules are planned carefully. This creates more consistent communication, reduces repetitive manual work, and gives your email program a scalable foundation for future growth.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">03</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Data-Driven Decision <span class="accent">Making</span></div>
          <p class="feature-desc">We use delivery, engagement, conversion, audience, and automation data to guide practical improvements. Reports explain performance clearly instead of presenting numbers without context. Testing and analysis help refine subject lines, content, segments, offers, timing, and workflows, allowing stakeholders to make informed decisions.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">04</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Engaging &amp; Responsive <span class="accent">Email Design</span></div>
          <p class="feature-desc">Our team creates clear, brand-aligned email designs that remain readable and functional across desktop and mobile inboxes. Responsive templates, accessible layouts, persuasive content, focused calls to action, and quality checks support stronger subscriber experiences. Every message is designed around its audience and intended action.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">05</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Deliverability &amp; Responsible <span class="accent">Practices</span></div>
          <p class="feature-desc">We support healthier email performance through list hygiene, authentication guidance, responsible sending patterns, consent-aware processes, quality checks, and engagement monitoring. These practices help reduce avoidable bounces, complaints, and spam-related problems while protecting sender reputation.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">06</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Ongoing Optimization <span class="accent">&amp; Support</span></div>
          <p class="feature-desc">Email marketing improves through consistent review, testing, and refinement. We monitor campaign and automation performance, identify emerging issues, refresh content, adjust segments, and recommend new opportunities as customer behaviour changes. Ongoing support provides continuity and clearer accountability.</p>
        </div>
      </div>
    </div>
  </div>
</div>`;

// Replace Why Choose Us section cleanly
html = html.replace(/(?:<!-- WHY CHOOSE US -->\s*)?<div class="sections section-soft-gradient">.*?<\/div>\s*<\/div>\s*<\/div>\s*<section class="how-we-work"/s, `<!-- WHY CHOOSE US -->\n` + whyChooseHtml + `\n\n\n<section class="how-we-work"`);

// 8. How We Work Header
const workflowSection = `<section class="how-we-work" id="how-we-work">
  <div class="hww-header">
    <div class="hww-badge-top">HOW WE WORK</div>
    <h2 class="section-title gradient-heading">Our Email Marketing Workflow Process</h2>
    <div class="hww-sub-top">Our email marketing workflow combines strategy, audience management, content creation, automation, quality assurance, campaign delivery, analytics, and continuous improvement to build measurable customer relationships globally.</div>
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
    <h2 class="section-title gradient-heading">Ready to Improve Your Email Marketing Performance?</h2>
    <p class="section-sub">Tell us about your audience, current email platform, campaign requirements, automation needs, and business goals. Our team will review your requirements and recommend a practical email marketing strategy focused on engagement, deliverability, lead nurturing, customer retention, conversions, and measurable long-term growth.</p>
  </div>`;

html = html.replace(/<section class="contact-section section-light" id="contact">.*?<div class="contact-wrap">/s, contactHead + '\n  <div class="contact-wrap">');

// 10. JavaScript Services Array (6 items)
const jsServices = `  const SERVICES=[
    {num:'01',name:'Email Strategy Development',tag:'Define practical objectives, lifecycle communication, deliverability, and campaign frameworks',label:'Strategy',svg:'<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',target:'svc-card-1'},
    {num:'02',name:'List Building & Segmentation',tag:'Permission-based acquisition, database segmentation, consent records, and data hygiene',label:'List Growth',svg:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 1 0 7.75"/>',target:'svc-card-2'},
    {num:'03',name:'Email Design & Content',tag:'Responsive, brand-aligned templates, persuasive copy, clear CTAs, and mobile optimization',label:'Design & Copy',svg:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>',target:'svc-card-3'},
    {num:'04',name:'Email Marketing Automation',tag:'Automated welcome series, abandoned cart, lead nurturing, and lifecycle workflows',label:'Automation',svg:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',target:'svc-card-4'},
    {num:'05',name:'Email Campaign Management',tag:'End-to-end scheduling, test sends, quality assurance, and campaign launch management',label:'Management',svg:'<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',target:'svc-card-5'},
    {num:'06',name:'Email Analytics & Reporting',tag:'Comprehensive delivery, open, click, conversion reporting, and A/B test insights',label:'Analytics',svg:'<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><polyline points="3 20 21 20"/>',target:'svc-card-6'}
  ];`;

html = html.replace(/const SERVICES=\[\s*\{num:'01'.*?\];/s, jsServices);

// 11. JavaScript Workflow Steps Array
const jsSteps = `  const steps=[
    {num:'01',label:'Email Strategy & Audience Analysis',title:'Email Strategy & Audience Analysis',desc:'We begin by understanding your business, audience, customer journey, offers, communication goals, existing database, technology, compliance needs, and performance expectations. This stage defines the strategic direction for the complete email marketing program.',subs:[{title:'Business & Campaign Analysis',desc:'We analyse your goals, customers, offers, markets, and sales process.',icon:'<path d="M3 3h18v18H3zM3 9h18M9 21V9"/>'},{title:'Audience Research',desc:'We identify subscriber needs, behaviours, preferences, and lifecycle stages carefully.',icon:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>'},{title:'Campaign Goal Definition',desc:'We define engagement, conversion, retention, revenue, and communication objectives clearly.',icon:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>'},{title:'Channel & Platform Review',desc:'We review email platforms, CRM systems, integrations, and available data.',icon:'<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>'}],deliverables:['Approved email marketing strategy','Audience and customer-journey analysis','Campaign goals and performance indicators','Platform and integration recommendations'],illus:'<svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="180" height="120" rx="12" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.3)" stroke-width="1.5"/><circle cx="110" cy="80" r="40" fill="rgba(192,132,252,0.12)" stroke="#c084fc" stroke-width="1.5"/><line x1="110" y1="50" x2="110" y2="80" stroke="#c084fc" stroke-width="2" stroke-linecap="round"/><circle cx="110" cy="80" r="4" fill="#c084fc"/><text x="110" y="140" text-anchor="middle" fill="rgba(192,132,252,0.7)" font-size="10" font-family="Orbitron,sans-serif">STRATEGY</text></svg>' },
    {num:'02',label:'List Building & Technical Setup',title:'List Building & Technical Setup',desc:'We establish the audience, consent, data, platform, and technical foundations required for dependable campaign delivery. Forms, subscriber fields, segments, integrations, authentication, and list-management processes are configured around your operational requirements.',subs:[{title:'List Growth Planning',desc:'We plan permission-based forms, lead magnets, registrations, and acquisition opportunities.',icon:'<path d="M12 5v14M5 12h14"/>'},{title:'Audience Segmentation',desc:'We organize contacts by interests, behaviour, lifecycle, location, and value.',icon:'<path d="M4 6h16M4 12h8m-8 6h16"/>'},{title:'Platform & CRM Setup',desc:'We configure approved platforms, integrations, fields, tags, and automation data.',icon:'<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/>'},{title:'Deliverability Configuration',desc:'We review authentication, sender details, list hygiene, and sending practices.',icon:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'}],deliverables:['Configured email marketing platform','Subscriber acquisition and segmentation plan','CRM and data integration structure','Deliverability and authentication checklist'],illus:'<svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="180" height="120" rx="12" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.3)" stroke-width="1.5"/><rect x="50" y="45" width="120" height="70" rx="8" fill="rgba(192,132,252,0.12)" stroke="#c084fc" stroke-width="1.5"/><path d="M50 45 L110 90 L170 45" stroke="#7ba4d4" stroke-width="2"/><text x="110" y="140" text-anchor="middle" fill="rgba(192,132,252,0.7)" font-size="10" font-family="Orbitron,sans-serif">SETUP</text></svg>' },
    {num:'03',label:'Email Design, Content & Automation',title:'Email Design, Content & Automation',desc:'Our strategists, writers, designers, and automation specialists transform approved plans into responsive emails and customer journeys. Every message is created around brand standards, subscriber relevance, campaign objectives, and the required action.',subs:[{title:'Email Content Creation',desc:'We write subject lines, previews, messages, offers, and calls to action.',icon:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>'},{title:'Responsive Template Design',desc:'We design accessible templates for desktop and mobile email clients.',icon:'<rect x="3" y="3" width="18" height="18" rx="2"/>'},{title:'Personalization & Dynamic Content',desc:'We configure relevant content using approved subscriber data and segments.',icon:'<circle cx="12" cy="12" r="10"/>'},{title:'Automation Workflow Development',desc:'We build triggers, timing, conditions, messages, and journey exit rules.',icon:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>'}],deliverables:['Approved email copy and subject lines','Responsive branded email templates','Personalization and dynamic-content setup','Configured automation workflows'],illus:'<svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="180" height="120" rx="12" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.3)" stroke-width="1.5"/><rect x="60" y="45" width="100" height="70" rx="6" fill="rgba(192,132,252,0.12)" stroke="#c084fc" stroke-width="1.5"/><line x1="70" y1="60" x2="150" y2="60" stroke="#7ba4d4" stroke-width="2"/><line x1="70" y1="75" x2="130" y2="75" stroke="rgba(192,132,252,0.6)" stroke-width="2"/><rect x="70" y="90" width="40" height="15" rx="3" fill="#c084fc"/><text x="110" y="140" text-anchor="middle" fill="rgba(192,132,252,0.7)" font-size="10" font-family="Orbitron,sans-serif">CREATIVE</text></svg>' },
    {num:'04',label:'Testing, Deliverability & QA',title:'Testing, Deliverability & QA',desc:'Before launch, we review content, links, rendering, personalization, automation logic, tracking, and delivery settings. Identified issues are corrected and retested to reduce avoidable errors and protect the subscriber experience.',subs:[{title:'Content & Link Testing',desc:'We verify wording, links, buttons, offers, tracking, and destination pages.',icon:'<polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>'},{title:'Device & Client Testing',desc:'We review rendering across representative mobile, desktop, and email clients.',icon:'<rect x="2" y="3" width="20" height="14" rx="2"/>'},{title:'Automation Logic Testing',desc:'We test triggers, delays, conditions, personalization, and journey progression carefully.',icon:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>'},{title:'Deliverability Review',desc:'We check sender settings, list quality, frequency, and content risks.',icon:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'}],deliverables:['Email quality-assurance report','Rendering and compatibility review','Verified automation workflow logic','Deliverability and launch-readiness approval'],illus:'<svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="180" height="120" rx="12" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.3)" stroke-width="1.5"/><polyline points="60,100 85,75 110,90 145,50" stroke="#c084fc" stroke-width="2" stroke-linecap="round" fill="none"/><circle cx="60" cy="100" r="4" fill="#7ba4d4"/><circle cx="145" cy="50" r="4" fill="#c084fc"/><text x="110" y="140" text-anchor="middle" fill="rgba(192,132,252,0.7)" font-size="10" font-family="Orbitron,sans-serif">TESTING</text></svg>' },
    {num:'05',label:'Campaign Deployment & Monitoring',title:'Campaign Deployment & Monitoring',desc:'After approval, we schedule and launch campaigns or activate automated workflows according to the agreed audience, timing, and frequency. Initial delivery and engagement signals are monitored to identify urgent issues quickly.',subs:[{title:'Campaign Scheduling',desc:'We schedule approved campaigns for suitable dates, times, and segments.',icon:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'},{title:'Final Audience Validation',desc:'We confirm recipients, exclusions, suppression lists, and consent requirements carefully.',icon:'<path d="M9 11l3 3L22 4"/>'},{title:'Campaign Launch',desc:'We deliver campaigns and activate approved automated customer journeys securely.',icon:'<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>'},{title:'Live Performance Monitoring',desc:'We monitor delivery, bounces, complaints, clicks, and technical issues closely.',icon:'<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>'}],deliverables:['Scheduled and launched email campaigns','Activated automation sequences','Verified audience and exclusion settings','Initial delivery and monitoring report'],illus:'<svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="180" height="120" rx="12" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.3)" stroke-width="1.5"/><path d="M40 100 L180 100" stroke="rgba(139,92,246,0.3)" stroke-width="2"/><line x1="60" y1="100" x2="150" y2="40" stroke="#c084fc" stroke-width="2.5" stroke-linecap="round"/><circle cx="150" cy="40" r="6" fill="#c084fc"/><text x="110" y="140" text-anchor="middle" fill="rgba(192,132,252,0.7)" font-size="10" font-family="Orbitron,sans-serif">LAUNCH</text></svg>' },
    {num:'06',label:'Analytics & Continuous Improvement',title:'Analytics & Continuous Improvement',desc:'We analyse campaign and automation results to understand audience response, conversion performance, deliverability, and opportunities for improvement. Findings are converted into practical actions for future messages, segments, workflows, and growth.',subs:[{title:'Performance Analysis',desc:'We evaluate delivery, opens, clicks, conversions, and audience behaviour trends.',icon:'<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>'},{title:'A/B Testing Review',desc:'We compare approved tests and document reliable campaign learning clearly.',icon:'<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 1 3.51 15"/>'},{title:'Strategy Refinement',desc:'We adjust content, timing, segmentation, automation, and campaign priorities accordingly.',icon:'<path d="M12 2L2 7l10 5 10-5-10-5z"/>'},{title:'Scaling & Optimization',desc:'We expand successful approaches and improve underperforming customer journeys continuously.',icon:'<polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/>'}],deliverables:['Campaign and automation performance report','A/B testing insights and recommendations','Updated optimization action plan','Future campaign and scaling roadmap'],illus:'<svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="180" height="120" rx="12" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.3)" stroke-width="1.5"/><rect x="40" y="70" width="25" height="50" rx="3" fill="rgba(59,92,200,0.4)"/><rect x="75" y="50" width="25" height="70" rx="3" fill="rgba(192,132,252,0.5)"/><rect x="110" y="60" width="25" height="60" rx="3" fill="rgba(123,164,212,0.5)"/><rect x="145" y="35" width="25" height="85" rx="3" fill="rgba(192,132,252,0.7)"/><text x="110" y="148" text-anchor="middle" fill="rgba(192,132,252,0.7)" font-size="10" font-family="Orbitron,sans-serif">OPTIMIZE</text></svg>' }
  ];`;

html = html.replace(/const steps=\[\s*\{num:'01'.*?\];/s, jsSteps);

fs.writeFileSync(targetPath, html, 'utf8');
console.log('Successfully updated indexemail1.html with 100% precision!');
