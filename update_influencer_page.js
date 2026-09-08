const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, 'indexapp1.html');
const targetPath = path.join(__dirname, 'indexinfluence1.html');

let html = fs.readFileSync(templatePath, 'utf8');

// 1. Meta / Head Title & Meta tags
html = html.replace(
  /<title>.*?<\/title>/s,
  '<title>Influencer Marketing Services Agency | Webspide</title>'
);

html = html.replace(
  /<meta name="description"\s+content=".*?">/s,
  '<meta name="description"\n        content="Grow brand awareness, engagement, and conversions with Webspide’s influencer marketing services across Instagram, YouTube, TikTok, LinkedIn, Facebook, and X.">'
);

html = html.replace(
  /<meta name="keywords"\s+content=".*?">/s,
  '<meta name="keywords"\n        content="Influencer marketing services, Influencer marketing agency, Influencer marketing company, Influencer marketing campaign, Influencer marketing strategy, Social media influencer marketing, Instagram influencer marketing, YouTube influencer marketing, TikTok influencer marketing, Facebook influencer marketing, LinkedIn influencer marketing, B2B influencer marketing, Micro-influencer marketing, Influencer campaign management, Influencer marketing solutions">'
);

// 2. Hero Section
html = html.replace(
  /<div class="badge fade-in">.*?<\/div>/s,
  '<div class="badge fade-in">Influencer Marketing Services</div>'
);

html = html.replace(
  /<h1 class="fade-in delay-1">.*?<\/h1>/s,
  `<h1 class="fade-in delay-1">
      <span class="grad">INFLUENCER MARKETING</span>
      <span class="grad">SERVICES</span>
      <span class="outline">Drive Engagement</span>
    </h1>`
);

html = html.replace(
  /<p class="hero-desc fade-in delay-2">.*?<\/p>/s,
  '<p class="hero-desc fade-in delay-2">Webspide creates strategic influencer marketing campaigns for startups, enterprises, ecommerce brands, and global organizations. Our services cover creator discovery, campaign planning, content coordination, platform execution, compliance, tracking, and reporting. We connect brands with relevant influencers across Instagram, YouTube, TikTok, Facebook, LinkedIn, and X to build trust, engagement, visibility, and measurable growth.</p>'
);

// 3. Orbit Cards Mobile (6 items)
const mobileOrbitCards = `<div class="orbit-cards-mobile">
  <a href="#svc-card-1" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></div><div><div class="orb-card-name">Instagram</div><div class="orb-card-tag">Visual & Reel Campaigns</div></div></a>
  <a href="#svc-card-2" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg></div><div><div class="orb-card-name">YouTube</div><div class="orb-card-tag">Video Reviews & Shorts</div></div></a>
  <a href="#svc-card-3" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg></div><div><div class="orb-card-name">TikTok</div><div class="orb-card-tag">Short-form Viral Content</div></div></a>
  <a href="#svc-card-4" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></div><div><div class="orb-card-name">Facebook</div><div class="orb-card-tag">Community & Live Outreach</div></div></a>
  <a href="#svc-card-5" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></div><div><div class="orb-card-name">LinkedIn</div><div class="orb-card-tag">B2B Thought Leadership</div></div></a>
  <a href="#svc-card-6" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg></div><div><div class="orb-card-name">X (Twitter)</div><div class="orb-card-tag">Real-time Conversations</div></div></a>
</div>`;

html = html.replace(/<div class="orbit-cards-mobile">.*?<\/div>\s*<!-- BANNER 1 -->/s, mobileOrbitCards + '\n\n<!-- BANNER 1 -->');

// 4. Banner 1 & Banner 2 replacement
const bannersFullContent = `<!-- BANNER 1 -->
<div class="banner banner-1 section-soft-gradient">
  <div class="b1-right-line"></div>
  <div class="b1-corner-dot tl"></div><div class="b1-corner-dot tr"></div><div class="b1-corner-dot bl"></div><div class="b1-corner-dot br"></div>
  <div class="b1-content">
    <div class="b1-header">
      <div class="b1-title gradient-heading">Drive Engagement with<span>Powerful Influencer Campaigns</span></div>
      <p class="b1-desc">Influencer marketing helps brands reach audiences through credible creators and platform-native content. Webspide plans and manages campaigns across Instagram, YouTube, TikTok, Facebook, LinkedIn, and X. Our influencer marketing services combine audience research, creator selection, content direction, campaign coordination, compliance, performance tracking, and continuous optimization to support meaningful business results.</p>
    </div>
    <div class="b1-cards">
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg></div><div class="b1-card-title">Strategic Campaign Planning</div></div><p class="b1-card-desc">We translate your business objectives into a structured influencer marketing plan covering target audiences, platforms, creator profiles, content formats, timelines, budgets, approvals, and performance indicators. Every decision is aligned with measurable campaign outcomes across selected international markets.</p></div>
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><div class="b1-card-title">Targeted Influencer Selection</div></div><p class="b1-card-desc">Our team evaluates creators based on audience relevance, engagement quality, content style, brand alignment, platform presence, authenticity, and previous collaborations. This careful selection process supports more credible partnerships and stronger connections with your intended customers.</p></div>
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><polyline points="3 20 21 20"/></svg></div><div class="b1-card-title">Performance-Driven Approach</div></div><p class="b1-card-desc">We monitor reach, views, engagement, clicks, leads, conversions, content performance, and creator effectiveness throughout the campaign. These insights help us refine messaging, distribution, partnerships, and future influencer marketing strategies for improved results across future campaigns.</p></div>
    </div>
  </div>
</div>

<!-- BANNER 2 -->
<div class="banner banner-2 section-soft-gradient">
  <div class="b2-content">
    <div class="b2-cards">
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div><div class="b2-card-title">Multi-Platform Reach</div></div><p class="b1-card-desc">Webspide plans influencer campaigns across Instagram, YouTube, TikTok, Facebook, LinkedIn, and X according to audience behavior and campaign objectives. Each platform receives suitable formats, messaging, creator partnerships, and measurement methods for stronger performance across target markets.</p></div>
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><div class="b2-card-title">Authenticity &amp; Brand Trust</div></div><p class="b1-card-desc">We prioritize influencers whose voice, audience, and content naturally align with your brand. Clear briefs and responsible collaboration help creators communicate authentically, protect brand credibility, and build trust without making the promotion feel forced to intended audiences.</p></div>
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg></div><div class="b2-card-title">Seamless Execution &amp; Reporting</div></div><p class="b1-card-desc">Our team coordinates outreach, negotiation, content briefs, approvals, publishing schedules, tracking, and reporting. This end-to-end campaign management reduces operational pressure while giving stakeholders clear visibility into progress, performance, risks, and recommended next steps throughout every campaign stage.</p></div>
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
    title: 'Instagram Influencer<br><span>Marketing</span>',
    desc: 'Instagram influencer marketing helps brands reach visually engaged audiences through creator-led content that feels relevant to the platform. Webspide identifies suitable influencers based on audience fit, content quality, engagement patterns, niche relevance, geographic reach, and brand compatibility. We plan campaigns around specific objectives such as awareness, product discovery, website traffic, community growth, lead generation, or sales.',
    p1: 'Our team coordinates formats including Reels, Stories, carousel posts, sponsored content, creator demonstrations, giveaways, and user-generated content. Campaign briefs define key messages, brand requirements, disclosures, calls to action, timelines, and approval processes without removing the creator’s natural voice. This balance supports clearer communication and more authentic audience response.',
    p2: 'We manage outreach, collaboration, content review, publishing schedules, tracking, and performance reporting. Metrics may include reach, views, engagement, profile activity, clicks, enquiries, conversions, and creator effectiveness. Insights from each campaign help improve future Instagram influencer marketing strategies, strengthen suitable partnerships, and identify content formats that support measurable brand growth across target markets while maintaining consistent messaging and responsible promotional practices. Detailed reporting also supports stakeholder review and future budget allocation.',
    cta: 'Start Your Instagram Campaign →',
    reverse: false
  },
  {
    num: '02',
    title: 'YouTube Influencer<br><span>Marketing</span>',
    desc: 'YouTube influencer marketing gives brands space to explain products, demonstrate services, and build credibility through detailed video content. Webspide connects businesses with relevant creators whose audiences, topics, presentation style, location, and engagement quality align with campaign goals. We develop strategies for awareness, education, product consideration, lead generation, website traffic, and conversions.',
    p1: 'Campaign formats can include sponsored integrations, dedicated reviews, tutorials, unboxing videos, comparisons, interviews, livestreams, and YouTube Shorts. We prepare clear briefs covering essential messages, product information, disclosure requirements, links, calls to action, timelines, and approval expectations. Creators retain enough flexibility to communicate naturally while protecting brand accuracy and campaign consistency.',
    p2: 'Our YouTube influencer marketing services include creator outreach, collaboration coordination, content review, publishing support, tracking, and reporting. We assess views, watch time, engagement, link activity, audience response, conversions, and creator performance where data is available. These insights help refine future video partnerships, improve content direction, and identify creators who can support sustainable brand visibility, trust, and customer acquisition across relevant international markets without relying on one-off exposure alone. Reporting also supports budget planning and future creator selection.',
    cta: 'Launch Your YouTube Campaign →',
    reverse: true
  },
  {
    num: '03',
    title: 'TikTok Influencer<br><span>Marketing</span>',
    desc: 'TikTok influencer marketing helps brands participate in fast-moving cultural conversations through short-form creator content. Webspide identifies creators whose audience, personality, content style, niche, geography, and engagement quality match the brand and campaign objective. We develop platform-specific plans for awareness, product discovery, community participation, traffic, app installs, lead generation, or sales.',
    p1: 'Content formats may include creator demonstrations, challenges, tutorials, product reactions, storytelling, trend participation, live content, and user-generated videos. Our briefs establish key facts, brand guidelines, disclosures, calls to action, timelines, and approval requirements while allowing creators to use language and formats that suit their communities. This supports relevance without losing message accuracy.',
    p2: 'We coordinate influencer outreach, campaign scheduling, content reviews, publishing, tracking, and performance analysis. Depending on access and objectives, reporting can cover views, completion rates, engagement, shares, clicks, conversions, audience response, and creator effectiveness. Campaign insights guide future TikTok influencer marketing decisions, helping brands strengthen successful creative formats, refine partnerships, and expand reach responsibly across younger, interest-driven, and highly engaged audience communities in selected markets. Reporting supports future creative testing, budget allocation, and creator selection.',
    cta: 'Start Your TikTok Campaign →',
    reverse: false
  },
  {
    num: '04',
    title: 'Facebook Influencer<br><span>Marketing</span>',
    desc: 'Facebook influencer marketing can help brands reach established communities through creators, public figures, niche pages, groups, and live content. Webspide evaluates audience relevance, engagement quality, content style, geographic reach, credibility, and brand alignment before recommending partnerships. Campaign goals may include awareness, community engagement, event promotion, website visits, enquiries, lead generation, or sales.',
    p1: 'We coordinate sponsored posts, videos, livestreams, group collaborations, creator testimonials, product demonstrations, and campaign content that can support organic or paid distribution. Briefs cover core messages, visual requirements, disclosures, calls to action, publishing timelines, and approval processes. Creators are encouraged to communicate naturally while keeping claims, offers, and brand information accurate.',
    p2: 'Our Facebook influencer marketing services include outreach, creator coordination, content review, scheduling, tracking, and reporting. We measure available indicators such as reach, video views, reactions, comments, shares, clicks, enquiries, conversions, and creator performance. These insights help brands understand which communities, formats, and partnerships produce meaningful response, allowing future campaigns to improve targeting, message relevance, engagement quality, and return across local, regional, or international audiences. Clear reporting also supports future planning and budget allocation.',
    cta: 'Boost Your Facebook Reach →',
    reverse: true
  },
  {
    num: '05',
    title: 'LinkedIn Influencer<br><span>Marketing</span>',
    desc: 'LinkedIn influencer marketing helps B2B brands build credibility, reach professional audiences, and participate in industry conversations. Webspide identifies subject-matter experts, founders, executives, analysts, creators, and respected professionals whose audience, expertise, communication style, and market relevance align with your objectives. Campaigns can support thought leadership, brand awareness, employer branding, event promotion, lead generation, and account engagement.',
    p1: 'Content may include expert posts, articles, interviews, newsletters, videos, webinars, live sessions, event collaborations, research commentary, and executive partnerships. We prepare briefs covering business context, key messages, evidence, disclosures, calls to action, timelines, and approval requirements. The content is shaped to provide professional value rather than appearing as an unrelated promotional interruption.',
    p2: 'Our LinkedIn influencer marketing services manage discovery, outreach, coordination, content review, publishing schedules, tracking, and reporting. We assess impressions, engagement, follower quality, profile activity, clicks, registrations, leads, and creator effectiveness where possible. Campaign insights help brands strengthen credible voices, refine B2B content, and build longer-term relationships with decision-makers, professionals, partners, and industry communities across selected global markets. Reporting also supports stakeholder review, budget planning, and future creator selection.',
    cta: 'Grow with LinkedIn Influencers →',
    reverse: false
  },
  {
    num: '06',
    title: 'X (Twitter) Influencer<br><span>Marketing</span>',
    desc: 'X influencer marketing helps brands join timely conversations, share concise messages, and engage audiences around news, expertise, products, events, and cultural moments. Webspide identifies relevant creators and commentators based on topic authority, audience quality, engagement patterns, geographic reach, communication style, and brand suitability. Campaigns may support awareness, launches, event visibility, community interaction, traffic, and lead generation.',
    p1: 'Content formats can include sponsored posts, threads, product mentions, polls, Spaces, live commentary, event participation, and coordinated hashtag conversations. We create campaign briefs covering essential messages, links, disclosures, timing, calls to action, and approval requirements. Because conversations move quickly, our planning also considers response management, brand safety, and the context surrounding scheduled content.',
    p2: 'Our team manages outreach, creator coordination, publishing schedules, monitoring, and performance reporting. We review impressions, engagement, reposts, replies, link clicks, mentions, audience sentiment, conversions, and creator effectiveness where available. These insights help refine future X influencer marketing campaigns, improve timing and message relevance, and identify credible voices that can support sustained brand visibility across professional, consumer, and interest-based communities. Clear reporting supports future planning, risk review, and budget allocation.',
    cta: 'Start Your X Influencer Campaign →',
    reverse: true
  }
];

let serviceCardsHtml = `<section class="services-section section-light" id="services">
  <div class="services-section-head">
    <div class="section-tag">What We Do</div>
    <h2 class="section-title gradient-heading">Our Influencer Marketing Services</h2>
    <p class="section-sub" style="margin-bottom:0">Data-driven influencer strategies engineered across Instagram, YouTube, TikTok, Facebook, LinkedIn, and X for maximum brand reach and ROI.</p>
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
      <div class="ts-badge">Platforms & Networks</div>
      <h2 class="gradient-heading">Our Influencer Marketing <span>Platforms & Channels</span></h2>
      <h3>for Influencer Marketing Services</h3>
      <p>We select relevant creator platforms, analytics tools, and outreach networks according to each campaign's target audience and goals.</p>
    </div>`
);

// 7. Why Choose Us Section
const whyChooseHtml = `<div class="sections section-soft-gradient">
  <div class="left">
    <br>
    <div class="villan-badge">Why Choose Webspide</div>
    <div class="left-title gradient-heading">Why Choose<br>Webspide For<br><span class="purple">Influencer Marketing<br>Services?</span></div>
    <div class="title-underline"></div>
    <p class="left-desc">Webspide combines audience research, creator discovery, campaign strategy, content coordination, and transparent reporting to deliver influencer marketing services for international brands. We focus on authentic partnerships, brand safety, measurable performance, and long-term value. From selecting suitable influencers through campaign execution and optimization, every stage is managed around your audience, platforms, objectives, budget, and reputation internationally.</p>
    <div class="illustration">
      <div class="gear-left">⚙</div>
      <div class="gear-sm">⚙</div>
      <div class="code-tag">&lt;/&gt;</div>
      <div class="laptop">
        <div class="laptop-screen">
          <div class="screen-code"><span>function</span> <em>initInfluencer</em>() {<br>&nbsp;&nbsp;<span>const</span> creators = [];<br>&nbsp;&nbsp;<em>launchCampaign</em>(creators);<br>&nbsp;&nbsp;<span>return</span> creators;<br>}</div>
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
          <div class="feature-title">Data-Driven Campaign <span class="accent">Strategy</span></div>
          <p class="feature-desc">We use audience insights, platform data, competitor activity, creator performance, and campaign objectives to guide decisions. This research helps us choose suitable channels, content formats, influencers, timelines, and measurement criteria. Every influencer marketing strategy is built around practical evidence, allowing campaigns to remain focused, adaptable, and connected to meaningful brand and business outcomes consistently across active markets.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">02</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Relevant Creator <span class="accent">Network</span></div>
          <p class="feature-desc">Our influencer discovery process covers creators across industries, audience sizes, content styles, platforms, and geographic markets. We assess relevance, engagement quality, authenticity, previous partnerships, and brand suitability before recommending collaboration. This approach helps clients work with creators who can communicate credibly and reach intended audiences effectively.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">03</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">End-to-End Campaign <span class="accent">Management</span></div>
          <p class="feature-desc">Webspide coordinates the complete influencer marketing campaign, including planning, outreach, negotiation support, briefing, content approvals, publishing schedules, tracking, and reporting. One connected process reduces communication gaps and operational pressure, ensuring consistent campaign standards professionally.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">04</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Performance &amp; ROI <span class="accent">Optimization</span></div>
          <p class="feature-desc">We monitor campaign indicators such as reach, views, engagement, clicks, leads, conversions, content quality, and creator effectiveness. Performance insights guide timely improvements and future campaign decisions, using suitable indicators to evaluate awareness, engagement, and overall campaign contribution accurately.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">05</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Multi-Platform Campaign <span class="accent">Expertise</span></div>
          <p class="feature-desc">Our team understands the different audiences, formats, behaviors, and strengths of Instagram, YouTube, TikTok, Facebook, LinkedIn, and X. Campaigns are adapted to each platform rather than duplicated without context, supporting stronger relevance, engagement, and campaign consistency worldwide.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">06</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Transparent &amp; Responsible <span class="accent">Partnerships</span></div>
          <p class="feature-desc">We prioritize clear communication, content approvals, disclosure requirements, brand safety, audience authenticity, and responsible campaign practices. Influencer relationships are managed with defined expectations and documented deliverables to protect brand reputation and create professional partnerships.</p>
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
    <h2 class="section-title gradient-heading">Our Influencer Marketing Workflow Process</h2>
    <div class="hww-sub-top">Our influencer marketing workflow combines strategy, creator discovery, content collaboration, campaign execution, performance analysis, and continuous optimization to deliver authentic partnerships and measurable brand growth.</div>
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
    <h2 class="section-title gradient-heading">Ready to Launch an Influencer Marketing Campaign?</h2>
    <p class="section-sub">Tell us about your brand, audience, products, target platforms, markets, and campaign objectives. Our team will review your requirements and recommend a practical influencer marketing strategy focused on authentic creator partnerships, audience engagement, brand visibility, and measurable results.</p>
  </div>`;

html = html.replace(/<section class="contact-section section-light" id="contact">.*?<div class="contact-wrap">/s, contactHead + '\n  <div class="contact-wrap">');

// 10. JavaScript Services Array (6 items)
const jsServices = `  const SERVICES=[
    {num:'01',name:'Instagram Influencer Marketing',tag:'Reels, Stories, sponsored posts, creator demos, and authentic visual campaigns',label:'Instagram',svg:'<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',target:'svc-card-1'},
    {num:'02',name:'YouTube Influencer Marketing',tag:'Sponsored integrations, in-depth reviews, tutorials, unboxing, and Shorts',label:'YouTube',svg:'<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>',target:'svc-card-2'},
    {num:'03',name:'TikTok Influencer Marketing',tag:'Short-form creator content, challenges, trend participation, and viral videos',label:'TikTok',svg:'<path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>',target:'svc-card-3'},
    {num:'04',name:'Facebook Influencer Marketing',tag:'Community creators, group collaborations, live streams, and niche outreach',label:'Facebook',svg:'<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',target:'svc-card-4'},
    {num:'05',name:'LinkedIn Influencer Marketing',tag:'B2B thought leadership, founder/executive partnerships, and industry experts',label:'LinkedIn',svg:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',target:'svc-card-5'},
    {num:'06',name:'X (Twitter) Influencer Marketing',tag:'Real-time commentary, sponsored threads, event visibility, and hashtag trends',label:'X (Twitter)',svg:'<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>',target:'svc-card-6'}
  ];`;

html = html.replace(/const SERVICES=\[\s*\{num:'01'.*?\];/s, jsServices);

// 11. JavaScript Workflow Steps Array
const jsSteps = `  const steps=[
    {num:'01',label:'Campaign Strategy & Audience Analysis',title:'Campaign Strategy & Audience Analysis',desc:'We begin by understanding your brand, audience, products, campaign objectives, target markets, platform priorities, budget, timelines, and measurement requirements. This stage creates the strategic foundation for relevant influencer partnerships and effective campaign execution.',subs:[{title:'Business & Campaign Analysis',desc:'We analyse your brand, objectives, products, audience, and markets.',icon:'<path d="M3 3h18v18H3zM3 9h18M9 21V9"/>'},{title:'Audience Research',desc:'We identify customer interests, behaviours, platforms, and content preferences.',icon:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>'},{title:'Platform Selection',desc:'We select suitable platforms based on audiences and campaign objectives.',icon:'<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'},{title:'KPI & Budget Planning',desc:'We define budgets, timelines, deliverables, metrics, and success indicators.',icon:'<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>'}],deliverables:['Approved influencer marketing strategy','Target-audience and platform analysis','Campaign budget and timeline','Performance indicators and measurement plan'],illus:'<svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="180" height="120" rx="12" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.3)" stroke-width="1.5"/><circle cx="110" cy="80" r="40" fill="rgba(192,132,252,0.12)" stroke="#c084fc" stroke-width="1.5"/><line x1="110" y1="50" x2="110" y2="80" stroke="#c084fc" stroke-width="2" stroke-linecap="round"/><circle cx="110" cy="80" r="4" fill="#c084fc"/><text x="110" y="140" text-anchor="middle" fill="rgba(192,132,252,0.7)" font-size="10" font-family="Orbitron,sans-serif">STRATEGY</text></svg>' },
    {num:'02',label:'Influencer Discovery & Selection',title:'Influencer Discovery & Selection',desc:'We research creators who match your industry, audience, brand positioning, campaign objective, geographic market, and preferred content formats. Each shortlisted influencer is evaluated before collaboration recommendations are presented.',subs:[{title:'Creator Research',desc:'We identify relevant creators across selected platforms and markets.',icon:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>'},{title:'Audience Quality Review',desc:'We assess follower relevance, engagement patterns, and audience authenticity.',icon:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>'},{title:'Brand Compatibility Check',desc:'We review content style, values, reputation, and previous partnerships.',icon:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'},{title:'Collaboration Planning',desc:'We define creator roles, deliverables, timelines, and communication requirements.',icon:'<rect x="3" y="4" width="18" height="16" rx="2"/><line x1="7" y1="8" x2="17" y2="8"/><line x1="7" y1="12" x2="13" y2="12"/>'}],deliverables:['Shortlisted influencer recommendations','Creator and audience evaluation','Brand-suitability assessment','Proposed collaboration and deliverable plan'],illus:'<svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="180" height="120" rx="12" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.3)" stroke-width="1.5"/><rect x="50" y="45" width="120" height="70" rx="8" fill="rgba(192,132,252,0.12)" stroke="#c084fc" stroke-width="1.5"/><path d="M50 45 L110 90 L170 45" stroke="#7ba4d4" stroke-width="2"/><text x="110" y="140" text-anchor="middle" fill="rgba(192,132,252,0.7)" font-size="10" font-family="Orbitron,sans-serif">DISCOVERY</text></svg>' },
    {num:'03',label:'Content Planning & Collaboration',title:'Content Planning & Collaboration',desc:'We work with selected creators to develop platform-appropriate content that communicates your brand message naturally. Clear guidelines protect accuracy, compliance, and campaign consistency without removing the creator’s individual voice.',subs:[{title:'Campaign Briefing',desc:'We prepare messages, objectives, deliverables, timelines, and brand guidelines.',icon:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>'},{title:'Content Format Planning',desc:'We select suitable videos, posts, Stories, livestreams, or articles.',icon:'<rect x="2" y="3" width="20" height="14" rx="2"/>'},{title:'Creator Coordination',desc:'We manage communication, questions, requirements, revisions, and approvals.',icon:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>'},{title:'Compliance & Disclosure Guidance',desc:'We define sponsorship disclosures, usage rights, and brand-safety requirements.',icon:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'}],deliverables:['Approved creator campaign brief','Content formats and publishing schedule','Brand, disclosure, and approval guidelines','Finalized creator content plan'],illus:'<svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="180" height="120" rx="12" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.3)" stroke-width="1.5"/><rect x="60" y="45" width="100" height="70" rx="6" fill="rgba(192,132,252,0.12)" stroke="#c084fc" stroke-width="1.5"/><line x1="70" y1="60" x2="150" y2="60" stroke="#7ba4d4" stroke-width="2"/><line x1="70" y1="75" x2="130" y2="75" stroke="rgba(192,132,252,0.6)" stroke-width="2"/><rect x="70" y="90" width="40" height="15" rx="3" fill="#c084fc"/><text x="110" y="140" text-anchor="middle" fill="rgba(192,132,252,0.7)" font-size="10" font-family="Orbitron,sans-serif">CREATIVE</text></svg>' },
    {num:'04',label:'Campaign Execution & Monitoring',title:'Campaign Execution & Monitoring',desc:'Once content is approved, we coordinate publishing across selected creators and platforms. Campaign activity is monitored to verify delivery, audience response, brand accuracy, compliance, and early performance indicators.',subs:[{title:'Content Publishing',desc:'We coordinate approved content across scheduled platforms and creators.',icon:'<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>'},{title:'Delivery Verification',desc:'We confirm publishing dates, formats, links, tags, and disclosures.',icon:'<polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>'},{title:'Engagement Monitoring',desc:'We track audience reactions, questions, comments, and content response.',icon:'<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>'},{title:'Performance Optimization',desc:'We refine timing, messaging, distribution, or supporting activity where appropriate.',icon:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>'}],deliverables:['Published influencer campaign content','Verified links, tags, and disclosures','Live campaign monitoring report','Documented optimization actions'],illus:'<svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="180" height="120" rx="12" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.3)" stroke-width="1.5"/><path d="M40 100 L180 100" stroke="rgba(139,92,246,0.3)" stroke-width="2"/><line x1="60" y1="100" x2="150" y2="40" stroke="#c084fc" stroke-width="2.5" stroke-linecap="round"/><circle cx="150" cy="40" r="6" fill="#c084fc"/><text x="110" y="140" text-anchor="middle" fill="rgba(192,132,252,0.7)" font-size="10" font-family="Orbitron,sans-serif">EXECUTION</text></svg>' },
    {num:'05',label:'Reporting & Performance Analysis',title:'Reporting & Performance Analysis',desc:'We consolidate available campaign data to assess creator delivery, content quality, audience engagement, traffic, leads, conversions, and overall contribution. Results are explained clearly with measurement limitations identified where necessary.',subs:[{title:'Engagement Analysis',desc:'We evaluate views, reach, reactions, comments, shares, and completion.',icon:'<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>'},{title:'Traffic & Conversion Review',desc:'We assess clicks, enquiries, registrations, leads, and attributed conversions.',icon:'<path d="M15 3h6v6"/><path d="M10 14L21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>'},{title:'Creator Performance Evaluation',desc:'We compare creator effectiveness, content quality, relevance, and campaign delivery.',icon:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>'},{title:'Stakeholder Reporting',desc:'We present results, observations, limitations, and recommended future actions.',icon:'<rect x="3" y="4" width="18" height="16" rx="2"/>'}],deliverables:['Influencer campaign performance report','Creator and content comparison','Engagement and conversion analysis','Recommendations for future campaigns'],illus:'<svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="180" height="120" rx="12" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.3)" stroke-width="1.5"/><rect x="40" y="70" width="25" height="50" rx="3" fill="rgba(59,92,200,0.4)"/><rect x="75" y="50" width="25" height="70" rx="3" fill="rgba(192,132,252,0.5)"/><rect x="110" y="60" width="25" height="60" rx="3" fill="rgba(123,164,212,0.5)"/><rect x="145" y="35" width="25" height="85" rx="3" fill="rgba(192,132,252,0.7)"/><text x="110" y="148" text-anchor="middle" fill="rgba(192,132,252,0.7)" font-size="10" font-family="Orbitron,sans-serif">REPORTING</text></svg>' },
    {num:'06',label:'Optimization & Relationship Growth',title:'Optimization & Relationship Growth',desc:'Campaign insights are used to refine future influencer marketing strategies, strengthen successful partnerships, test new content formats, improve platform selection, and identify opportunities for broader or longer-term collaboration.',subs:[{title:'Strategy Refinement',desc:'We improve campaign priorities based on performance and audience response.',icon:'<path d="M12 2L2 7l10 5 10-5-10-5z"/>'},{title:'Creator Relationship Development',desc:'We strengthen productive partnerships for future brand collaborations.',icon:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>'},{title:'Creative Testing',desc:'We test new formats, messages, creators, and calls to action.',icon:'<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>'},{title:'Campaign Scaling',desc:'We expand successful campaigns across creators, platforms, or markets.',icon:'<polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/>'}],deliverables:['Updated influencer marketing strategy','Long-term creator partnership plan','Creative testing recommendations','Campaign scaling and optimization roadmap'],illus:'<svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="180" height="120" rx="12" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.3)" stroke-width="1.5"/><circle cx="110" cy="80" r="40" fill="rgba(192,132,252,0.12)" stroke="#c084fc" stroke-width="1.5"/><path d="M110 50 L110 80 L130 90" stroke="#c084fc" stroke-width="2" stroke-linecap="round"/><text x="110" y="148" text-anchor="middle" fill="rgba(192,132,252,0.7)" font-size="10" font-family="Orbitron,sans-serif">GROWTH</text></svg>' }
  ];`;

html = html.replace(/const steps=\[\s*\{num:'01'.*?\];/s, jsSteps);

fs.writeFileSync(targetPath, html, 'utf8');
console.log('Successfully updated indexinfluence1.html with 100% precision!');
