const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, 'indexapp1.html');
const targetPath = path.join(__dirname, 'indexmanage1.html');

let html = fs.readFileSync(templatePath, 'utf8');

// 1. Meta / Head Title & Meta tags
html = html.replace(
  /<title>.*?<\/title>/s,
  '<title>Social Media Management Services | Webspide</title>'
);

html = html.replace(
  /<meta name="description"\s+content=".*?">/s,
  '<meta name="description"\n        content="Grow your brand with Webspide’s social media management services for Facebook, Instagram, LinkedIn, YouTube, X, and Pinterest.">'
);

html = html.replace(
  /<meta name="keywords"\s+content=".*?">/s,
  '<meta name="keywords"\n        content="Social media management services, Social media management company, Social media management agency, Social media marketing services, Social media content management, Facebook management services, Instagram management services, LinkedIn management services, YouTube channel management services, X social media management, Pinterest marketing services, Social media community management, Social media content creation services, Social media account management, Social media strategy services">'
);

// 2. Hero Section
html = html.replace(
  /<div class="badge fade-in">.*?<\/div>/s,
  '<div class="badge fade-in">Social Media Management Services</div>'
);

html = html.replace(
  /<h1 class="fade-in delay-1">.*?<\/h1>/s,
  `<h1 class="fade-in delay-1">
      <span class="grad">SOCIAL MEDIA</span>
      <span class="grad">MANAGEMENT SERVICES</span>
      <span class="outline">Global Growth</span>
    </h1>`
);

html = html.replace(
  /<p class="hero-desc fade-in delay-2">.*?<\/p>/s,
  '<p class="hero-desc fade-in delay-2">Webspide provides strategic social media management services for startups, enterprises, ecommerce brands, and global organizations. We plan, create, publish, monitor, and optimize platform-specific content that strengthens visibility, engagement, community trust, and lead generation. Our team manages Facebook, Instagram, LinkedIn, YouTube, X, and Pinterest through consistent communication, analytics, and continuous improvement.</p>'
);

// 3. Orbit Cards Mobile (6 items)
const mobileOrbitCards = `<div class="orbit-cards-mobile">
  <a href="#svc-card-1" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></div><div><div class="orb-card-name">Facebook Management</div><div class="orb-card-tag">Content, engagement & page optimization</div></div></a>
  <a href="#svc-card-2" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></div><div><div class="orb-card-name">Instagram Marketing</div><div class="orb-card-tag">Reels, stories & visual branding</div></div></a>
  <a href="#svc-card-3" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></div><div><div class="orb-card-name">LinkedIn Marketing</div><div class="orb-card-tag">B2B growth & lead generation</div></div></a>
  <a href="#svc-card-4" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg></div><div><div class="orb-card-name">YouTube Management</div><div class="orb-card-tag">Channel strategy & video SEO</div></div></a>
  <a href="#svc-card-5" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><path d="M4 4l16 16M4 20l16-16"/></svg></div><div><div class="orb-card-name">X Management</div><div class="orb-card-tag">Real-time trends & interaction</div></div></a>
  <a href="#svc-card-6" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 22a10 10 0 0 1-10-10c0-6 4-10 10-10a10 10 0 0 1 10 10 10 10 0 0 1-10 10v-6a2 2 0 1 1 0-4 2 2 0 1 1 0 4"/></svg></div><div><div class="orb-card-name">Pinterest Marketing</div><div class="orb-card-tag">Visual boards & discovery</div></div></a>
</div>`;

html = html.replace(/<div class="orbit-cards-mobile">.*?<\/div>\s*<!-- BANNER 1 -->/s, mobileOrbitCards + '\n\n<!-- BANNER 1 -->');

// 4. Banner 1 & Banner 2 replacement
const bannersFullContent = `<!-- BANNER 1 -->
<div class="banner banner-1 section-soft-gradient">
  <div class="b1-right-line"></div>
  <div class="b1-corner-dot tl"></div><div class="b1-corner-dot tr"></div><div class="b1-corner-dot bl"></div><div class="b1-corner-dot br"></div>
  <div class="b1-content">
    <div class="b1-header">
      <div class="b1-title gradient-heading">Elevate Your Brand with <span>Professional Social Media Management</span></div>
      <p class="b1-desc">Professional social media management helps businesses maintain a consistent presence, connect with relevant audiences, and turn everyday interactions into measurable opportunities. Webspide combines platform strategy, content creation, scheduling, community management, paid promotion, analytics, and ongoing optimization to improve brand visibility, audience engagement, lead generation, customer relationships, and long-term digital growth.</p>
    </div>
    <div class="b1-cards">
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div><div class="b1-card-title">Consistent Brand Presence</div></div><p class="b1-card-desc">We maintain clear branding, tone, messaging, and visual standards across every selected platform. Consistent communication helps audiences recognize your business, understand your value, and develop trust while each channel receives content suited to its format, users, and purpose.</p></div>
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><path d="M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z"/></svg></div><div class="b1-card-title">Data-Driven Growth Strategies</div></div><p class="b1-card-desc">Our team reviews reach, engagement, audience behaviour, traffic, leads, and conversion trends to guide decisions. Performance insights help us refine content themes, posting schedules, targeting, creative formats, and campaign priorities instead of relying on assumptions or inconsistent activity.</p></div>
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><div class="b1-card-title">Audience Engagement &amp; Community Building</div></div><p class="b1-card-desc">Meaningful interaction turns followers into an active community. We monitor comments, messages, mentions, and relevant conversations, respond according to approved guidelines, and create interactive content that strengthens customer relationships, encourages participation, and supports long-term brand loyalty.</p></div>
    </div>
  </div>
</div>

<!-- BANNER 2 -->
<div class="banner banner-2 section-soft-gradient">
  <div class="b2-content">
    <div class="b2-cards">
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg></div><div class="b2-card-title">Multi-Platform Expertise</div></div><p class="b1-card-desc">Facebook, Instagram, LinkedIn, YouTube, X, and Pinterest serve different audiences and content behaviours. We adapt strategy, creative formats, messaging, publishing frequency, and engagement methods for each platform while maintaining one consistent brand direction across your complete social presence.</p></div>
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div><div class="b2-card-title">Lead Generation &amp; Conversion Optimization</div></div><p class="b1-card-desc">We connect social media activity with measurable business actions through focused content, campaign offers, landing-page alignment, audience targeting, and clear calls to action. This approach helps convert relevant followers and viewers into enquiries, leads, customers, registrations, or sales.</p></div>
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><path d="M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z"/></svg></div><div class="b2-card-title">Advanced Performance Analytics</div></div><p class="b1-card-desc">Our reports track important indicators such as reach, engagement, follower quality, traffic, leads, conversions, audience growth, and paid performance. Clear analysis explains what worked, what needs improvement, and which actions should guide the next campaign cycle.</p></div>
    </div>
  </div>
</div>`;

html = html.replace(/<!-- BANNER 1 -->.*?(?=<!-- ═══════════════════════════════════════════|\s*<section class="services-section)/s, bannersFullContent + '\n\n\n');

// Helper function to generate SVG visuals for service cards
function getSvgVisual(num) {
  const imgs = {
    '01': 'social-media-management-services-facebook-management.webp',
    '02': 'social-media-management-services-instagram-marketing-growth.webp',
    '03': 'social-media-management-services-linkedin-marketing-lead-generation.webp',
    '04': 'social-media-management-services-youtube-channel-management-video-marketing.webp',
    '05': 'social-media-management-services-x-management-trend-engagement.webp',
    '06': 'social-media-management-services-pinterest-marketing-visual-branding.webp'
  };
  const alts = {
    '01': 'Facebook Management',
    '02': 'Instagram Marketing & Growth',
    '03': 'LinkedIn Marketing & Lead Generation',
    '04': 'YouTube Channel Management & Video Marketing',
    '05': 'X Management & Trend Engagement',
    '06': 'Pinterest Marketing & Visual Branding'
  };
  return `<img src="Images/Webspide-Images_/Digital Marketting/social-media-management-services/Service/${imgs[num]}" alt="${alts[num]}" style="width:100%;height:auto;display:block;border:none;outline:none;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);background:transparent;">`;
}

// 5. Services Section Header & 6 Cards
const servicesData = [
  {
    num: '01',
    title: 'Facebook<br><span>Management</span>',
    desc: 'Facebook remains valuable for brand communication, community interaction, lead generation, ecommerce promotion, and paid audience targeting. Webspide develops a structured Facebook management strategy around your business goals, customer profiles, markets, brand voice, and available resources. We plan content themes, publishing frequency, campaign priorities, and measurable objectives before creating or scheduling posts.',
    p1: 'Our Facebook management services include branded graphics, captions, videos, stories, offers, event content, audience engagement, comment monitoring, inbox coordination, and page optimization. Where paid promotion is required, we can support campaign planning, audience targeting, creative variations, budget control, conversion tracking, and landing-page alignment. Every activity follows approved communication and escalation guidelines.',
    p2: 'We review reach, engagement, follower quality, website traffic, enquiries, conversions, and advertising performance to understand what creates value. Content formats, publishing times, topics, audiences, and campaign settings are refined using reliable data. This ongoing approach keeps your Facebook presence active, responsive, and aligned with wider marketing goals while helping your brand build credibility, nurture communities, generate qualified opportunities, and improve long-term platform performance across selected international markets globally.<br><br><strong>Key Service Features:</strong><ul style="margin-top:10px; padding-left:20px;"><li>Facebook content creation, scheduling, and page management</li><li>Audience engagement, message monitoring, and community support</li><li>Paid campaign management, tracking, and continuous optimization</li></ul>',
    cta: 'Manage My Facebook →',
    reverse: false
  },
  {
    num: '02',
    title: 'Instagram Marketing<br><span>& Growth</span>',
    desc: 'Instagram helps brands communicate through visual storytelling, short-form video, product discovery, creator collaborations, and direct audience interaction. Webspide creates an Instagram management strategy based on your brand identity, target customers, markets, content resources, and growth goals. We establish content pillars, visual direction, posting frequency, campaign themes, and measurable performance priorities.',
    p1: 'Our team plans and produces feed posts, carousels, reels, stories, captions, highlights, profile updates, hashtags, and community interactions. Content is adapted to platform behaviour while remaining consistent with your wider brand. We can also support influencer coordination, user-generated content, paid campaigns, audience targeting, creative testing, and conversion-focused links where these activities suit your objectives.',
    p2: 'Performance is evaluated through reach, saves, shares, comments, profile activity, follower quality, website visits, leads, sales, and advertising results. We use these insights to improve creative formats, hooks, topics, timing, calls to action, and audience strategies. Consistent Instagram management helps increase discoverability, strengthen visual branding, build genuine engagement, and create a scalable presence that supports awareness, customer relationships, and measurable business growth across local and international markets.<br><br><strong>Key Service Features:</strong><ul style="margin-top:10px; padding-left:20px;"><li>Posts, carousels, reels, stories, and branded visual content</li><li>Audience interaction, hashtag research, and profile optimization</li><li>Instagram advertising, creative testing, and performance analysis</li></ul>',
    cta: 'Boost My Instagram →',
    reverse: true
  },
  {
    num: '03',
    title: 'LinkedIn Marketing &<br><span>Lead Generation</span>',
    desc: 'LinkedIn gives B2B organizations, professional service firms, employers, and industry leaders a focused platform for credibility, networking, recruitment, and lead generation. Webspide develops LinkedIn strategies around your market, decision-makers, services, expertise, sales cycle, and business objectives. We identify content themes and opportunities that position your organization clearly and professionally.',
    p1: 'Our LinkedIn management services include company-page optimization, executive content support, thought-leadership posts, articles, carousels, case studies, employee advocacy guidance, community engagement, and publishing calendars. For lead generation, we can coordinate targeted content, suitable advertising, campaign landing pages, audience segmentation, and responsible outreach approaches that prioritize relevance over indiscriminate connection requests or repetitive sales messages.',
    p2: 'We track impressions, engagement quality, follower growth, profile activity, website traffic, content-assisted enquiries, leads, and paid campaign outcomes. Insights are used to refine topics, formats, audience targeting, posting schedules, and calls to action. This structured approach helps your organization communicate expertise, reach relevant professionals, strengthen industry authority, nurture business relationships, and generate better-qualified opportunities across regional and international B2B markets over time with greater consistency and accountability.<br><br><strong>Key Service Features:</strong><ul style="margin-top:10px; padding-left:20px;"><li>Company-page optimization and thought-leadership content</li><li>B2B audience targeting and lead-generation campaigns</li><li>LinkedIn advertising, reporting, and performance improvement</li></ul>',
    cta: 'Grow My LinkedIn Presence →',
    reverse: false
  },
  {
    num: '04',
    title: 'YouTube Channel Management<br><span>& Video Marketing</span>',
    desc: 'YouTube allows businesses to educate audiences, demonstrate products, answer customer questions, and build long-term visibility through searchable video content. Webspide develops channel strategies based on your audience, subject expertise, production capacity, competitive landscape, and growth objectives. We organize video themes, publishing plans, series concepts, keyword opportunities, and measurable channel priorities.',
    p1: 'Our YouTube channel management services can include topic research, script support, titles, descriptions, thumbnails, playlists, chapters, captions, metadata, upload scheduling, comment monitoring, and channel-page optimization. We also help align videos with website pages, campaigns, and customer journeys. Where relevant, paid YouTube promotion can support selected videos, audiences, markets, launches, or conversion goals.',
    p2: 'We monitor impressions, click-through rates, watch time, audience retention, subscribers, engagement, traffic, leads, and advertising performance. These insights reveal which topics, openings, formats, thumbnails, lengths, and publishing patterns deserve improvement or expansion. Consistent YouTube management helps brands increase discoverability, create reusable educational assets, build audience trust, and generate sustained value from video marketing rather than relying on isolated uploads without strategy, optimization, or follow-through across every publishing cycle.<br><br><strong>Key Service Features:</strong><ul style="margin-top:10px; padding-left:20px;"><li>Channel optimization, video planning, and publishing support</li><li>Titles, descriptions, thumbnails, metadata, and YouTube SEO</li><li>Audience-retention analysis, advertising, and channel reporting</li></ul>',
    cta: 'Manage My YouTube Channel →',
    reverse: true
  },
  {
    num: '05',
    title: 'X Management &<br><span>Trend Engagement</span>',
    desc: 'X, formerly Twitter, supports real-time communication, industry discussion, customer updates, thought leadership, and reputation monitoring. Webspide creates an X management strategy around your audience, market conversations, brand voice, response requirements, and communication goals. We identify relevant themes, accounts, hashtags, events, and publishing opportunities while protecting consistency and professionalism.',
    p1: 'Our services include post creation, thread development, scheduling, trend monitoring, mention tracking, community interaction, campaign messaging, and response coordination. We participate only in trends that genuinely suit the brand, avoiding forced or insensitive engagement. Where appropriate, we can support paid promotion, audience targeting, event coverage, executive communication, and crisis-response workflows based on approved internal guidelines.',
    p2: 'Performance is assessed through impressions, engagement quality, profile visits, follower relevance, link clicks, mentions, sentiment, leads, and campaign outcomes. We refine posting frequency, formats, topics, timing, and interaction methods using these findings. Professional X management helps businesses remain visible in timely conversations, respond more consistently, strengthen authority, manage public interactions, and develop valuable relationships with customers, partners, journalists, professionals, and communities across selected global markets more effectively.<br><br><strong>Key Service Features:</strong><ul style="margin-top:10px; padding-left:20px;"><li>Real-time posting, scheduling, and trend monitoring</li><li>Mention tracking, community engagement, and reputation support</li><li>X advertising, audience targeting, and performance reporting</li></ul>',
    cta: 'Grow My X Audience →',
    reverse: false
  },
  {
    num: '06',
    title: 'Pinterest Marketing &<br><span>Visual Branding</span>',
    desc: 'Pinterest is a visual discovery platform where users actively search, save, compare, and plan ideas, products, services, and future purchases. Webspide develops Pinterest strategies for suitable ecommerce, lifestyle, education, design, travel, food, wellness, and service brands. We research audience interests, search terms, competitors, seasonal behaviour, visual identity, and website content before planning campaigns.',
    p1: 'Our Pinterest management services include profile optimization, board structure, pin design, keyword-focused titles and descriptions, publishing schedules, destination-link review, content repurposing, and visual-brand consistency. We can create static pins, video pins, idea-led formats, product content, infographics, and seasonal collections. Paid Pinterest campaigns may also support awareness, traffic, conversions, or product discovery where suitable.',
    p2: 'We measure impressions, saves, outbound clicks, engaged audiences, website behaviour, conversions, and paid performance to identify valuable topics and creative patterns. Successful content can be refreshed, expanded, and organized into stronger board experiences. Consistent Pinterest marketing helps brands extend content lifespan, attract discovery-led traffic, communicate visually, and support long-term website visits, product consideration, and sales across markets where users rely on the platform for research and inspiration.<br><br><strong>Key Service Features:</strong><ul style="margin-top:10px; padding-left:20px;"><li>Pinterest profile, board, and keyword optimization</li><li>Branded pin creation and visual-content scheduling</li><li>Pinterest advertising, traffic tracking, and performance improvement</li></ul>',
    cta: 'Optimize My Pinterest Strategy →',
    reverse: true
  }
];

let serviceCardsHtml = `<section class="services-section section-light" id="services">
  <div class="services-section-head">
    <div class="section-tag">What We Do</div>
    <h2 class="section-title gradient-heading">Our Social Media Management Services</h2>
    <p class="section-sub" style="margin-bottom:0">Data-driven platform strategies focused on consistent branding, meaningful audience relationships, measurable growth, and long-term value.</p>
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
      <div class="ts-badge">Tools & Platforms</div>
      <h2 class="gradient-heading">Our Social Media <span>Management Platforms</span></h2>
      <h3>for Social Media Management Services</h3>
      <p>We use industry-leading scheduling, analytics, community management, and optimization platforms to ensure consistent publishing and brand alignment.</p>
    </div>`
);

// 7. Why Choose Us Section
const whyChooseHtml = `<div class="sections section-soft-gradient">
  <div class="left">
    <br>
    <div class="villan-badge">Why Choose Webspide</div>
    <div class="left-title gradient-heading">Why Choose<br>Webspide For<br><span class="purple">Social Media<br>Management Services?</span></div>
    <div class="title-underline"></div>
    <p class="left-desc">Webspide combines strategic planning, platform expertise, creative production, community management, paid campaign support, and transparent reporting to deliver reliable social media management services for international businesses. We focus on consistent branding, meaningful audience relationships, measurable growth, and long-term value. Every engagement is shaped around your goals, markets, resources, communication needs, and preferred social platforms globally.</p>
    <div class="illustration">
      <div class="gear-left">⚙</div>
      <div class="gear-sm">⚙</div>
      <div class="code-tag">&lt;/&gt;</div>
      <div class="laptop">
        <div class="laptop-screen">
          <div class="screen-code"><span>function</span> <em>manageSocial</em>() {<br>&nbsp;&nbsp;<span>const</span> strategy = true;<br>&nbsp;&nbsp;<em>growCommunity</em>(strategy);<br>&nbsp;&nbsp;<span>return</span> results;<br>}</div>
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
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Experienced Social Media <span class="accent">Specialists</span></div>
          <p class="feature-desc">Our team understands platform behaviour, audience expectations, content formats, publishing patterns, community dynamics, and paid campaign requirements across major social channels. This expertise helps us create practical strategies instead of generic posting schedules. Clients receive informed recommendations shaped around their industry, target audience, available resources, brand standards, and measurable growth priorities across selected markets worldwide.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">02</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Customized Platform <span class="accent">Strategies</span></div>
          <p class="feature-desc">Every business requires a different combination of platforms, messages, creative formats, audiences, and campaign objectives. We build tailored social media management strategies around your goals, customer journey, market position, and internal capabilities. This focused approach helps prioritize activities that can improve visibility, engagement, lead generation, customer relationships, and sustainable growth without unnecessary platform activity or wasted resources.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">03</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Consistent, High-Quality <span class="accent">Content</span></div>
          <p class="feature-desc">We maintain clear standards for brand voice, visual identity, accuracy, formatting, and platform suitability. Content calendars, approval processes, creative guidelines, and quality reviews keep communication organized and dependable. This consistency helps audiences recognize your brand, understand your value, and trust your presence while giving internal teams greater visibility into upcoming content and campaign priorities across channels.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">04</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Dedicated Communication & <span class="accent">Collaboration</span></div>
          <p class="feature-desc">Clear communication is essential when managing public-facing channels. We establish practical approval workflows, reporting schedules, escalation guidelines, and defined responsibilities from the beginning. Clients receive consistent updates and a reliable point of coordination, making it easier to review content, share business developments, respond to emerging situations, and keep social media activity aligned with wider organizational priorities and timelines.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">05</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Scalable Multi-Platform <span class="accent">Management</span></div>
          <p class="feature-desc">Our processes can support focused single-platform engagements or coordinated management across Facebook, Instagram, LinkedIn, YouTube, X, and Pinterest. As your audience, markets, content needs, or campaign investment grows, we can expand planning, production, moderation, advertising, and reporting in a controlled way. This scalability helps maintain quality and consistency while supporting changing business requirements over time.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">06</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><polyline points="3 20 21 20"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Transparent Reporting & <span class="accent">Long-Term Support</span></div>
          <p class="feature-desc">We provide clear reports covering completed activity, content performance, audience growth, engagement, traffic, leads, advertising outcomes, and recommended next steps. Results are explained in practical language, including limitations and areas requiring improvement. Ongoing support helps your strategy adapt to platform changes, audience behaviour, business priorities, and new opportunities while maintaining accountability, continuity, and measurable direction.</p>
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
    <h2 class="section-title gradient-heading">Our Social Media Management Workflow Process</h2>
    <div class="hww-sub-top">Our social media management workflow combines strategy, platform planning, content creation, community engagement, campaign execution, analytics, and continuous optimization to build consistent, measurable digital growth.</div>
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
    <h2 class="section-title gradient-heading">Ready to Strengthen Your Social Media Presence?</h2>
    <p class="section-sub">Tell us about your brand, target audience, preferred platforms, content requirements, current challenges, and business goals. Our social media specialists will review your requirements and recommend a practical management strategy focused on consistent communication, relevant audience growth, meaningful engagement, lead generation, customer relationships, and measurable long-term performance.</p>
  </div>`;

html = html.replace(/<section class="contact-section section-light" id="contact">.*?<div class="contact-wrap">/s, contactHead + '\n  <div class="contact-wrap">');

// 10. JavaScript Services Array (6 items)
const jsServices = `  const SERVICES=[
    {num:'01',name:'Facebook Management',tag:'Content, engagement & page optimization',label:'Facebook Management',svg:'<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',target:'svc-card-1'},
    {num:'02',name:'Instagram Marketing & Growth',tag:'Reels, stories & visual branding',label:'Instagram Marketing',svg:'<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',target:'svc-card-2'},
    {num:'03',name:'LinkedIn Marketing & Lead Generation',tag:'B2B growth & lead generation',label:'LinkedIn Marketing',svg:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',target:'svc-card-3'},
    {num:'04',name:'YouTube Channel Management & Video Marketing',tag:'Channel strategy & video SEO',label:'YouTube Management',svg:'<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>',target:'svc-card-4'},
    {num:'05',name:'X Management & Trend Engagement',tag:'Real-time trends & interaction',label:'X Management',svg:'<path d="M4 4l16 16M4 20l16-16"/>',target:'svc-card-5'},
    {num:'06',name:'Pinterest Marketing & Visual Branding',tag:'Visual boards & discovery',label:'Pinterest Marketing',svg:'<circle cx="12" cy="12" r="10"/><path d="M12 22a10 10 0 0 1-10-10c0-6 4-10 10-10a10 10 0 0 1 10 10 10 10 0 0 1-10 10v-6a2 2 0 1 1 0-4 2 2 0 1 1 0 4"/>',target:'svc-card-6'}
  ];`;

html = html.replace(/const SERVICES=\[\s*\{num:'01'.*?\];/s, jsServices);

// 11. JavaScript Workflow Steps Array with EXACT labels from DOCX left-side navigation
const jsSteps = `  const steps=[
    {num:'01',label:'01 Strategy & Audience Analysis',title:'Strategy & Audience Analysis',desc:'We begin by understanding your business, audience, markets, competitors, brand position, communication goals, available resources, and current social presence. This stage establishes the direction, priorities, and success measures for the complete engagement.',subs:[{title:'Business & Brand Analysis',desc:'We review your business, positioning, offers, markets, and communication goals.',icon:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>'},{title:'Audience Research',desc:'We identify audience interests, behaviours, platforms, concerns, and content preferences.',icon:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>'},{title:'Competitor & Market Review',desc:'We assess competitor activity, industry conversations, formats, and positioning opportunities.',icon:'<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>'},{title:'KPI & Goal Definition',desc:'We define visibility, engagement, traffic, lead, and conversion performance indicators.',icon:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>'}],deliverables:['Social media strategy brief','Audience and competitor analysis','Platform recommendations and campaign goals','Approved KPIs and measurement framework'],illus:'<img src="Images/Webspide-Images_/Digital Marketting/social-media-management-services/Workflow/social-media-management-services-strategy-audience-analysis.webp" alt="Strategy & Audience Analysis" style="width:100%;height:auto;display:block;border:none;outline:none;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);background:transparent;">' },
    {num:'02',label:'02 Platform Planning & Technical Setup',title:'Platform Planning & Technical Setup',desc:'Once the direction is approved, we select suitable channels and establish the operational foundations for publishing, access, tracking, moderation, and collaboration across your chosen social media platforms.',subs:[{title:'Platform Selection',desc:'We prioritize platforms according to audience relevance, objectives, and available resources.',icon:'<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/>'},{title:'Profile & Account Review',desc:'We review account details, branding, permissions, links, and platform settings.',icon:'<rect x="3" y="3" width="18" height="18" rx="2"/>'},{title:'Tracking & Integration Setup',desc:'We configure approved analytics, pixels, links, and conversion tracking requirements.',icon:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'},{title:'Content Calendar Planning',desc:'We organize themes, formats, frequency, responsibilities, deadlines, and approval schedules.',icon:'<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>'}],deliverables:['Final platform management plan','Optimized profile and account checklist','Tracking and integration setup plan','Approved social media content calendar'],illus:'<img src="Images/Webspide-Images_/Digital Marketting/social-media-management-services/Workflow/social-media-management-services-platform-planning-technical-setup.webp" alt="Platform Planning & Technical Setup" style="width:100%;height:auto;display:block;border:none;outline:none;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);background:transparent;">' },
    {num:'03',label:'03 Content Creation & Scheduling',title:'Content Creation & Scheduling',desc:'Our strategists, writers, and designers transform the approved plan into platform-specific posts, videos, graphics, captions, stories, and campaign assets that reflect your brand and audience needs.',subs:[{title:'Content Concept Development',desc:'We develop useful themes, campaign ideas, hooks, and storytelling directions.',icon:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>'},{title:'Copywriting & Creative Production',desc:'We create platform-specific captions, graphics, videos, and supporting campaign assets.',icon:'<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>'},{title:'Brand & Quality Review',desc:'We verify accuracy, tone, design consistency, formatting, and platform suitability.',icon:'<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'},{title:'Scheduling & Publishing',desc:'We schedule approved content according to timing, frequency, and campaign priorities.',icon:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>'}],deliverables:['Platform-specific content and creative assets','Approved captions and calls to action','Quality-reviewed monthly content calendar','Scheduled posts across selected platforms'],illus:'<img src="Images/Webspide-Images_/Digital Marketting/social-media-management-services/Workflow/social-media-management-services-content-creation-scheduling.webp" alt="Content Creation & Scheduling" style="width:100%;height:auto;display:block;border:none;outline:none;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);background:transparent;">' },
    {num:'04',label:'04 Community Management & Optimization',title:'Community Management & Campaign Optimization',desc:'We monitor audience interactions and manage approved responses while reviewing content and paid campaign performance. This helps maintain responsive communication and identify adjustments that can improve relevance, engagement, and conversions.',subs:[{title:'Comment & Message Monitoring',desc:'We track comments, messages, mentions, and relevant public conversations consistently.',icon:'<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>'},{title:'Community Response Management',desc:'We respond using approved guidelines, tone, escalation rules, and service standards.',icon:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'},{title:'Paid Campaign Optimization',desc:'We refine targeting, creative, placements, bids, budgets, and campaign priorities.',icon:'<polyline points="23 4 23 10 17 10"/><polyline points="2 20 23 14 17 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 1 3.51 15"/>'},{title:'Reputation & Escalation Support',desc:'We flag sensitive feedback, complaints, risks, and urgent issues appropriately.',icon:'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>'}],deliverables:['Community engagement and response records','Escalated enquiry and reputation reports','Paid campaign optimization updates','Content and audience improvement recommendations'],illus:'<img src="Images/Webspide-Images_/Digital Marketting/social-media-management-services/Workflow/social-media-management-services-campaign-launch-performance-monitoring.webp" alt="Campaign Launch & Performance Monitoring" style="width:100%;height:auto;display:block;border:none;outline:none;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);background:transparent;">' },
    {num:'05',label:'05 Campaign Launch & Monitoring',title:'Campaign Launch & Performance Monitoring',desc:'Approved organic and paid campaigns are launched across the selected platforms. We monitor delivery, engagement, audience response, traffic, leads, and technical issues to support reliable execution and timely improvements.',subs:[{title:'Campaign Activation',desc:'We publish approved content and launch scheduled promotional campaigns securely.',icon:'<polygon points="5 3 19 12 5 21 5 3"/>'},{title:'Delivery & Engagement Monitoring',desc:'We monitor reach, engagement, clicks, comments, and audience response patterns.',icon:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'},{title:'Lead & Conversion Tracking',desc:'We review tracked enquiries, registrations, purchases, and other valuable actions.',icon:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>'},{title:'Real-Time Adjustments',desc:'We make suitable changes when performance, feedback, or conditions require action.',icon:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'}],deliverables:['Successfully launched organic and paid campaigns','Initial reach and engagement summary','Lead and conversion monitoring report','Early campaign adjustment actions'],illus:'<img src="Images/Webspide-Images_/Digital Marketting/social-media-management-services/Workflow/social-media-management-services-community-management-campaign-optimization.webp" alt="Community Management & Campaign Optimization" style="width:100%;height:auto;display:block;border:none;outline:none;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);background:transparent;">' },
    {num:'06',label:'06 Reporting & Continuous Improvement',title:'Reporting & Continuous Improvement',desc:'We analyse performance across content, platforms, audiences, and campaigns, then convert the findings into practical recommendations. Successful approaches are expanded while weak areas are refined, replaced, or discontinued.',subs:[{title:'Performance Analysis',desc:'We evaluate reach, engagement, traffic, leads, conversions, and audience quality.',icon:'<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>'},{title:'Transparent Reporting',desc:'We explain completed activities, results, limitations, and recommendations in clear language.',icon:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>'},{title:'Strategy Refinement',desc:'We improve topics, formats, timing, targeting, and engagement methods continuously.',icon:'<polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/>'},{title:'Scaling & Future Planning',desc:'We expand successful campaigns, platforms, markets, and content opportunities responsibly.',icon:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>'}],deliverables:['Detailed social media performance report','Updated content and campaign recommendations','Platform and audience growth opportunities','Continuous improvement and scaling roadmap'],illus:'<img src="Images/Webspide-Images_/Digital Marketting/social-media-management-services/Workflow/social-media-management-services-reporting-continuous-improvement.webp" alt="Reporting & Continuous Improvement" style="width:100%;height:auto;display:block;border:none;outline:none;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);background:transparent;">' }
  ];`;

html = html.replace(/const steps=\[\s*\{num:'01'.*?\];/s, jsSteps);

fs.writeFileSync(targetPath, html, 'utf8');
console.log('Successfully updated indexmanage1.html with full exact content and full sentences for Workflow Navigation!');
