const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, 'indexapp1.html');
const targetPath = path.join(__dirname, 'indexseocontent1.html');

let html = fs.readFileSync(templatePath, 'utf8');

// 1. Meta / Head Title & Meta tags
html = html.replace(
  /<title>.*?<\/title>/s,
  '<title>SEO Content Writing Services | Webspide</title>'
);

html = html.replace(
  /<meta name="description"\s+content=".*?">/s,
  '<meta name="description"\n        content="Grow organic visibility and conversions with Webspide’s SEO content writing services for websites, blogs, ecommerce, technical, local, social, video, and email.">'
);

html = html.replace(
  /<meta name="keywords"\s+content=".*?">/s,
  '<meta name="keywords"\n        content="SEO content writing services, SEO content writing agency, SEO copywriting services, Website content writing services, SEO blog writing services, SEO-friendly content writing, SEO content marketing services, Content marketing agency, Ecommerce content writing services, Technical content writing services, Local SEO content writing, Professional content writing services, SEO article writing services, Content strategy services, Conversion copywriting services">'
);

// 2. Hero Section
html = html.replace(
  /<div class="badge fade-in">.*?<\/div>/s,
  '<div class="badge fade-in">SEO Content Writing Services</div>'
);

html = html.replace(
  /<h1 class="fade-in delay-1">.*?<\/h1>/s,
  `<h1 class="fade-in delay-1">
      <span class="grad">SEO CONTENT</span>
      <span class="grad">WRITING SERVICES</span>
      <span class="outline">Global Growth</span>
    </h1>`
);

html = html.replace(
  /<p class="hero-desc fade-in delay-2">.*?<\/p>/s,
  '<p class="hero-desc fade-in delay-2">Webspide delivers professional SEO content writing services for startups, enterprises, ecommerce brands, and global organizations. Our writers combine keyword research, search intent, persuasive storytelling, and clear brand communication to create content that ranks, engages, and converts. From website pages and blogs to technical, local, social, video, email, and ecommerce content, every piece supports measurable growth.</p>'
);

// 3. Orbit Cards Mobile (10 items)
const mobileOrbitCards = `<div class="orbit-cards-mobile">
  <a href="#svc-card-1" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><div><div class="orb-card-name">Website Content</div><div class="orb-card-tag">Homepage, landing & service pages</div></div></a>
  <a href="#svc-card-2" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></div><div><div class="orb-card-name">Blog & Article</div><div class="orb-card-tag">Research-led articles & guides</div></div></a>
  <a href="#svc-card-3" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></div><div><div class="orb-card-name">Ecommerce Content</div><div class="orb-card-tag">Product & category descriptions</div></div></a>
  <a href="#svc-card-4" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div><div><div class="orb-card-name">Local SEO Content</div><div class="orb-card-tag">Geographic & location pages</div></div></a>
  <a href="#svc-card-5" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div><div><div class="orb-card-name">Technical SEO Content</div><div class="orb-card-tag">White papers & technical docs</div></div></a>
  <a href="#svc-card-6" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div><div><div class="orb-card-name">PR & Newsletters</div><div class="orb-card-tag">Press releases & emails</div></div></a>
  <a href="#svc-card-7" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></div><div><div class="orb-card-name">Social Media SEO</div><div class="orb-card-tag">Platform-specific SEO copy</div></div></a>
  <a href="#svc-card-8" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg></div><div><div class="orb-card-name">Video & YouTube SEO</div><div class="orb-card-tag">Scripts, titles & metadata</div></div></a>
  <a href="#svc-card-9" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9"/><circle cx="18" cy="18" r="3"/><polyline points="18 16 18 18 19 19"/></svg></div><div><div class="orb-card-name">Email Marketing</div><div class="orb-card-tag">Newsletters & drip sequences</div></div></a>
  <a href="#svc-card-10" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg></div><div><div class="orb-card-name">SEO Copywriting</div><div class="orb-card-tag">Conversion-focused copy</div></div></a>
</div>`;

html = html.replace(/<div class="orbit-cards-mobile">.*?<\/div>\s*<!-- BANNER 1 -->/s, mobileOrbitCards + '\n\n<!-- BANNER 1 -->');

// 4. Banner 1 & Banner 2 replacement
const bannersFullContent = `<!-- BANNER 1 -->
<div class="banner banner-1 section-soft-gradient">
  <div class="b1-right-line"></div>
  <div class="b1-corner-dot tl"></div><div class="b1-corner-dot tr"></div><div class="b1-corner-dot bl"></div><div class="b1-corner-dot br"></div>
  <div class="b1-content">
    <div class="b1-header">
      <div class="b1-title gradient-heading">Drive Traffic and Conversions with <span>Expert SEO Content Writing</span></div>
      <p class="b1-desc">Strategic SEO content helps businesses attract qualified visitors, answer customer questions, and build lasting authority. Webspide creates research-driven website pages, blogs, product content, technical resources, local pages, social copy, video content, email campaigns, and conversion-focused copywriting designed around search intent, readability, brand voice, and measurable business objectives.</p>
    </div>
    <div class="b1-cards">
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div><div class="b1-card-title">Strategic Content Optimization</div></div><p class="b1-card-desc">We align every piece with relevant keywords, search intent, business objectives, and audience expectations. Natural optimization, clear topic coverage, internal linking opportunities, and useful structure help content perform in search without weakening readability, credibility, or persuasive impact.</p></div>
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></div><div class="b1-card-title">Engaging &amp; High-Quality Writing</div></div><p class="b1-card-desc">Our writers create well-researched, original, and purposeful content that informs readers while supporting conversion goals. Clear language, strong storytelling, useful examples, and consistent brand voice help businesses hold attention, build trust, and encourage meaningful customer action.</p></div>
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><div class="b1-card-title">SEO-Friendly Structure &amp; Formatting</div></div><p class="b1-card-desc">Content is organized with logical headings, concise paragraphs, helpful lists, metadata guidance, and internal linking recommendations. This structure improves readability, supports search-engine understanding, and helps users locate relevant information quickly across desktop and mobile experiences.</p></div>
    </div>
  </div>
</div>

<!-- BANNER 2 -->
<div class="banner banner-2 section-soft-gradient">
  <div class="b2-content">
    <div class="b2-cards">
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><div class="b2-card-title">Improved Brand Authority &amp; Credibility</div></div><p class="b1-card-desc">Consistently publishing accurate, useful, and well-presented content demonstrates expertise and reliability. We help brands explain complex ideas, answer important questions, and share informed perspectives that strengthen credibility with customers, decision-makers, partners, and search engines worldwide.</p></div>
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg></div><div class="b2-card-title">Tailored Content Strategy Development</div></div><p class="b1-card-desc">We develop content plans around your audience, customer journey, market, services, competitors, and search opportunities. Each topic has a clear purpose, helping your business publish relevant content that supports awareness, consideration, conversion, retention, and long-term organic growth.</p></div>
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><polyline points="3 20 21 20"/></svg></div><div class="b2-card-title">Data-Driven Performance Tracking</div></div><p class="b1-card-desc">We evaluate rankings, organic traffic, engagement, conversions, and content quality to identify improvement opportunities. Performance insights guide updates, expansion, repurposing, and future planning so your content strategy continues adapting to search trends, user behaviour, and business priorities.</p></div>
    </div>
  </div>
</div>`;

html = html.replace(/<!-- BANNER 1 -->.*?(?=<!-- ═══════════════════════════════════════════|\s*<section class="services-section)/s, bannersFullContent + '\n\n\n');

// Helper function to generate SVG visuals for service cards
function getSvgVisual(num) {
  const imgs = {
    '01': 'seo-content-writing-services-website-content-writing.webp',
    '02': 'seo-content-writing-services-blog-article-writing.webp',
    '03': 'seo-content-writing-services-ecommerce-content-writing.webp',
    '04': 'seo-content-writing-services-local-seo-content-writing.webp',
    '05': 'seo-content-writing-services-technical-seo-content-writing.webp',
    '06': 'seo-content-writing-services-press-release-newsletter-writing.webp',
    '07': 'seo-content-writing-services-social-media-seo-content.webp',
    '08': 'seo-content-writing-services-video-youtube-seo-content.webp',
    '09': 'seo-content-writing-services-email-marketing-content.webp',
    '10': 'seo-content-writing-services-seo-copywriting.webp'
  };
  const alts = {
    '01': 'Website Content Writing',
    '02': 'Blog & Article Writing',
    '03': 'Ecommerce Content Writing',
    '04': 'Local SEO Content Writing',
    '05': 'Technical SEO Content Writing',
    '06': 'Press Release & Newsletter Writing',
    '07': 'Social Media SEO Content',
    '08': 'Video & YouTube SEO Content',
    '09': 'Email Marketing Content',
    '10': 'SEO Copywriting Services'
  };
  return `<img src="Images/Webspide-Images_/Digital Marketting/seo-content-writing-services/Service/${imgs[num]}" alt="${alts[num]}" style="width:100%;height:auto;display:block;border:none;outline:none;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);background:transparent;">`;
}

// 5. Services Section Header & 10 Cards
const servicesData = [
  {
    num: '01',
    title: 'Website Content<br><span>Writing</span>',
    desc: 'Your website must explain your value clearly while helping search engines understand each page. Webspide creates SEO-friendly website content for homepages, service pages, landing pages, about pages, industry pages, and supporting sections. We begin with audience research, business positioning, competitor review, keyword mapping, and search-intent analysis so every page has a defined purpose.',
    p1: 'Our writers combine clear messaging with natural keyword placement, persuasive structure, relevant headings, internal linking opportunities, and focused calls to action. Content is shaped around your brand voice, customer concerns, differentiators, and conversion goals. We avoid unnecessary repetition and technical language that could make the website difficult to understand or reduce credibility.',
    p2: 'Before delivery, each page is reviewed for accuracy, readability, originality, consistency, and SEO alignment. We also provide metadata recommendations where required and coordinate page relationships to reduce topic overlap. The completed website content helps international audiences understand your services, navigate confidently, and take meaningful action while supporting stronger organic visibility and long-term digital growth. It also creates a dependable foundation for future page expansion, campaigns, localization, and ongoing SEO improvement.',
    cta: 'Optimize Your Website Content →',
    reverse: false
  },
  {
    num: '02',
    title: 'Blog & Article<br><span>Writing</span>',
    desc: 'Strategic blogs and articles help businesses answer customer questions, demonstrate expertise, and build organic visibility over time. Webspide creates research-led blog posts, thought-leadership articles, guides, comparisons, explainers, and industry commentary. Topic selection is based on audience needs, keyword opportunities, competitor gaps, business priorities, and the role each article plays within the customer journey.',
    p1: 'Our writers develop clear outlines before drafting, ensuring every article follows logical search intent and provides useful information. Relevant keywords, headings, examples, internal links, external references, and calls to action are incorporated naturally. The writing remains accessible and engaging while reflecting your brand’s experience, perspective, and standards across international markets.',
    p2: 'Every piece is reviewed for originality, accuracy, readability, structure, and optimization before delivery. We can also refresh existing articles, consolidate overlapping content, and develop topic clusters that strengthen authority around important subjects. Consistent blog and article writing helps attract qualified visitors, support sales conversations, improve customer education, and create reusable material for newsletters, social media, and wider content marketing campaigns. Editorial planning and performance reviews also help maintain quality, publishing consistency, and stronger long-term topic coverage.',
    cta: 'Start Blogging for SEO →',
    reverse: true
  },
  {
    num: '03',
    title: 'Ecommerce Content<br><span>Writing</span>',
    desc: 'Ecommerce customers need accurate, persuasive information before they can compare products and purchase confidently. Webspide creates SEO content for product pages, category pages, collection pages, brand pages, buying guides, marketplace listings, and promotional landing pages. We research product features, customer priorities, search behaviour, competitors, and commercial keywords to establish clear content direction.',
    p1: 'Our writers turn technical specifications into practical benefits while maintaining factual accuracy and brand consistency. Product descriptions are structured for readability, comparison, and conversion, with natural keyword integration and focused calls to action. Category content supports discovery without overwhelming shoppers, while buying guides address common questions and help users make informed decisions.',
    p2: 'Content is reviewed for duplication, clarity, terminology, grammar, and alignment with the ecommerce platform. We also recommend internal linking between products, categories, guides, and supporting pages where appropriate. Strong ecommerce content can improve product visibility, reduce uncertainty, strengthen customer trust, and support higher-quality traffic, conversions, cross-selling, and long-term organic performance across competitive international markets. It also gives merchandising and marketing teams a consistent content framework for future products, promotions, and market expansion.',
    cta: 'Boost Your Ecommerce Sales →',
    reverse: false
  },
  {
    num: '04',
    title: 'Local SEO Content<br><span>Writing</span>',
    desc: 'Local SEO content helps businesses appear for searches connected to specific cities, regions, and service areas. Webspide creates location pages, regional service pages, local landing pages, business-profile descriptions, community-focused blogs, and supporting content. We research local search language, customer priorities, competition, service availability, and geographic relevance before developing each page.',
    p1: 'Our approach avoids producing thin location pages that repeat the same copy with only a city name changed. Each page includes useful local context, clearly described services, natural geographic keywords, relevant customer information, internal links, and focused calls to action. Content is aligned with your actual operating areas and brand standards.',
    p2: 'We review pages for accuracy, uniqueness, readability, and consistency across locations. Recommendations may also cover frequently asked questions, testimonials, service details, metadata, and local linking opportunities. Well-planned local SEO content helps nearby customers understand your offering, builds trust in each market, and supports stronger visibility for location-based searches, enquiries, appointments, visits, and other valuable actions. It also provides a scalable framework for expanding into additional service areas without sacrificing usefulness or content quality.',
    cta: 'Improve Local Search Visibility →',
    reverse: true
  },
  {
    num: '05',
    title: 'Technical SEO Content<br><span>Writing</span>',
    desc: 'Technical audiences expect accurate information presented in a clear and credible way. Webspide creates SEO content for software, engineering, healthcare, finance, manufacturing, SaaS, cybersecurity, and other specialist industries. Deliverables can include white papers, technical articles, product documentation, implementation guides, knowledge-base content, case studies, solution pages, and detailed educational resources.',
    p1: 'Our writers work from approved source material, expert interviews, product information, and reliable references to understand complex subjects before drafting. Technical concepts are organized logically and explained at the appropriate level for decision-makers, users, buyers, or professionals. Search intent, terminology, keywords, headings, examples, and internal links are incorporated without oversimplifying important details.',
    p2: 'Every document is reviewed for factual consistency, readability, tone, originality, and SEO structure. Client experts can verify specialist claims through a controlled review process before publication. The final content helps businesses educate audiences, reduce support gaps, communicate product value, strengthen authority, and attract relevant organic traffic while preserving the precision and professionalism expected in technical markets. Structured content also supports sales enablement, onboarding, training, and informed evaluation throughout complex buying journeys.',
    cta: 'Get Technical SEO Content →',
    reverse: false
  },
  {
    num: '06',
    title: 'Press Release & Newsletter<br><span>Writing</span>',
    desc: 'Press releases and newsletters help organizations communicate important developments to journalists, customers, partners, investors, and subscribers. Webspide writes content for product launches, company milestones, partnerships, events, research, awards, leadership updates, and ongoing audience communication. We first identify the news value, intended reader, supporting facts, desired action, and appropriate distribution format.',
    p1: 'Press releases are structured with clear headlines, concise summaries, verified details, quotations, organizational context, and contact information. Newsletters use engaging subject lines, readable sections, useful updates, relevant links, and focused calls to action. Both formats maintain brand voice while avoiding exaggerated claims that could weaken trust or media credibility.',
    p2: 'Each piece is reviewed for accuracy, grammar, flow, consistency, and audience relevance before approval. Where appropriate, we incorporate searchable language naturally and prepare content for website publication, email delivery, or external distribution. Professional press release and newsletter writing can improve communication, strengthen brand visibility, support public relations activity, and maintain ongoing relationships with important stakeholders across global markets. Reusable templates and editorial guidelines also support faster, more consistent communication for future announcements and campaigns.',
    cta: 'Strengthen Your Brand Communications →',
    reverse: true
  },
  {
    num: '07',
    title: 'Social Media SEO<br><span>Content</span>',
    desc: 'Social content must capture attention quickly while remaining consistent with your wider brand and marketing goals. Webspide creates platform-specific copy for LinkedIn, Instagram, Facebook, X, and other relevant channels. We plan content around audience interests, campaign objectives, brand voice, search behaviour, platform features, and the action each post should encourage.',
    p1: 'Our writers produce captions, educational posts, promotional messages, carousel text, short-form scripts, campaign themes, hashtag recommendations, and social profile copy. Keywords and discoverability terms are incorporated naturally where they improve relevance, but the message remains written for people first. Tone, length, formatting, and calls to action are adapted to each platform and audience.',
    p2: 'Content can be organized into practical calendars that balance education, credibility, engagement, promotion, and community interaction. Every deliverable is reviewed for clarity, accuracy, consistency, and platform suitability. Strong social media SEO content helps brands communicate more effectively, extend the reach of website and blog resources, encourage audience participation, and create a connected presence across search, social platforms, and wider digital campaigns. Reporting insights can then guide future themes, formats, posting priorities, and cross-channel content decisions.',
    cta: 'Elevate Your Social Media Content →',
    reverse: false
  },
  {
    num: '08',
    title: 'Video & YouTube SEO<br><span>Content</span>',
    desc: 'Video visibility depends on both the quality of the production and the words supporting it. Webspide creates SEO content for YouTube videos, explainers, product demonstrations, interviews, webinars, educational series, and promotional campaigns. We research audience questions, keyword opportunities, competitor topics, and viewing intent before planning scripts, titles, descriptions, and supporting metadata.',
    p1: 'Our writers structure scripts with strong openings, logical sections, useful explanations, natural transitions, audience retention points, and clear calls to action. YouTube titles, descriptions, chapters, tags, captions, and transcript recommendations are optimized without misleading viewers. The messaging remains consistent with your brand, video objective, and destination pages.',
    p2: 'Each content package is reviewed for readability, spoken flow, factual accuracy, search alignment, and platform suitability. We can also turn existing articles, webinars, or presentations into video scripts and repurpose transcripts into blogs or social posts. Optimized video and YouTube content helps improve discoverability, click-through potential, watch-time relevance, accessibility, audience understanding, and long-term value from every production. Consistent metadata and content frameworks also make future publishing, series development, and channel management more efficient.',
    cta: 'Optimize Your Video Content →',
    reverse: true
  },
  {
    num: '09',
    title: 'Email Marketing<br><span>Content</span>',
    desc: 'Email content helps businesses nurture leads, educate customers, promote offers, and maintain direct relationships with their audience. Webspide writes newsletters, welcome sequences, lead-nurturing emails, product announcements, abandoned-cart messages, onboarding campaigns, re-engagement flows, and promotional emails. Each message begins with a clear audience segment, business objective, customer stage, and desired action.',
    p1: 'Our writers create subject lines, preview text, headlines, body copy, personalization opportunities, and focused calls to action. Messaging is concise, relevant, and aligned with your brand voice. Email sequences are planned logically so each message builds on previous communication without creating unnecessary repetition, pressure, or confusion for subscribers.',
    p2: 'Content is reviewed for clarity, grammar, consistency, mobile readability, links, and conversion focus before implementation. We can also develop testing variations for subject lines, offers, messaging, and calls to action. Well-written email marketing content supports stronger engagement, lead development, customer retention, repeat purchases, and campaign performance while giving businesses reusable communication frameworks for future automation and promotional activity. Testing insights can then guide future subject lines, sequencing, personalization, offers, and lifecycle communication decisions.',
    cta: 'Drive Conversions with Email Content →',
    reverse: false
  },
  {
    num: '10',
    title: 'SEO Copywriting<br><span>Services</span>',
    desc: 'SEO copywriting combines search visibility with persuasive communication that encourages users to act. Webspide creates copy for landing pages, service pages, product pages, advertisements, campaign pages, lead-generation assets, and other conversion-focused experiences. We research audience intent, commercial keywords, competitors, objections, offers, differentiators, and the role each page plays within the customer journey.',
    p1: 'Our writers develop clear headlines, benefit-led messaging, supporting proof, concise explanations, and focused calls to action. Primary and secondary keywords are integrated naturally without disrupting readability or weakening the brand voice. Content hierarchy is planned so visitors can understand the offer quickly, find relevant details, and move confidently toward enquiry, registration, purchase, or another defined outcome.',
    p2: 'Every page is reviewed for originality, clarity, consistency, SEO alignment, and conversion logic. We can also rewrite underperforming copy, create testing variations, and align advertisements with landing-page messaging. Effective SEO copywriting helps attract relevant search traffic, communicate value more convincingly, reduce customer uncertainty, and improve the commercial performance of websites, campaigns, products, and digital marketing investments. Testing insights also support future refinements to headlines, offers, page structure, and conversion messaging.',
    cta: 'Enhance Your Brand with SEO Copywriting →',
    reverse: true
  }
];

let serviceCardsHtml = `<section class="services-section section-light" id="services">
  <div class="services-section-head">
    <div class="section-tag">What We Do</div>
    <h2 class="section-title gradient-heading">Our SEO Content Writing Services</h2>
    <p class="section-sub" style="margin-bottom:0">Research-driven content solutions designed for search intent, audience engagement, brand authority, and organic performance.</p>
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
      <div class="ts-badge">Tools & Workflows</div>
      <h2 class="gradient-heading">Our Content Writing <span>Tools & Optimization Stack</span></h2>
      <h3>for SEO Content Writing Services</h3>
      <p>We use industry-leading keyword research, analytics, readability, and content optimization platforms to ensure quality and search alignment.</p>
    </div>`
);

// 7. Why Choose Us Section
const whyChooseHtml = `<div class="sections section-soft-gradient">
  <div class="left">
    <br>
    <div class="villan-badge">Why Choose Webspide</div>
    <div class="left-title gradient-heading">Why Choose<br>Webspide For<br><span class="purple">SEO Content Writing<br>Services?</span></div>
    <div class="title-underline"></div>
    <p class="left-desc">Webspide combines SEO research, editorial quality, brand understanding, and transparent collaboration to provide dependable content writing services for international businesses. We create useful, original, and conversion-focused content shaped around search intent, customer needs, and measurable goals. Every engagement is supported by clear planning, quality reviews, scalable processes, consistent communication, and long-term content improvement across markets.</p>
    <div class="illustration">
      <div class="gear-left">⚙</div>
      <div class="gear-sm">⚙</div>
      <div class="code-tag">&lt;/&gt;</div>
      <div class="laptop">
        <div class="laptop-screen">
          <div class="screen-code"><span>function</span> <em>writeSEOContent</em>() {<br>&nbsp;&nbsp;<span>const</span> keywords = [];<br>&nbsp;&nbsp;<em>optimizeArticle</em>(keywords);<br>&nbsp;&nbsp;<span>return</span> content;<br>}</div>
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
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">SEO-Driven Content <span class="accent">Strategies</span></div>
          <p class="feature-desc">We develop content strategies using audience research, keyword opportunities, competitor gaps, customer journeys, and business priorities. Every topic has a defined purpose and place within the wider website. This structured approach helps clients publish consistently, build authority around important subjects, and connect content production with organic visibility, engagement, lead generation, and long-term growth across competitive markets.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">02</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Keyword-Rich, High-Quality <span class="accent">Writing</span></div>
          <p class="feature-desc">Our writers integrate primary, secondary, and supporting keywords naturally within useful, well-structured content. Readability and accuracy remain more important than repetition. Each piece is researched, written, and reviewed to help search engines understand the topic while giving readers clear information, credible value, and persuasive reasons to continue engaging with your brand or business across every page.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">03</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0 0 7.75"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Content Tailored to Your <span class="accent">Audience</span></div>
          <p class="feature-desc">We adapt language, depth, examples, tone, and calls to action according to your customers, industry, market, and communication goals. This audience-first approach helps content address genuine questions and concerns instead of sounding generic. The result is more relevant communication that builds trust, supports informed decisions, and strengthens engagement across different customer journey stages and international markets.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">04</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><polyline points="3 20 21 20"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Data-Backed Content <span class="accent">Optimization</span></div>
          <p class="feature-desc">We use rankings, traffic, engagement, conversions, search trends, and content quality reviews to identify improvement opportunities. Existing pages can be updated, expanded, consolidated, or repositioned according to evidence. This ongoing optimization keeps important content accurate and competitive while helping clients invest resources in topics and formats that demonstrate meaningful business potential over time and changing markets.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">05</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Complete Content <span class="accent">Solutions</span></div>
          <p class="feature-desc">Webspide provides connected content support across websites, blogs, ecommerce stores, local pages, technical resources, press releases, newsletters, social platforms, videos, email campaigns, and conversion copy. One coordinated approach maintains consistent terminology, brand voice, quality standards, and strategic direction, making content easier to manage, scale, repurpose, and improve across global digital channels efficiently over time consistently.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">06</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Industry-Focused SEO <span class="accent">Copywriting</span></div>
          <p class="feature-desc">Our content team researches industry terminology, customer expectations, competitors, products, and technical context before writing. Client specialists can verify sensitive or complex information through structured reviews. This collaborative process improves accuracy without weakening clarity, allowing startups, enterprises, and specialist organizations to publish authoritative, search-friendly content that communicates expertise and supports confident customer decisions across complex markets.</p>
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
    <h2 class="section-title gradient-heading">Our SEO Content Writing Workflow Process</h2>
    <div class="hww-sub-top">Our SEO content writing workflow combines research, strategy, writing, optimization, quality review, publishing support, performance analysis, and continuous improvement to deliver useful, searchable content worldwide.</div>
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
    <h2 class="section-title gradient-heading">Ready to Strengthen Your Content and Organic Visibility?</h2>
    <p class="section-sub">Tell us about your website, audience, target markets, content requirements, current search performance, and business goals. Our content specialists will review your needs and recommend a practical SEO content writing strategy focused on visibility, authority, engagement, qualified traffic, conversions, and sustainable digital growth.</p>
  </div>`;

html = html.replace(/<section class="contact-section section-light" id="contact">.*?<div class="contact-wrap">/s, contactHead + '\n  <div class="contact-wrap">');

// 10. JavaScript Services Array (10 items)
const jsServices = `  const SERVICES=[
    {num:'01',name:'Website Content Writing',tag:'SEO content for homepages, service, landing & about pages',label:'Website Content',svg:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',target:'svc-card-1'},
    {num:'02',name:'Blog & Article Writing',tag:'Research-led blog posts, guides, explainers & articles',label:'Blog & Article',svg:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>',target:'svc-card-2'},
    {num:'03',name:'Ecommerce Content Writing',tag:'Product descriptions, category pages & buying guides',label:'Ecommerce Content',svg:'<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>',target:'svc-card-3'},
    {num:'04',name:'Local SEO Content Writing',tag:'Location pages, regional service copy & local landing pages',label:'Local SEO',svg:'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',target:'svc-card-4'},
    {num:'05',name:'Technical SEO Content Writing',tag:'White papers, technical docs, guides & solution pages',label:'Technical SEO',svg:'<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',target:'svc-card-5'},
    {num:'06',name:'Press Release & Newsletter Writing',tag:'News announcements, company updates & subscriber newsletters',label:'PR & Newsletters',svg:'<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',target:'svc-card-6'},
    {num:'07',name:'Social Media SEO Content',tag:'Platform-specific copy, captions & carousel text',label:'Social Media SEO',svg:'<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',target:'svc-card-7'},
    {num:'08',name:'Video & YouTube SEO Content',tag:'YouTube scripts, titles, descriptions & metadata',label:'Video & YouTube',svg:'<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>',target:'svc-card-8'},
    {num:'09',name:'Email Marketing Content',tag:'Newsletters, lead nurture flows & promotional emails',label:'Email Content',svg:'<path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9"/><circle cx="18" cy="18" r="3"/><polyline points="18 16 18 18 19 19"/>',target:'svc-card-9'},
    {num:'10',name:'SEO Copywriting',tag:'Conversion-focused landing page copy & sales assets',label:'SEO Copywriting',svg:'<circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/>',target:'svc-card-10'}
  ];`;

html = html.replace(/const SERVICES=\[\s*\{num:'01'.*?\];/s, jsServices);

// 11. JavaScript Workflow Steps Array with EXACT labels from DOCX
const jsSteps = `  const steps=[
    {num:'01',label:'Content Discovery & Strategy',title:'Content Discovery & Strategy',desc:'We begin by understanding your business, audience, products, services, competitors, brand voice, customer journey, existing content, and growth objectives. This stage establishes the purpose, priorities, and strategic direction for the complete content engagement.',subs:[{title:'Business & Brand Analysis',desc:'We analyse your business model, positioning, audience, competitors, and communication goals.',icon:'<path d="M3 3h18v18H3zM3 9h18M9 21V9"/>'},{title:'Existing Content Review',desc:'We assess current pages for quality, relevance, gaps, overlap, and performance.',icon:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>'},{title:'Audience & Journey Analysis',desc:'We identify customer questions, concerns, motivations, and decision-making stages.',icon:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>'},{title:'Content Goal Definition',desc:'We define visibility, engagement, authority, lead generation, and conversion objectives.',icon:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>'}],deliverables:['Business and brand content analysis','Existing content audit summary','Audience and customer-journey insights','Approved content goals and strategic direction'],illus:'<img src="Images/Webspide-Images_/Digital Marketting/seo-content-writing-services/Workflow/seo-content-writing-services-content-discovery-strategy.webp" alt="Content Discovery & Strategy" style="width:100%;height:auto;display:block;border:none;outline:none;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);background:transparent;">' },
    {num:'02',label:'Keyword Research & Content Planning',title:'Keyword Research & Content Planning',desc:'We research how your audience searches, which subjects matter, where competitors have gaps, and how topics should be organized. The findings are converted into a practical and prioritized content roadmap.',subs:[{title:'Keyword Research',desc:'We identify primary, secondary, long-tail, commercial, and informational keywords.',icon:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>'},{title:'Search Intent Analysis',desc:'We connect each keyword with the reader’s expected purpose and journey stage.',icon:'<path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"/>'},{title:'Competitor Content Analysis',desc:'We review competing topics, formats, strengths, weaknesses, and content gaps.',icon:'<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>'},{title:'Content Mapping',desc:'We assign keywords, topics, formats, pages, priorities, and internal relationships.',icon:'<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/>'}],deliverables:['Prioritized keyword research document','Search-intent and audience mapping','Competitor content-gap analysis','Approved content roadmap and topic plan'],illus:'<img src="Images/Webspide-Images_/Digital Marketting/seo-content-writing-services/Workflow/seo-content-writing-services-keyword-research-content-planning.webp" alt="Keyword Research & Content Planning" style="width:100%;height:auto;display:block;border:none;outline:none;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);background:transparent;">' },
    {num:'03',label:'Content Creation & SEO Optimization',title:'Content Creation & SEO Optimization',desc:'Our writers transform the approved strategy into original, useful, and brand-aligned content. Each piece is developed around search intent, reader needs, clear communication, and the desired business action.',subs:[{title:'Content Outline Development',desc:'We create logical structures covering important topics, questions, and supporting details.',icon:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>'},{title:'SEO Content Writing',desc:'We write original, engaging content with natural keyword integration and clarity.',icon:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>'},{title:'On-Page Content Optimization',desc:'We optimize headings, metadata guidance, links, formatting, and calls to action.',icon:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>'},{title:'Brand Voice Alignment',desc:'We maintain consistent terminology, tone, messaging, and communication standards throughout.',icon:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'}],deliverables:['Approved content outlines','Original SEO-optimized written content','On-page optimization recommendations','Brand-aligned calls to action'],illus:'<img src="Images/Webspide-Images_/Digital Marketting/seo-content-writing-services/Workflow/seo-content-writing-services-content-creation-seo-optimization.webp" alt="Content Creation & SEO Optimization" style="width:100%;height:auto;display:block;border:none;outline:none;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);background:transparent;">' },
    {num:'04',label:'Editorial Review & Quality Assurance',title:'Editorial Review & Quality Assurance',desc:'Every content piece passes through structured editorial and SEO reviews before delivery. We verify accuracy, readability, originality, grammar, consistency, optimization, formatting, and alignment with the approved requirements.',subs:[{title:'Editorial Review',desc:'We review grammar, sentence flow, readability, tone, and overall communication quality.',icon:'<polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>'},{title:'SEO Quality Review',desc:'We verify keyword use, search intent, headings, linking, and topic coverage.',icon:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>'},{title:'Accuracy & Consistency Check',desc:'We confirm terminology, factual information, brand claims, and message consistency.',icon:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'},{title:'Revision & Approval',desc:'We incorporate valid feedback and prepare the final approved content version.',icon:'<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'}],deliverables:['Editorially reviewed content','SEO quality-assurance report','Accuracy and consistency verification','Final approved content files'],illus:'<img src="Images/Webspide-Images_/Digital Marketting/seo-content-writing-services/Workflow/seo-content-writing-services-editorial-review-quality-assurance.webp" alt="Editorial Review & Quality Assurance" style="width:100%;height:auto;display:block;border:none;outline:none;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);background:transparent;">' },
    {num:'05',label:'Publishing & Distribution Support',title:'Publishing & Distribution Support',desc:'Once the content is approved, we help prepare it for publication across the relevant website, blog, ecommerce store, social platform, email channel, or other approved digital destination.',subs:[{title:'Content Formatting',desc:'We organize headings, paragraphs, lists, links, and page elements correctly.',icon:'<rect x="3" y="3" width="18" height="18" rx="2"/>'},{title:'Metadata Preparation',desc:'We provide optimized title tags, meta descriptions, and related recommendations.',icon:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>'},{title:'Internal Linking Support',desc:'We recommend useful connections between related pages, services, and resources.',icon:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>'},{title:'Distribution Planning',desc:'We identify suitable website, social, email, and promotional distribution opportunities.',icon:'<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>'}],deliverables:['Publication-ready formatted content','Metadata and on-page SEO guidance','Internal linking recommendations','Content distribution and promotion plan'],illus:'<img src="Images/Webspide-Images_/Digital Marketting/seo-content-writing-services/Workflow/seo-content-writing-services-publishing-distribution-support.webp" alt="Publishing & Distribution Support" style="width:100%;height:auto;display:block;border:none;outline:none;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);background:transparent;">' },
    {num:'06',label:'Performance Monitoring & Improvement',title:'Performance Monitoring & Continuous Improvement',desc:'After publication, performance insights help identify content that should be improved, expanded, consolidated, repurposed, or supported with additional material. This creates an ongoing content-growth process rather than isolated production.',subs:[{title:'Content Performance Analysis',desc:'We review rankings, traffic, engagement, conversions, and audience behaviour trends.',icon:'<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>'},{title:'Content Refresh Planning',desc:'We identify outdated information, weak sections, and new optimization opportunities.',icon:'<polyline points="23 4 23 10 17 10"/><polyline points="2 20 23 14 17 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 1 3.51 15"/>'},{title:'Content Repurposing',desc:'We adapt valuable content into suitable social, video, email, or visual formats.',icon:'<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>'},{title:'Strategy Refinement',desc:'We update topics, priorities, formats, and publishing plans using performance evidence.',icon:'<polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/>'}],deliverables:['Content performance and opportunity report','Content refresh and optimization plan','Repurposing recommendations','Updated content strategy and growth roadmap'],illus:'<img src="Images/Webspide-Images_/Digital Marketting/seo-content-writing-services/Workflow/seo-content-writing-services-performance-monitoring-continuous-improvement.webp" alt="Performance Monitoring & Continuous Improvement" style="width:100%;height:auto;display:block;border:none;outline:none;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);background:transparent;">' }
  ];`;

html = html.replace(/const steps=\[\s*\{num:'01'.*?\];/s, jsSteps);

fs.writeFileSync(targetPath, html, 'utf8');
console.log('Successfully updated indexseocontent1.html with exact full workflow labels!');
