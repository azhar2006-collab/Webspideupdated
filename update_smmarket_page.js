const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, 'indexapp1.html');
const targetPath = path.join(__dirname, 'indexsmmarket1.html');

let html = fs.readFileSync(templatePath, 'utf8');

// 1. Meta / Head Title & Meta tags
html = html.replace(
  /<title>.*?<\/title>/s,
  '<title>Social Media Marketing Services | Webspide</title>'
);

html = html.replace(
  /<meta name="description"\s+content=".*?">/s,
  '<meta name="description"\n        content="Generate engagement, qualified leads, and sales with Webspide\'s paid social media marketing services across Facebook, Instagram, LinkedIn, YouTube, X, and Pinterest.">'
);

html = html.replace(
  /<meta name="keywords"\s+content=".*?">/s,
  '<meta name="keywords"\n        content="Social media marketing services, Social media marketing agency, Social media marketing company, Social media advertising services, Paid social media marketing, SMM services, Facebook Ads management, Instagram Ads management, LinkedIn advertising services, YouTube advertising services, X advertising services, Pinterest advertising services, B2B social media marketing, Social media campaign management, Social media marketing strategy">'
);

// 2. Hero Section
html = html.replace(
  /<div class="badge fade-in">.*?<\/div>/s,
  '<div class="badge fade-in">Social Media Marketing Services</div>'
);

html = html.replace(
  /<h1 class="fade-in delay-1">.*?<\/h1>/s,
  `<h1 class="fade-in delay-1">
      <span class="grad">SOCIAL MEDIA</span>
      <span class="grad">MARKETING SERVICES</span>
      <span class="outline">Measurable Growth</span>
    </h1>`
);

html = html.replace(
  /<p class="hero-desc fade-in delay-2">.*?<\/p>/s,
  '<p class="hero-desc fade-in delay-2">Webspide delivers performance-focused social media marketing services for startups, ecommerce brands, enterprises, and global organizations. Our specialists plan, launch, and optimize paid campaigns across Facebook, Instagram, LinkedIn, YouTube, X, and Pinterest. Every campaign combines audience research, compelling creative, conversion tracking, budget control, analytics, and continuous improvement to generate measurable business growth.</p>'
);

// 3. Orbit Cards Mobile (6 items)
const mobileOrbitCards = `<div class="orbit-cards-mobile">
  <a href="#svc-card-1" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></div><div><div class="orb-card-name">Facebook Ads</div><div class="orb-card-tag">Awareness, lead & ecommerce campaigns</div></div></a>
  <a href="#svc-card-2" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></div><div><div class="orb-card-name">Instagram Ads</div><div class="orb-card-tag">Visual &amp; story-driven campaigns</div></div></a>
  <a href="#svc-card-3" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></div><div><div class="orb-card-name">LinkedIn Ads</div><div class="orb-card-tag">B2B growth &amp; lead generation</div></div></a>
  <a href="#svc-card-4" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg></div><div><div class="orb-card-name">YouTube Ads</div><div class="orb-card-tag">Video marketing &amp; reach</div></div></a>
  <a href="#svc-card-5" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg></div><div><div class="orb-card-name">X Ads</div><div class="orb-card-tag">Trend &amp; real-time engagement</div></div></a>
  <a href="#svc-card-6" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg></div><div><div class="orb-card-name">Pinterest Ads</div><div class="orb-card-tag">Ecommerce &amp; visual marketing</div></div></a>
</div>`;

html = html.replace(/<div class="orbit-cards-mobile">.*?<\/div>\s*<!-- BANNER 1 -->/s, mobileOrbitCards + '\n\n<!-- BANNER 1 -->');

// 4. Banner 1 & Banner 2
const bannersFullContent = `<!-- BANNER 1 -->
<div class="banner banner-1 section-soft-gradient">
  <div class="b1-right-line"></div>
  <div class="b1-corner-dot tl"></div><div class="b1-corner-dot tr"></div><div class="b1-corner-dot bl"></div><div class="b1-corner-dot br"></div>
  <div class="b1-content">
    <div class="b1-header">
      <div class="b1-title gradient-heading">Elevate Your Business with Strategic<span>Social Media Marketing</span></div>
      <p class="b1-desc">Strategic social media advertising helps businesses reach relevant audiences, build demand, generate qualified leads, and increase conversions. Webspide provides end-to-end campaign services covering audience research, creative development, platform setup, paid promotion, conversion tracking, testing, reporting, and ongoing optimization across major social platforms for measurable international growth.</p>
    </div>
    <div class="b1-cards">
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 1 0 7.75"/></svg></div><div class="b1-card-title">Targeted Audience Engagement</div></div><p class="b1-card-desc">We identify high-value audience segments using demographics, interests, behaviours, locations, job roles, and customer data where appropriate. Precise targeting helps your campaigns reach users more likely to engage, enquire, purchase, register, or complete another meaningful business action.</p></div>
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><polyline points="3 20 21 20"/></svg></div><div class="b1-card-title">Data-Driven Campaigns</div></div><p class="b1-card-desc">Campaign decisions are guided by audience behaviour, engagement, traffic, conversions, costs, and revenue data. These insights help us refine creative, targeting, placements, bidding, budgets, and offers instead of relying on assumptions or short-term activity alone.</p></div>
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div><div class="b1-card-title">ROI-Focused Strategies</div></div><p class="b1-card-desc">Every campaign is structured around measurable outcomes such as leads, sales, registrations, website actions, or revenue. We monitor acquisition costs, conversion quality, and return on advertising spend to direct budgets toward opportunities with stronger commercial value.</p></div>
    </div>
  </div>
</div>

<!-- BANNER 2 -->
<div class="banner banner-2 section-soft-gradient">
  <div class="b2-content">
    <div class="b2-cards">
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div><div class="b2-card-title">Multi-Platform Advertising</div></div><p class="b1-card-desc">We manage campaigns across Facebook, Instagram, LinkedIn, YouTube, X, and Pinterest, adapting formats and targeting to each platform. This coordinated approach maintains brand consistency while helping businesses reach audiences through the channels they use most.</p></div>
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></div><div class="b2-card-title">High-Quality Content Marketing</div></div><p class="b1-card-desc">Our team creates platform-specific advertisements using clear copy, persuasive messaging, strong visuals, video, and focused calls to action. Each creative is aligned with your brand, audience, campaign objective, and customer journey to improve relevance and engagement.</p></div>
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/></svg></div><div class="b2-card-title">Ongoing Campaign Optimization</div></div><p class="b1-card-desc">We continuously test audiences, creative formats, headlines, offers, placements, bidding approaches, and landing-page experiences. Regular optimization helps improve campaign efficiency, reduce wasted spending, and maintain stronger long-term advertising performance.</p></div>
    </div>
  </div>
</div>`;

html = html.replace(/<!-- BANNER 1 -->.*?(?=<!-- ═══════════════════════════════════════════|\s*<section class="services-section)/s, bannersFullContent + '\n\n\n');

// Helper function for service card images
function getServiceImg(num) {
  const imgs = {
    '01': 'social-media-marketing-services-facebook-ads-management.webp',
    '02': 'social-media-marketing-services-instagram-ads-management.webp',
    '03': 'social-media-marketing-services-linkedin-ads-b2b-growth.webp',
    '04': 'social-media-marketing-services-youtube-ads-video-marketing.webp',
    '05': 'social-media-marketing-services-x-ads-trend-engagement.webp',
    '06': 'social-media-marketing-services-pinterest-ads-ecommerce-visual-marketing.webp'
  };
  const alts = {
    '01': 'Facebook Ads Management',
    '02': 'Instagram Ads Management',
    '03': 'LinkedIn Ads for B2B Growth',
    '04': 'YouTube Ads & Video Marketing',
    '05': 'X Ads for Trend Engagement',
    '06': 'Pinterest Ads for Ecommerce & Visual Marketing'
  };
  return `<img src="Images/Webspide-Images_/Digital Marketting/social-media-marketing-services/Service/${imgs[num]}" alt="${alts[num]}" style="width:100%;height:auto;display:block;border:none;outline:none;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);background:transparent;">`;
}

// 5. Services Section – 6 Cards
const servicesData = [
  {
    num: '01',
    title: 'Facebook Ads<br><span>Management</span>',
    desc: 'Facebook Ads help businesses reach broad or highly specific audiences across awareness, consideration, lead-generation, ecommerce, and remarketing campaigns. Webspide develops Facebook advertising strategies around your business goals, customer profiles, target markets, available budget, and conversion priorities. We research competitors, audience signals, offers, and customer journeys before structuring campaigns for measurable performance.',
    p1: 'Our specialists create image, video, carousel, collection, lead, and retargeting advertisements suited to each campaign objective. We manage audience segmentation, placements, schedules, bidding, budgets, tracking, and creative variations. Landing pages and forms are reviewed for relevance, mobile usability, trust, and conversion clarity so users experience a consistent journey from advertisement to action.',
    p2: 'After launch, we monitor reach, frequency, engagement, clicks, leads, purchases, acquisition costs, and return on advertising spend. Underperforming audiences or creative are refined, while stronger combinations receive greater support. Transparent reporting explains performance changes, completed actions, and recommended priorities, helping businesses improve Facebook advertising efficiency, scale successful campaigns, and generate sustainable results across selected markets. Regular reviews also help protect budget efficiency as audience behaviour and competition change.<br><br><strong>Key Service Features:</strong><ul style="margin-top:10px; padding-left:20px;"><li>Precise audience targeting and campaign segmentation</li><li>Creative testing, budget control, and bid optimization</li><li>Conversion tracking and performance-focused campaign reporting</li></ul>',
    cta: 'Launch My Facebook Ads Campaign →',
    reverse: false
  },
  {
    num: '02',
    title: 'Instagram Ads<br><span>Management</span>',
    desc: 'Instagram Ads help visual brands capture attention, build awareness, generate demand, and drive purchases through feeds, stories, reels, and explore placements. Webspide creates campaign strategies around your audience, products, brand identity, target markets, customer journey, and commercial goals. We define the right content formats, creative direction, audiences, budgets, and conversion actions before launch.',
    p1: 'Our team develops image, carousel, story, and short-form video advertisements with engaging hooks, clear benefits, persuasive captions, and focused calls to action. Campaigns can use demographic, interest, behavioural, lookalike, retargeting, and approved customer audiences. We also review profile consistency, landing pages, mobile experience, tracking, and offer alignment to reduce friction.',
    p2: 'Performance is evaluated through reach, video engagement, profile activity, clicks, leads, purchases, conversion rates, acquisition costs, and return on advertising spend. Creative concepts, audience segments, placements, bidding, and budgets are tested and refined continuously. This structured Instagram advertising approach helps brands improve visibility, attract relevant users, increase conversions, and scale stronger campaign combinations across regional and international markets.<br><br><strong>Key Service Features:</strong><ul style="margin-top:10px; padding-left:20px;"><li>Image, carousel, story, and reel advertising campaigns</li><li>Audience segmentation, retargeting, and creative testing</li><li>Conversion tracking and continuous performance optimization</li></ul>',
    cta: 'Start My Instagram Ads Campaign →',
    reverse: true
  },
  {
    num: '03',
    title: 'LinkedIn Ads for<br><span>B2B Growth</span>',
    desc: 'LinkedIn Ads enable B2B companies, professional service firms, recruiters, and enterprise brands to reach decision-makers through precise professional targeting. Webspide plans campaigns around your ideal customer profile, industry, company size, job function, seniority, market, sales cycle, and lead-generation goals. We align campaign structure with realistic budgets, commercial value, and measurable pipeline outcomes.',
    p1: 'Our specialists create sponsored content, document ads, video ads, conversation campaigns, lead-generation forms, and other suitable formats. Messaging is developed around business challenges, expertise, proof, and relevant offers. We manage audience segmentation, exclusions, bidding, budgets, tracking, and landing-page alignment while avoiding overly broad targeting that wastes budget or weakens lead quality.',
    p2: 'We monitor impressions, engagement, form completions, website actions, lead quality, acquisition costs, and pipeline contribution where data is available. Creative, offers, audiences, and bidding are refined using performance evidence. This B2B social media marketing approach helps organizations build authority, reach relevant professionals, generate better-qualified leads, and improve the efficiency of LinkedIn advertising across selected global markets.<br><br><strong>Key Service Features:</strong><ul style="margin-top:10px; padding-left:20px;"><li>Professional audience and decision-maker targeting</li><li>Sponsored content, video, document, and lead-form campaigns</li><li>B2B lead tracking and campaign-performance optimization</li></ul>',
    cta: 'Generate Leads with LinkedIn Ads →',
    reverse: false
  },
  {
    num: '04',
    title: 'YouTube Ads &<br><span>Video Marketing</span>',
    desc: 'YouTube Ads help businesses reach audiences through engaging video placements across search, watch pages, connected devices, and suitable partner inventory. Webspide develops video advertising strategies around your audience, campaign objective, product, market, budget, and customer journey. We identify the most suitable ad formats, messages, targeting methods, and conversion actions before launching campaigns.',
    p1: 'Our team supports skippable, non-skippable, bumper, in-feed, and action-focused video campaigns where appropriate. We plan scripts, hooks, calls to action, audience targeting, keywords, placements, frequency, bidding, and budgets. Existing video assets are reviewed for clarity, branding, pacing, and message relevance, while landing pages are aligned with the advertisement promise.',
    p2: 'Campaign performance is assessed through impressions, view rates, watch behaviour, clicks, engaged visits, conversions, acquisition costs, and brand or revenue outcomes where measurable. We test openings, lengths, audiences, placements, and calls to action to identify stronger combinations. Ongoing optimization helps businesses improve reach, brand recall, audience engagement, and conversion performance from YouTube video advertising across target markets.<br><br><strong>Key Service Features:</strong><ul style="margin-top:10px; padding-left:20px;"><li>Skippable, non-skippable, bumper, and in-feed advertising</li><li>Video creative planning and precise audience targeting</li><li>View, engagement, conversion, and campaign-cost analysis</li></ul>',
    cta: 'Launch My YouTube Ads Campaign →',
    reverse: true
  },
  {
    num: '05',
    title: 'X Ads for<br><span>Trend Engagement</span>',
    desc: 'X Ads help brands participate in timely conversations, promote launches, increase website traffic, and reach audiences around relevant interests, topics, events, and communities. Webspide develops X advertising strategies based on your brand voice, market, customer profile, communication goals, and campaign priorities. We identify suitable messages, creative formats, targeting options, budgets, and response considerations.',
    p1: 'Our team creates promoted posts, video advertisements, website campaigns, follower campaigns, and other eligible formats suited to your objectives. Targeting may use interests, keywords, conversations, follower similarities, locations, devices, retargeting, and approved customer data. We also monitor trends and brand context carefully to avoid unsuitable placements, forced participation, or messaging that could create reputation risks.',
    p2: 'Performance is reviewed through impressions, engagement, video views, profile visits, link clicks, leads, conversions, costs, and audience quality. We test copy, creative, targeting, timing, and bidding while monitoring public response. This approach helps businesses improve real-time visibility, strengthen thought leadership, engage relevant communities, and generate measurable outcomes from X advertising across selected regional and international markets.<br><br><strong>Key Service Features:</strong><ul style="margin-top:10px; padding-left:20px;"><li>Trend-based advertisements and promoted post campaigns</li><li>Interest, keyword, conversation, and retargeting audiences</li><li>Real-time performance and brand-response monitoring</li></ul>',
    cta: 'Start My X Ads Campaign →',
    reverse: false
  },
  {
    num: '06',
    title: 'Pinterest Ads for<br><span>Ecommerce & Visual Marketing</span>',
    desc: 'Pinterest Ads help ecommerce, lifestyle, design, travel, food, wellness, and visual brands reach users who are actively discovering, comparing, and planning future purchases. Webspide creates Pinterest advertising strategies around your products, audience interests, seasonal demand, search behaviour, markets, and revenue goals. We align campaign structures with visual discovery and longer customer consideration journeys.',
    p1: 'Our specialists develop promoted pins, video pins, carousel ads, shopping formats, and collection-based creative where suitable. We manage keyword, interest, demographic, actalike, retargeting, and approved customer audiences. Product feeds, board structure, pin descriptions, landing pages, tracking, bidding, and budgets are reviewed carefully to improve discoverability, message consistency, and conversion readiness across devices.',
    p2: 'We monitor impressions, saves, outbound clicks, engaged audiences, conversions, revenue, acquisition costs, and return on advertising spend. Creative styles, product groups, keywords, audiences, and placements are tested and optimized using performance data. Consistent Pinterest campaign management helps brands increase product discovery, attract qualified traffic, extend creative lifespan, and generate sustainable ecommerce growth across relevant domestic and international markets.<br><br><strong>Key Service Features:</strong><ul style="margin-top:10px; padding-left:20px;"><li>Promoted pins, video pins, carousel, and shopping advertisements</li><li>Keyword, interest, actalike, and retargeting audiences</li><li>Ecommerce tracking, feed alignment, and conversion optimization</li></ul>',
    cta: 'Launch My Pinterest Ads Campaign →',
    reverse: true
  }
];

let serviceCardsHtml = `<section class="services-section section-light" id="services">
  <div class="services-section-head">
    <div class="section-tag">What We Do</div>
    <h2 class="section-title gradient-heading">Our Social Media Marketing Services</h2>
    <p class="section-sub" style="margin-bottom:0">Performance-driven paid social campaigns engineered for precise audience targeting, creative excellence, conversion tracking, and scalable growth.</p>
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
        ${getServiceImg(item.num)}
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
      <div class="ts-badge">Tools & Platforms</div>
      <h2 class="gradient-heading">Our Social Media Marketing <span>Tools & Platforms</span></h2>
      <h3>for Social Media Marketing Services</h3>
      <p>We leverage leading advertising platforms, analytics tools, creative suites, and audience-research software to plan, execute, and optimize paid social campaigns with precision.</p>
    </div>`
);

// 7. Why Choose Us Section
const whyChooseHtml = `<div class="sections section-soft-gradient">
  <div class="left">
    <br>
    <div class="villan-badge">Why Choose Webspide</div>
    <div class="left-title gradient-heading">Why Choose<br>Webspide For<br><span class="purple">Social Media<br>Marketing<br>Services?</span></div>
    <div class="title-underline"></div>
    <p class="left-desc">Webspide combines platform expertise, audience research, creative strategy, conversion tracking, campaign management, and transparent reporting to deliver dependable social media marketing services for international businesses. We focus on qualified reach, meaningful engagement, measurable conversions, responsible budget use, and scalable growth. Every campaign is tailored to your audience, markets, goals, resources, and long-term acquisition priorities worldwide.</p>
    <div class="illustration">
      <div class="gear-left">⚙</div>
      <div class="gear-sm">⚙</div>
      <div class="code-tag">&lt;/&gt;</div>
      <div class="laptop">
        <div class="laptop-screen">
          <div class="screen-code"><span>function</span> <em>initSMM</em>() {<br>&nbsp;&nbsp;<span>const</span> ads = [];<br>&nbsp;&nbsp;<em>launchCampaign</em>(ads);<br>&nbsp;&nbsp;<span>return</span> ads;<br>}</div>
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
          <div class="feature-title">Experienced Social Media Marketing <span class="accent">Specialists</span></div>
          <p class="feature-desc">Our specialists understand audience behaviour, advertising formats, campaign objectives, bidding, creative development, conversion tracking, and platform analytics across major social channels. This connected expertise helps us identify practical growth opportunities and avoid generic tactics. Clients receive informed recommendations shaped around their industry, customer journey, budget, market conditions, and measurable commercial goals across selected international markets.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">02</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Custom-Tailored <span class="accent">Strategies</span></div>
          <p class="feature-desc">Every business has different audiences, offers, sales cycles, budgets, and platform priorities. We build customized social media marketing strategies using business objectives, market research, competitor activity, customer insights, and available data. This focused approach directs resources toward the platforms, audiences, campaigns, and creative formats most likely to improve engagement, lead quality, conversions, and sustainable business growth.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">03</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">ROI-Driven Campaign <span class="accent">Management</span></div>
          <p class="feature-desc">We connect campaign decisions with measurable outcomes such as qualified leads, purchases, registrations, revenue, acquisition costs, and return on advertising spend. Budgets, bids, audiences, placements, and creative are reviewed continuously. This performance-focused approach helps reduce avoidable waste, improve accountability, and scale campaign combinations that demonstrate stronger commercial value.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">04</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Multi-Channel Advertising <span class="accent">Expertise</span></div>
          <p class="feature-desc">Our team manages paid campaigns across Facebook, Instagram, LinkedIn, YouTube, X, and Pinterest, adapting formats and targeting to each platform. Coordinated planning maintains consistent brand communication while respecting different audience behaviours and advertising systems. This multi-channel capability helps businesses reach prospects across discovery, consideration, conversion, remarketing, and long-term customer engagement stages effectively.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">05</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Transparent Reporting &amp; <span class="accent">Communication</span></div>
          <p class="feature-desc">We provide clear reports covering campaign activity, audience performance, creative results, advertising costs, conversions, return on advertising spend, limitations, and recommended next steps. Regular communication helps stakeholders understand where budgets are being used and why changes are made. This transparency supports faster decisions, stronger collaboration, and greater confidence in ongoing campaign management.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">06</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Continuous Optimization &amp; <span class="accent">Scalable Support</span></div>
          <p class="feature-desc">Social media advertising requires continuous improvement as platforms, competitors, audiences, and costs change. We test new creative, refine targeting, adjust budgets, review landing pages, and expand successful campaigns responsibly. Our scalable support can grow with new markets, products, audiences, and investment levels while maintaining campaign quality and long-term performance direction.</p>
        </div>
      </div>
    </div>
  </div>
</div>`;

html = html.replace(/(?:<!-- WHY CHOOSE US -->\s*)?<div class="sections section-soft-gradient">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<section class="how-we-work"/s, `<!-- WHY CHOOSE US -->\n` + whyChooseHtml + `\n\n\n<section class="how-we-work"`);

// 8. How We Work Section
const workflowSection = `<section class="how-we-work" id="how-we-work">
  <div class="hww-header">
    <div class="hww-badge-top">HOW WE WORK</div>
    <h2 class="section-title gradient-heading">Our Social Media Marketing Workflow Process</h2>
    <div class="hww-sub-top">Our social media marketing workflow combines strategy, audience research, creative development, campaign execution, conversion tracking, reporting, testing, and continuous optimization to deliver measurable advertising growth.</div>
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
    <h2 class="section-title gradient-heading">Ready to Grow with Social Media Advertising?</h2>
    <p class="section-sub">Tell us about your business, target audience, preferred platforms, advertising budget, current campaign performance, and growth objectives. Our social media marketing specialists will review your requirements and recommend a practical paid campaign strategy focused on relevant reach, meaningful engagement, qualified leads, measurable conversions, and sustainable business growth.</p>
  </div>`;

html = html.replace(/<section class="contact-section section-light" id="contact">.*?<div class="contact-wrap">/s, contactHead + '\n  <div class="contact-wrap">');

// 10. JavaScript Services Array (6 items)
const jsServices = `  const SERVICES=[
    {num:'01',name:'Facebook Ads Management',tag:'Awareness, lead-generation, ecommerce, and remarketing campaigns',label:'Facebook Ads',svg:'<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',target:'svc-card-1'},
    {num:'02',name:'Instagram Ads Management',tag:'Image, carousel, story, and reel advertising campaigns',label:'Instagram Ads',svg:'<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',target:'svc-card-2'},
    {num:'03',name:'LinkedIn Ads for B2B Growth',tag:'Professional audience targeting and lead-generation forms',label:'LinkedIn Ads',svg:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',target:'svc-card-3'},
    {num:'04',name:'YouTube Ads & Video Marketing',tag:'Skippable, non-skippable, bumper, and in-feed video advertising',label:'YouTube Ads',svg:'<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>',target:'svc-card-4'},
    {num:'05',name:'X Ads for Trend Engagement',tag:'Promoted posts, video ads, and real-time audience targeting',label:'X Ads',svg:'<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>',target:'svc-card-5'},
    {num:'06',name:'Pinterest Ads for Ecommerce & Visual Marketing',tag:'Promoted pins, carousel ads, and shopping campaigns',label:'Pinterest Ads',svg:'<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>',target:'svc-card-6'}
  ];`;

html = html.replace(/const SERVICES=\[\s*\{num:'01'.*?\];/s, jsServices);

// 11. JavaScript Workflow Steps Array (6 steps with images)
const jsSteps = `  const steps=[
    {num:'01',label:'Campaign Strategy & Business Analysis',title:'Campaign Strategy & Business Analysis',desc:'We begin by understanding your business, offers, target audience, markets, competitors, customer journey, advertising budget, and campaign objectives. This stage establishes the strategic direction, platform priorities, performance expectations, and measurement framework.',subs:[{title:'Business & Campaign Analysis',desc:'We analyse your business, offers, competitors, audience, and commercial objectives.',icon:'<path d="M3 3h18v18H3zM3 9h18M9 21V9"/>'},{title:'Platform Selection',desc:'We select platforms according to audience relevance and campaign goals.',icon:'<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>'},{title:'Campaign Objective Planning',desc:'We define awareness, engagement, lead, sales, and revenue objectives clearly.',icon:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>'},{title:'KPI & Budget Planning',desc:'We establish budgets, performance targets, tracking needs, and success indicators.',icon:'<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>'}],deliverables:['Approved social media marketing strategy','Platform and competitor analysis','Campaign objectives and budget framework','Performance indicators and measurement plan'],illus:'<img src="Images/Webspide-Images_/Digital Marketting/social-media-marketing-services/Workflow/social-media-marketing-services-campaign-strategy-business-analysis.webp" alt="Campaign Strategy & Business Analysis" style="width:100%;height:auto;display:block;border:none;outline:none;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);background:transparent;">' },
    {num:'02',label:'Audience Research & Technical Setup',title:'Audience Research & Technical Setup',desc:'We research the people most likely to engage with your business and configure the advertising accounts, tracking systems, audiences, permissions, and campaign foundations required for accurate implementation.',subs:[{title:'Audience Research',desc:'We identify customer demographics, interests, behaviours, locations, and motivations carefully.',icon:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>'},{title:'Audience Segmentation',desc:'We organize prospecting, retargeting, lookalike, and customer audience groups strategically.',icon:'<circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>'},{title:'Account & Platform Setup',desc:'We configure advertising accounts, permissions, billing, and essential platform settings.',icon:'<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>'},{title:'Conversion Tracking Setup',desc:'We configure pixels, events, analytics, and measurable conversion actions correctly.',icon:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>'}],deliverables:['Detailed audience research and segmentation plan','Configured social advertising accounts','Retargeting and customer-audience structure','Conversion-tracking and analytics framework'],illus:'<img src="Images/Webspide-Images_/Digital Marketting/social-media-marketing-services/Workflow/social-media-marketing-services-audience-research-technical-setup.webp" alt="Audience Research & Technical Setup" style="width:100%;height:auto;display:block;border:none;outline:none;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);background:transparent;">' },
    {num:'03',label:'Creative Development & Campaign Planning',title:'Creative Development & Campaign Planning',desc:'Our strategists, copywriters, and designers transform the approved campaign direction into platform-specific advertisements, visual concepts, messages, offers, landing-page requirements, and campaign structures.',subs:[{title:'Ad Copywriting',desc:'We create persuasive headlines, captions, descriptions, and calls to action.',icon:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>'},{title:'Creative Asset Development',desc:'We produce platform-specific images, carousels, videos, and supporting visuals.',icon:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>'},{title:'Campaign Structure Planning',desc:'We organize campaigns, advertisement groups, audiences, placements, and budget priorities.',icon:'<path d="M3 3h18v18H3zM3 9h18M9 21V9"/>'},{title:'Landing-Page Alignment',desc:'We strengthen message relevance, usability, trust, and conversion clarity throughout.',icon:'<rect x="2" y="3" width="20" height="14" rx="2"/>'}],deliverables:['Approved advertisement copy and messaging','Platform-specific visual and video assets','Complete campaign and advertisement structure','Landing-page improvement recommendations'],illus:'<img src="Images/Webspide-Images_/Digital Marketting/social-media-marketing-services/Workflow/social-media-marketing-services-creative-development-campaign-planning.webp" alt="Creative Development & Campaign Planning" style="width:100%;height:auto;display:block;border:none;outline:none;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);background:transparent;">' },
    {num:'04',label:'Testing & Performance Optimization',title:'Testing & Performance Optimization',desc:'Before full campaign activation, we review creative, audiences, settings, tracking, placements, budgets, and destination pages. Controlled tests help identify stronger combinations and reduce preventable advertising waste.',subs:[{title:'Creative Testing',desc:'We compare headlines, visuals, videos, formats, offers, and calls-to-action systematically.',icon:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>'},{title:'Audience Testing',desc:'We test audience segments, exclusions, locations, interests, and behaviours carefully.',icon:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>'},{title:'Bid & Budget Review',desc:'We confirm bidding approaches, spending limits, priorities, and allocation rules.',icon:'<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>'},{title:'Tracking Validation',desc:'We verify conversion events, values, analytics, and attribution settings accurately.',icon:'<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'}],deliverables:['Campaign quality-assurance checklist','Approved creative and audience testing plan','Verified bidding and budget structure','Validated conversion-tracking setup'],illus:'<img src="Images/Webspide-Images_/Digital Marketting/social-media-marketing-services/Workflow/social-media-marketing-services-testing-performance-optimization.webp" alt="Testing & Performance Optimization" style="width:100%;height:auto;display:block;border:none;outline:none;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);background:transparent;">' },
    {num:'05',label:'Campaign Launch & Monitoring',title:'Campaign Launch & Monitoring',desc:'After approval, campaigns are launched across the selected social platforms. We monitor delivery, spending, audience response, creative performance, conversion activity, and technical concerns to support timely optimization.',subs:[{title:'Campaign Activation',desc:'We launch approved campaigns across selected social media advertising platforms.',icon:'<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>'},{title:'Delivery Monitoring',desc:'We monitor reach, frequency, impressions, clicks, spending, and campaign status.',icon:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>'},{title:'Conversion Monitoring',desc:'We track leads, purchases, registrations, revenue, and other valuable actions.',icon:'<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'},{title:'Initial Optimization',desc:'We refine audiences, creative, placements, bidding, and budgets using performance.',icon:'<polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>'}],deliverables:['Successfully launched paid social campaigns','Initial delivery and spending report','Conversion and audience-performance review','Early campaign optimization actions'],illus:'<img src="Images/Webspide-Images_/Digital Marketting/social-media-marketing-services/Workflow/social-media-marketing-services-campaign-launch-monitoring.webp" alt="Campaign Launch & Monitoring" style="width:100%;height:auto;display:block;border:none;outline:none;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);background:transparent;">' },
    {num:'06',label:'Reporting, Scaling & Continuous Improvement',title:'Reporting, Scaling & Continuous Improvement',desc:'We analyse campaign results, communicate performance clearly, and refine future priorities using reliable audience, advertising, conversion, and revenue data. Successful campaigns are expanded responsibly while inefficient activity is corrected.',subs:[{title:'Performance Analysis',desc:'We evaluate engagement, conversions, acquisition costs, revenue, and audience quality.',icon:'<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><polyline points="3 20 21 20"/>'},{title:'Transparent Reporting',desc:'We explain completed work, results, limitations, and recommendations in detail.',icon:'<rect x="3" y="4" width="18" height="16" rx="2"/><line x1="7" y1="8" x2="17" y2="8"/>'},{title:'Continuous Optimization',desc:'We improve creative, targeting, bidding, budgets, and landing-page experiences continuously.',icon:'<polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>'},{title:'Campaign Scaling',desc:'We expand successful campaigns across audiences, platforms, products, or markets.',icon:'<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>'}],deliverables:['Detailed social advertising performance report','Updated campaign optimization plan','Budget and scaling recommendations','Continuous testing and growth roadmap'],illus:'<img src="Images/Webspide-Images_/Digital Marketting/social-media-marketing-services/Workflow/social-media-marketing-services-reporting-scaling-continuous-improvement.webp" alt="Reporting, Scaling & Continuous Improvement" style="width:100%;height:auto;display:block;border:none;outline:none;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);background:transparent;">' }
  ];`;

html = html.replace(/const SERVICES=\[\s*\{num:'01'.*?\];[\s\S]*?const steps=\[\s*\{num:'01'[\s\S]*?\];/s, (match) => {
  // Replace the services array part already replaced above, now just replace steps
  return match;
});

html = html.replace(/const steps=\[\s*\{num:'01'[\s\S]*?\];/s, jsSteps);

// Write final file
fs.writeFileSync(targetPath, html, 'utf8');
console.log('✅ Successfully generated indexsmmarket1.html with Social Media Marketing content and images!');
