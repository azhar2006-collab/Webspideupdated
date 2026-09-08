const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'indexapp1.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Meta / Head Title & Meta tags
html = html.replace(
  /<title>.*?<\/title>/s,
  '<title>App Store Optimization Services | Webspide</title>'
);

html = html.replace(
  /<meta name="description"\s+content=".*?">/s,
  '<meta name="description"\n        content="Increase app visibility, organic installs, and conversions with Webspide’s ASO services for Apple App Store and Google Play, including keywords, creatives, and CRO.">'
);

html = html.replace(
  /<meta name="keywords"\s+content=".*?">/s,
  '<meta name="keywords"\n        content="App store optimization services, App store optimization, ASO services, ASO agency, ASO company, App store optimization company, App store optimization agency, App store keyword optimization, Apple App Store optimization, Google Play Store optimization, Mobile app store optimization, App listing optimization, App conversion rate optimization, App store localization services, App user acquisition services">'
);

// 2. Hero Section
html = html.replace(
  /<div class="badge fade-in">.*?<\/div>/s,
  '<div class="badge fade-in">ASO Services</div>'
);

html = html.replace(
  /<h1 class="fade-in delay-1">.*?<\/h1>/s,
  `<h1 class="fade-in delay-1">
      <span class="grad">APP STORE</span>
      <span class="grad">OPTIMIZATION</span>
      <span class="outline">Services That Grow</span>
    </h1>`
);

html = html.replace(
  /<p class="hero-desc fade-in delay-2">.*?<\/p>/s,
  '<p class="hero-desc fade-in delay-2">Webspide helps mobile applications improve visibility, rankings, conversions, and organic installs across the Apple App Store and Google Play. Our app store optimization services cover keyword strategy, metadata, creative assets, localization, reviews, conversion optimization, analytics, and continuous improvement. We build data-driven ASO campaigns around your audience, markets, competition, and growth objectives.</p>'
);

// 3. Orbit Cards Mobile (12 items)
const mobileOrbitCards = `<div class="orbit-cards-mobile">
  <a href="#svc-card-1" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div><div><div class="orb-card-name">Keywords</div><div class="orb-card-tag">Keyword strategy & mapping</div></div></a>
  <a href="#svc-card-2" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></div><div><div class="orb-card-name">Metadata</div><div class="orb-card-tag">Title & description</div></div></a>
  <a href="#svc-card-3" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></div><div><div class="orb-card-name">Visuals</div><div class="orb-card-tag">Icons & screenshots</div></div></a>
  <a href="#svc-card-4" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg></div><div><div class="orb-card-name">Reviews</div><div class="orb-card-tag">Reputation management</div></div></a>
  <a href="#svc-card-5" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h8m-8 6h16"/></svg></div><div><div class="orb-card-name">Category</div><div class="orb-card-tag">Classification & tags</div></div></a>
  <a href="#svc-card-6" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div><div><div class="orb-card-name">Localize</div><div class="orb-card-tag">Global multilingual ASO</div></div></a>
  <a href="#svc-card-7" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg></div><div><div class="orb-card-name">Analysis</div><div class="orb-card-tag">Competitor benchmarking</div></div></a>
  <a href="#svc-card-8" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></div><div><div class="orb-card-name">Deep Links</div><div class="orb-card-tag">App indexing & links</div></div></a>
  <a href="#svc-card-9" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div><div><div class="orb-card-name">CRO</div><div class="orb-card-tag">Download optimization</div></div></a>
  <a href="#svc-card-10" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><div><div class="orb-card-name">Retention</div><div class="orb-card-tag">In-app engagement</div></div></a>
  <a href="#svc-card-11" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg></div><div><div class="orb-card-name">Paid ASO</div><div class="orb-card-tag">User acquisition</div></div></a>
  <a href="#svc-card-12" class="orb-card"><div class="orb-card-icon"><svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><polyline points="3 20 21 20"/></svg></div><div><div class="orb-card-name">Analytics</div><div class="orb-card-tag">Performance tracking</div></div></a>
</div>`;

html = html.replace(/<div class="orbit-cards-mobile">.*?<\/div>\s*<!-- BANNER 1 -->/s, mobileOrbitCards + '\n\n<!-- BANNER 1 -->');

// 4. Banner 1 & Banner 2
const banner1Content = `<!-- BANNER 1 -->
<div class="banner banner-1 section-soft-gradient">
  <div class="b1-right-line"></div>
  <div class="b1-corner-dot tl"></div><div class="b1-corner-dot tr"></div><div class="b1-corner-dot bl"></div><div class="b1-corner-dot br"></div>
  <div class="b1-content">
    <div class="b1-header">
      <div class="b1-title gradient-heading">Unlock Higher Rankings with<span>Professional ASO Services</span></div>
      <p class="b1-desc">Strong app store visibility helps the right users discover, understand, and download your application. Webspide provides comprehensive app store optimization services for iOS and Android, combining keyword research, listing optimization, visual testing, localization, reputation management, conversion improvement, competitor intelligence, analytics, and continuous refinement to support sustainable app growth.</p>
    </div>
    <div class="b1-cards">
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg></div><div class="b1-card-title">Higher App Store Rankings</div></div><p class="b1-card-desc">We research relevant search terms, improve metadata, and refine listing signals to help your application compete for valuable searches. Better alignment between user intent and app-store content can strengthen visibility across Apple App Store and Google Play results.</p></div>
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg></div><div class="b1-card-title">Increased Organic Downloads</div></div><p class="b1-card-desc">Clear positioning, persuasive messaging, strong creative assets, and relevant keywords help more visitors understand your application and choose to install it. We continuously improve listing performance to support qualified organic downloads rather than visibility without meaningful user action.</p></div>
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div><div class="b1-card-title">ASO for Global Markets</div></div><p class="b1-card-desc">We adapt keywords, messaging, screenshots, and store information for different languages and regions. This localized approach considers cultural expectations, market behavior, platform requirements, and local competitors so your application can communicate more effectively with international audiences.</p></div>
    </div>
  </div>
</div>`;

const banner2Content = `<!-- BANNER 2 -->
<div class="banner banner-2 section-soft-gradient">
  <div class="b2-content">
    <div class="b2-cards">
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><polyline points="3 20 21 20"/></svg></div><div class="b2-card-title">Data-Driven ASO Strategies</div></div><p class="b1-card-desc">We combine app-store data, competitor activity, conversion trends, review insights, keyword movement, and user behavior to guide decisions. Clear measurement helps us prioritize improvements, test assumptions, and refine campaigns according to real performance rather than guesswork.</p></div>
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div><div class="b2-card-title">Targeted Keyword Optimization</div></div><p class="b1-card-desc">Our ASO specialists evaluate search volume, relevance, competition, localization, and conversion potential before selecting keywords. These terms are mapped carefully across titles, subtitles, descriptions, and available metadata fields to attract users searching for suitable applications.</p></div>
      <div class="b1-card"><div class="b1-card-hdr"><div class="b1-icon"><svg viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg></div><div class="b2-card-title">Ongoing ASO Improvements</div></div><p class="b1-card-desc">App-store competition, algorithms, trends, reviews, and user expectations continue to change. We monitor performance and update keywords, metadata, creative assets, localization, and conversion strategies to protect progress and identify new opportunities for sustainable growth internationally.</p></div>
    </div>
  </div>
</div>`;

html = html.replace(/<!-- BANNER 1 -->.*?<!-- BANNER 2 -->.*?<\/div>\s*<\/div>/s, banner1Content + '\n\n' + banner2Content);

// Helper function to generate SVG visuals for service cards
function getSvgVisual(num) {
  return `<svg viewBox="0 0 320 256" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" width="280" height="216" rx="24" fill="rgba(59,92,200,0.06)" stroke="rgba(139,92,246,0.25)" stroke-width="2"/>
    <circle cx="160" cy="128" r="75" fill="rgba(192,132,252,0.12)" stroke="#8B5CF6" stroke-width="2" stroke-dasharray="6 6"/>
    <circle cx="160" cy="128" r="45" fill="rgba(31,79,178,0.2)" stroke="#1F4FB2" stroke-width="2"/>
    <text x="160" y="135" text-anchor="middle" fill="#07164F" font-size="28" font-family="'Orbitron', sans-serif" font-weight="900">${num}</text>
  </svg>`;
}

// 5. Services Section Header & 12 Cards
const servicesData = [
  {
    num: '01',
    title: 'Keyword Optimization &<br><span>ASO Strategy</span>',
    desc: 'Effective app store optimization begins with understanding how users search, which terms competitors target, and what makes your application relevant. Webspide researches branded, category, feature, problem-based, and localized keywords for the Apple App Store and Google Play. We assess search demand, competition, user intent, market fit, and conversion potential before building a prioritized keyword framework.',
    p1: 'Our ASO specialists map selected terms across available metadata fields, including titles, subtitles, short descriptions, long descriptions, keyword fields, and promotional content where appropriate. We avoid repetitive stuffing and instead balance discoverability with clear, persuasive language. Competitor listings, category trends, review vocabulary, and regional differences also inform the strategy.',
    p2: 'The completed ASO plan guides metadata updates, creative testing, localization, conversion optimization, and performance tracking. Keyword rankings and listing outcomes are reviewed regularly so the strategy can respond to algorithm changes, new competitors, product updates, and evolving search behavior. This structured approach helps attract more relevant users, improve organic visibility, and support sustainable app growth across target markets.',
    cta: 'Get Expert Keyword Optimization →',
    reverse: false
  },
  {
    num: '02',
    title: 'App Title &<br><span>Description Optimization</span>',
    desc: 'Your app title and description influence both discoverability and the decision to download. Webspide reviews your value proposition, audience, priority keywords, product features, competitors, and store-specific metadata limits before rewriting the listing. The goal is to communicate what the application does, who it serves, and why it is useful without sacrificing readability or platform compliance.',
    p1: 'We create concise, keyword-aware titles, subtitles, short descriptions, and long descriptions suited to Apple App Store and Google Play requirements. Messaging is structured around user benefits, differentiators, credibility, and clear calls to action. Where testing tools and traffic volumes allow, alternative wording can be compared to identify stronger conversion opportunities.',
    p2: 'Metadata is reviewed whenever features, markets, keywords, or competitive conditions change. We also align text with screenshots, videos, localization, and campaign messaging so users receive a consistent story throughout the listing. This coordinated approach can improve search relevance, strengthen visitor understanding, and increase the proportion of qualified users who move from viewing the page to installing the app.',
    cta: 'Optimize Your App Listing →',
    reverse: true
  },
  {
    num: '03',
    title: 'App Icon &<br><span>Visual Asset Optimization</span>',
    desc: 'Visual assets often shape a user’s first impression before they read the complete listing. Webspide reviews your app icon, screenshots, preview videos, feature graphics, and store presentation against brand identity, user expectations, platform guidelines, and competitor patterns. We identify whether the current creative communicates value quickly and supports confident download decisions.',
    p1: 'Our team develops or recommends clearer visual concepts, screen sequences, captions, benefit-led messaging, device frames, and platform-appropriate layouts. Each asset is planned to highlight important features, demonstrate real use cases, and maintain visual consistency. Where suitable testing options are available, different icons, screenshots, messages, or sequences can be compared objectively.',
    p2: 'Creative performance is monitored alongside conversion rates, traffic sources, user segments, and market differences. Visual assets can then be refined for product updates, seasonal campaigns, new languages, or changing audience priorities. This ongoing process helps your application stand out in crowded search results, communicate its purpose more effectively, and convert more relevant visitors into installs without relying only on keyword visibility.',
    cta: 'Upgrade Your App’s Visuals →',
    reverse: false
  },
  {
    num: '04',
    title: 'App Reviews &<br><span>Ratings Management</span>',
    desc: 'Ratings and reviews influence trust, conversion, product reputation, and app-store performance. Webspide helps businesses create responsible processes for encouraging genuine feedback from engaged users without manipulating review systems. We examine rating trends, recurring complaints, positive themes, response quality, and competitor feedback to understand how users perceive the application.',
    p1: 'Our approach can include review-request timing, in-app prompt recommendations, response guidelines, escalation workflows, sentiment categorization, and coordination with support or product teams. Negative reviews are treated as useful signals rather than ignored. Clear, professional responses show that concerns are acknowledged while recurring technical or experience issues are documented for resolution.',
    p2: 'We track changes in rating quality, review volume, sentiment, common topics, and store conversion where data is available. Insights can inform product improvements, release communication, listing updates, and customer-support priorities. By combining reputation management with genuine product development, brands can strengthen credibility, improve user confidence, and build a healthier long-term review profile across the Apple App Store and Google Play.',
    cta: 'Manage Your App Reputation →',
    reverse: true
  },
  {
    num: '05',
    title: 'App Category &<br><span>Tag Selection</span>',
    desc: 'Choosing the right category, subcategory, and available tags affects how users and app stores understand your product. Webspide evaluates your core functionality, target audience, competitor placement, market demand, and platform rules before recommending the most relevant classification. The objective is to improve contextual relevance without placing the application in an inaccurate or overly competitive category.',
    p1: 'We compare category leaders, ranking difficulty, user expectations, feature alignment, and potential discovery opportunities across the Apple App Store and Google Play. Where platforms provide tags or related classification fields, we select options that accurately represent the app’s purpose and complement the keyword strategy. Decisions are documented so future changes remain consistent.',
    p2: 'Category performance is reviewed as the product evolves, expands into new markets, or adds significant functionality. A better classification can support discoverability, browsing visibility, and stronger alignment with comparable applications. However, category selection is coordinated with metadata, creative assets, reviews, and conversion strategy because classification alone cannot compensate for a weak or unclear store listing.',
    cta: 'Choose the Right App Category →',
    reverse: false
  },
  {
    num: '06',
    title: 'App Store Localization &<br><span>Multilingual ASO</span>',
    desc: 'Reaching international users requires more than directly translating an app listing. Webspide develops localized ASO strategies based on regional search behavior, language usage, cultural expectations, competitor positioning, and platform-specific opportunities. We identify which markets offer realistic potential and which listing elements should be adapted for relevance, clarity, and conversion.',
    p1: 'Our localization work can cover keywords, titles, subtitles, descriptions, screenshot captions, preview messaging, promotional text, and other available metadata. Native-language review and cultural adaptation help prevent awkward wording or messages that do not resonate locally. We also consider differences between Apple App Store and Google Play indexing rules in each market.',
    p2: 'Performance is monitored by territory, language, keyword movement, conversion, and user feedback where data is available. This allows us to refine underperforming listings, expand successful approaches, and coordinate future product or marketing decisions. Multilingual ASO helps your application communicate more naturally, compete for locally relevant searches, and attract higher-quality users across selected international markets.',
    cta: 'Expand Your App’s Global Reach →',
    reverse: true
  },
  {
    num: '07',
    title: 'Competitor Analysis &<br><span>ASO Benchmarking</span>',
    desc: 'Competitor analysis reveals how leading and emerging applications position themselves, attract users, and convert store visitors. Webspide reviews relevant competitors across keywords, categories, metadata, visual assets, ratings, reviews, update frequency, localization, and visible acquisition activity. We separate useful market signals from tactics that may not suit your product or audience.',
    p1: 'Our ASO benchmarking process compares your application with selected peers using measurable indicators such as keyword coverage, ranking visibility, creative presentation, review quality, listing clarity, and conversion opportunities. We identify gaps, strengths, risks, and realistic areas for differentiation. The findings help teams avoid copying competitors blindly while learning from proven patterns.',
    p2: 'Benchmarking is repeated as markets, algorithms, products, and competitors change. Updated insights can guide keyword expansion, creative testing, feature communication, localization, and category decisions. This structured competitive view supports better prioritization and gives stakeholders a clearer understanding of where the app currently stands, what improvements may create value, and which advantages should be communicated more strongly.',
    cta: 'Gain a Competitive ASO Advantage →',
    reverse: false
  },
  {
    num: '08',
    title: 'App Indexing &<br><span>Deep Linking</span>',
    desc: 'App indexing and deep linking help users move from search results, websites, advertisements, messages, or campaigns to relevant content inside an application. Webspide reviews your app architecture, website, supported platforms, user journeys, and technical requirements before recommending suitable universal links, app links, deferred deep links, or indexing configurations.',
    p1: 'We coordinate with development teams to define destination rules, fallback behavior, authentication handling, campaign parameters, and analytics tracking. Links are tested across supported devices, browsers, installed and non-installed states, and important user scenarios. Clear implementation reduces broken journeys and helps users reach the intended screen with less friction.',
    p2: 'Proper deep linking can support re-engagement, content discovery, onboarding, promotions, referrals, and cross-channel attribution. App indexing may also improve how eligible app content appears in broader search experiences, depending on platform support and implementation. Documentation and monitoring help teams maintain link behavior when routes, campaigns, websites, or app features change.',
    cta: 'Improve App Search Visibility →',
    reverse: true
  },
  {
    num: '09',
    title: 'Conversion Rate Optimization<br><span>for App Downloads</span>',
    desc: 'App-store conversion optimization focuses on turning more qualified listing visitors into installers. Webspide examines traffic sources, audience intent, keyword relevance, messaging, screenshots, videos, ratings, reviews, localization, and competitor presentation to identify possible barriers. We establish a clear baseline before recommending changes so improvements can be measured rather than assumed.',
    p1: 'Testing ideas may include alternative icons, screenshot sequences, headlines, captions, descriptions, preview videos, promotional messages, or market-specific creative. Experiments are prioritized according to expected impact, available traffic, platform capabilities, and implementation effort. We avoid changing several important variables simultaneously when doing so would make results difficult to interpret.',
    p2: 'Conversion data is reviewed by store, country, device, traffic source, and user segment where reporting allows. Winning changes are documented and unsuccessful assumptions become useful learning for future tests. This disciplined CRO approach helps improve listing clarity, strengthen user confidence, and increase installs from existing visibility.',
    cta: 'Increase Your App Downloads →',
    reverse: false
  },
  {
    num: '10',
    title: 'In-App Engagement &<br><span>Retention Strategies</span>',
    desc: 'Sustainable app growth depends on what users experience after installation. Webspide connects ASO insights with onboarding, activation, engagement, and retention data to identify whether store promises match the actual product journey. We review user expectations, first-session behavior, feature adoption, drop-off points, notifications, support feedback, and release communication to uncover improvement opportunities.',
    p1: 'Recommendations may include clearer onboarding, permission timing, personalized content, feature education, in-app messaging, push-notification strategy, loyalty mechanisms, re-engagement journeys, and more accurate listing communication. We coordinate suggestions with product, design, development, and lifecycle-marketing teams because retention improvements usually require changes beyond the app-store page.',
    p2: 'Engagement and retention metrics are monitored alongside acquisition sources, user quality, reviews, and conversion. This helps distinguish campaigns that generate large install volumes from those that attract users who remain active and valuable. By aligning store positioning with real product value, businesses can reduce avoidable churn, improve satisfaction, and strengthen ratings.',
    cta: 'Improve User Engagement →',
    reverse: true
  },
  {
    num: '11',
    title: 'Paid ASO &<br><span>User Acquisition Campaigns</span>',
    desc: 'Organic app store optimization and paid user acquisition can work together to increase visibility and accelerate learning. Webspide plans campaigns across suitable channels such as Apple Search Ads, Google App campaigns, social platforms, influencer partnerships, or retargeting networks. We define target audiences, markets, budgets, creative requirements, measurement, and expected acquisition outcomes before launch.',
    p1: 'Campaign keywords, advertisements, landing experiences, and app-store listings are aligned so users receive consistent messaging. We monitor costs, installs, conversion, retention, in-app actions, and user quality where tracking is available. Paid traffic can also provide faster insights into which messages, audiences, and creative assets deserve further testing within the organic ASO strategy.',
    p2: 'Budgets and targeting are refined according to performance, seasonality, market conditions, and business priorities. We distinguish low-cost installs from valuable users and avoid scaling campaigns based only on download volume. This integrated approach helps businesses acquire relevant users, improve store conversion, and support product launches.',
    cta: 'Launch Your User Acquisition Campaign →',
    reverse: false
  },
  {
    num: '12',
    title: 'App Performance Monitoring<br><span>& Analytics</span>',
    desc: 'App store optimization requires ongoing measurement because rankings, conversion, competitors, reviews, and user behavior change continuously. Webspide establishes reporting around your goals and available data sources, tracking indicators such as keyword visibility, impressions, page views, downloads, conversion rates, ratings, reviews, retention, acquisition channels, and market-level performance.',
    p1: 'We organize results into clear dashboards or reports that explain what changed, why it may have changed, and which actions should follow. Data is segmented by platform, country, language, version, campaign, or traffic source where possible. We also identify tracking gaps, attribution limitations, and inconsistent definitions that could lead to misleading conclusions.',
    p2: 'Regular analysis guides metadata updates, creative tests, localization, review management, paid acquisition, and product communication. Rather than reporting numbers without context, we connect performance with releases, campaigns, competitor activity, and store changes. This gives stakeholders a clearer view of progress, risks, and opportunities.',
    cta: 'Monitor Your App Performance →',
    reverse: true
  }
];

let serviceCardsHtml = `<section class="services-section section-light" id="services">
  <div class="services-section-head">
    <div class="section-tag">What We Do</div>
    <h2 class="section-title gradient-heading">Our App Store Optimization Services</h2>
    <p class="section-sub" style="margin-bottom:0">Data-driven ASO solutions to boost app visibility, organic installs, conversions, and growth across iOS and Android.</p>
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
      <h2 class="gradient-heading">Our ASO <span>Tools & Platforms</span></h2>
      <h3>for App Store Optimization Services</h3>
      <p>We select reliable ASO tools, analytics platforms, and research solutions to deliver data-driven app store optimization across iOS and Android.</p>
    </div>`
);

// 7. How We Work Header
html = html.replace(
  /<section class="how-we-work" id="how-we-work">\s*<div class="hww-header">.*?<\/div>/s,
  `<section class="how-we-work" id="how-we-work">
  <div class="hww-header">
    <div class="hww-badge-top">HOW WE WORK</div>
    <h2 class="section-title gradient-heading">Our App Store Optimization Workflow Process</h2>
    <div class="hww-sub-top">Our app store optimization workflow combines research, metadata planning, creative improvement, testing, performance analysis, and continuous refinement to strengthen visibility, conversion, engagement, and sustainable app growth.</div>
  </div>`
);

// 8. Why Choose Us Section
const whyChooseHtml = `<div class="sections section-soft-gradient">
  <div class="left">
    <br>
    <div class="villan-badge">Why Choose Webspide</div>
    <div class="left-title gradient-heading">Why Choose<br>Webspide For<br><span class="purple">App Store<br>Optimization<br>Services?</span></div>
    <div class="title-underline"></div>
    <p class="left-desc">Webspide combines keyword intelligence, listing optimization, creative strategy, competitor research, analytics, and transparent communication to deliver app store optimization services for global businesses. We focus on qualified visibility, conversion, retention, and sustainable growth rather than short-term download numbers. Every ASO campaign is aligned with your product, audience, platforms, markets, resources, and long-term acquisition objectives worldwide.</p>
    <div class="illustration">
      <div class="gear-left">⚙</div>
      <div class="gear-sm">⚙</div>
      <div class="code-tag">&lt;/&gt;</div>
      <div class="laptop">
        <div class="laptop-screen">
          <div class="screen-code"><span>function</span> <em>initASO</em>() {<br>&nbsp;&nbsp;<span>const</span> app = [];<br>&nbsp;&nbsp;<em>optimize</em>(app);<br>&nbsp;&nbsp;<span>return</span> app;<br>}</div>
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
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Experienced ASO <span class="accent">Specialists</span></div>
          <p class="feature-desc">Our specialists understand Apple App Store and Google Play search behavior, metadata, creative assets, localization, conversion testing, reviews, and analytics. This connected expertise helps us identify practical opportunities across the complete listing. Clients receive recommendations based on product context, audience needs, competitive conditions, and measurable growth priorities rather than generic optimization checklists applied without explanation.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">02</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Customized ASO <span class="accent">Strategies</span></div>
          <p class="feature-desc">Every application has different users, markets, features, competitors, monetization models, and acquisition goals. We create tailored ASO strategies based on research, current performance, available data, and business priorities. This focused approach directs effort toward keywords, listings, creative assets, regions, and experiments most likely to improve qualified visibility, installs, engagement, and sustainable growth over time globally.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">03</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Conversion-Focused App <span class="accent">Listings</span></div>
          <p class="feature-desc">We optimize titles, descriptions, screenshots, icons, videos, ratings, and supporting messages as one connected conversion experience. Search visibility is important, but users must also understand and trust the application. Our approach balances keyword relevance with clear positioning, persuasive benefits, visual consistency, and platform compliance to improve the likelihood that qualified store visitors become installers effectively.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">04</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Cross-Platform ASO <span class="accent">Expertise</span></div>
          <p class="feature-desc">Apple App Store and Google Play use different metadata fields, indexing behavior, testing tools, creative requirements, and reporting systems. We adapt recommendations to each platform rather than applying identical tactics everywhere. This platform-aware approach improves accuracy, reduces implementation mistakes, and helps Android and iOS listings communicate consistently while taking advantage of store-specific growth opportunities worldwide.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">05</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Transparent Performance <span class="accent">Tracking</span></div>
          <p class="feature-desc">We monitor keyword movement, impressions, page views, conversion, downloads, reviews, ratings, retention, and market performance where data is available. Reports explain completed actions, changes, limitations, and recommended priorities in clear language. This transparency helps stakeholders understand progress, approve future tests, allocate resources, and keep ASO activity connected to wider acquisition and product objectives responsibly worldwide.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">06</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Continuous Optimization <span class="accent">&amp; Support</span></div>
          <p class="feature-desc">App store optimization requires ongoing attention as algorithms, competitors, products, reviews, markets, and user expectations change. We review performance, update metadata, refine creative assets, expand localization, and test new opportunities over time. Long-term support helps protect earlier gains, respond to emerging issues, and maintain a structured growth program across future releases and campaigns internationally over time.</p>
        </div>
      </div>
    </div>
  </div>
</div>`;

html = html.replace(/<div class="sections section-soft-gradient">.*?<\/div>\s*<\/div>\s*<\/div>\s*<!-- CONTACT -->/s, whyChooseHtml + '\n\n\n\n<!-- CONTACT -->');

// 9. Contact section head
html = html.replace(
  /<section class="contact-section section-light" id="contact">\s*<div class="section-head".*?<\/div>/s,
  `<section class="contact-section section-light" id="contact">
  <div class="section-head" style="margin-bottom:2.5rem">
    <div class="section-tag">Get In Touch</div>
    <h2 class="section-title gradient-heading">Start Growing Your App</h2>
    <p class="section-sub">Tell us about your mobile application, target markets, current store performance, user-acquisition challenges, and growth goals. Our team will review your requirements and recommend a practical app store optimization strategy focused on discoverability, qualified downloads, conversion improvement, engagement, and sustainable app growth.</p>
  </div>`
);

// 10. JavaScript Services Array (12 items)
const jsServices = `  const SERVICES=[
    {num:'01',name:'Keyword Optimization',tag:'Research, prioritize, and map keywords across titles, subtitles, and metadata for maximum app visibility',label:'Keywords',svg:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',target:'svc-card-1'},
    {num:'02',name:'App Title & Description',tag:'Keyword-aware titles, subtitles, and descriptions optimized for conversions and platform compliance',label:'Metadata',svg:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>',target:'svc-card-2'},
    {num:'03',name:'Icon & Visual Assets',tag:'App icons, screenshots, preview videos, and feature graphics optimized for conversions',label:'Visuals',svg:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',target:'svc-card-3'},
    {num:'04',name:'Reviews & Ratings',tag:'Encourage genuine feedback, respond professionally, and build a strong app reputation',label:'Reviews',svg:'<path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z"/>',target:'svc-card-4'},
    {num:'05',name:'Category & Tag Selection',tag:'Choose the most relevant category and tags for better contextual discovery and browsing visibility',label:'Category',svg:'<path d="M4 6h16M4 12h8m-8 6h16"/>',target:'svc-card-5'},
    {num:'06',name:'Localization & Multilingual',tag:'Adapt keywords, screenshots, and metadata for international markets and languages',label:'Localize',svg:'<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',target:'svc-card-6'},
    {num:'07',name:'Competitor Analysis',tag:'Compare keywords, creatives, ratings, and positioning against top competitors in your category',label:'Analysis',svg:'<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',target:'svc-card-7'},
    {num:'08',name:'App Indexing & Deep Links',tag:'Connect search results, websites, and campaigns to relevant in-app content seamlessly',label:'Deep Links',svg:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',target:'svc-card-8'},
    {num:'09',name:'Conversion Rate Optimization',tag:'Turn more listing visitors into installers with tested icons, screenshots, and messaging',label:'CRO',svg:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',target:'svc-card-9'},
    {num:'10',name:'In-App Engagement & Retention',tag:'Connect ASO insights with onboarding, notifications, and retention to reduce churn',label:'Retention',svg:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',target:'svc-card-10'},
    {num:'11',name:'Paid ASO & Acquisition',tag:'Apple Search Ads, Google App campaigns, and paid channels aligned with organic ASO',label:'Paid ASO',svg:'<rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>',target:'svc-card-11'},
    {num:'12',name:'Performance Monitoring',tag:'Track keyword rankings, impressions, conversions, reviews, and market performance over time',label:'Analytics',svg:'<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><polyline points="3 20 21 20"/>',target:'svc-card-12'}
  ];`;

html = html.replace(/const SERVICES=\[\s*\{num:'01'.*?\];/s, jsServices);

// 11. JavaScript Workflow Steps Array
const jsSteps = `  const steps=[
    {num:'01',label:'ASO Audit & Goal Analysis',title:'ASO Audit & Goal Analysis',desc:'We begin by understanding your application, users, business model, target markets, competitors, current listing performance, product roadmap, and acquisition objectives. This establishes the campaign baseline and identifies the most important optimization opportunities.',subs:[{title:'Business & Product Analysis',desc:'We review your app, business model, audiences, markets, and growth goals.',icon:'<path d="M3 3h18v18H3zM3 9h18M9 21V9"/>'},{title:'Current Listing Audit',desc:'We assess metadata, visuals, ratings, keywords, conversion, and store compliance.',icon:'<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>'},{title:'Competitor Benchmarking',desc:'We compare competing apps, rankings, creative approaches, reviews, and positioning.',icon:'<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>'},{title:'KPI Definition',desc:'We define visibility, conversion, download, engagement, and retention performance indicators.',icon:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>'}],deliverables:['Complete ASO audit report','Competitor benchmarking summary','Campaign goals and performance indicators','Prioritized optimization roadmap'],illus:'<svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="180" height="120" rx="12" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.3)" stroke-width="1.5"/><circle cx="110" cy="80" r="40" fill="rgba(192,132,252,0.12)" stroke="#c084fc" stroke-width="1.5"/><line x1="110" y1="50" x2="110" y2="80" stroke="#c084fc" stroke-width="2" stroke-linecap="round"/><line x1="110" y1="80" x2="135" y2="95" stroke="#7ba4d4" stroke-width="2" stroke-linecap="round"/><circle cx="110" cy="80" r="4" fill="#c084fc"/><text x="110" y="140" text-anchor="middle" fill="rgba(192,132,252,0.7)" font-size="10" font-family="Orbitron,sans-serif">ASO AUDIT</text></svg>' },
    {num:'02',label:'Keyword & Market Strategy',title:'Keyword & Market Strategy',desc:'We research how users search for applications across selected platforms, countries, and languages. Relevant keywords are prioritized according to search intent, competition, market fit, conversion potential, and product relevance.',subs:[{title:'Keyword Research',desc:'We identify branded, feature, category, problem-based, and localized search terms.',icon:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>'},{title:'Search Intent Mapping',desc:'We connect priority keywords with user expectations and application benefits.',icon:'<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>'},{title:'Market & Language Research',desc:'We evaluate regional competitors, terminology, demand, and cultural preferences carefully.',icon:'<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'},{title:'Keyword Prioritization',desc:'We rank keywords according to relevance, opportunity, competition, and conversion potential.',icon:'<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>'}],deliverables:['Prioritized ASO keyword list','Search-intent and relevance mapping','Market and localization opportunity analysis','Platform-specific keyword placement plan'],illus:'<svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="180" height="120" rx="12" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.3)" stroke-width="1.5"/><circle cx="90" cy="75" r="35" fill="none" stroke="rgba(192,132,252,0.4)" stroke-width="1.5"/><line x1="115" y1="100" x2="145" y2="130" stroke="#c084fc" stroke-width="2.5" stroke-linecap="round"/><circle cx="90" cy="75" r="5" fill="#7ba4d4"/><text x="110" y="140" text-anchor="middle" fill="rgba(192,132,252,0.7)" font-size="10" font-family="Orbitron,sans-serif">KEYWORDS</text></svg>' },
    {num:'03',label:'Metadata & Creative Optimization',title:'Metadata & Creative Optimization',desc:'We transform research into clear, persuasive app-store listings. Metadata and creative assets are aligned to communicate the application’s value, target relevant searches, and encourage qualified visitors to install.',subs:[{title:'Metadata Optimization',desc:'We optimize titles, subtitles, descriptions, keyword fields, and promotional content.',icon:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>'},{title:'Visual Asset Planning',desc:'We improve icons, screenshots, captions, videos, and feature graphics strategically.',icon:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>'},{title:'Category & Tag Selection',desc:'We select classifications that accurately represent the app and audience.',icon:'<path d="M4 6h16M4 12h8m-8 6h16"/>'},{title:'Localization Planning',desc:'We adapt listing content for selected languages, cultures, and markets.',icon:'<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'}],deliverables:['Optimized app-store metadata','Creative asset recommendations','Category and tag selection plan','Localized listing content requirements'],illus:'<svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="180" height="120" rx="12" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.3)" stroke-width="1.5"/><rect x="50" y="45" width="80" height="55" rx="6" fill="rgba(192,132,252,0.12)" stroke="#c084fc" stroke-width="1.5"/><rect x="60" y="55" width="60" height="8" rx="2" fill="rgba(123,164,212,0.5)"/><rect x="60" y="70" width="45" height="6" rx="2" fill="rgba(192,132,252,0.4)"/><rect x="60" y="83" width="55" height="6" rx="2" fill="rgba(123,164,212,0.3)"/><rect x="145" y="45" width="40" height="40" rx="8" fill="rgba(59,92,200,0.2)" stroke="rgba(59,92,200,0.4)" stroke-width="1"/><text x="110" y="140" text-anchor="middle" fill="rgba(192,132,252,0.7)" font-size="10" font-family="Orbitron,sans-serif">METADATA</text></svg>' },
    {num:'04',label:'Testing & Store Implementation',title:'Testing & Store Implementation',desc:'Approved listing updates are prepared, reviewed, tested, and implemented across the selected app stores. We verify accuracy, platform compliance, brand consistency, tracking, and presentation before publication.',subs:[{title:'Metadata Quality Review',desc:'We verify wording, keywords, character limits, accuracy, and brand consistency.',icon:'<polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>'},{title:'Creative Testing',desc:'We compare alternative icons, screenshots, messages, and visual sequences objectively.',icon:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>'},{title:'Store Implementation',desc:'We coordinate approved listing updates across Apple App Store and Google Play.',icon:'<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>'},{title:'Compliance Validation',desc:'We review disclosures, claims, assets, privacy information, and platform requirements.',icon:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'}],deliverables:['Quality-approved listing content','Creative testing and implementation plan','Updated app-store listings','Store compliance and launch checklist'],illus:'<svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="180" height="120" rx="12" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.3)" stroke-width="1.5"/><polyline points="60,100 85,75 110,90 145,50" stroke="#c084fc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/><circle cx="60" cy="100" r="4" fill="#7ba4d4"/><circle cx="85" cy="75" r="4" fill="#7ba4d4"/><circle cx="110" cy="90" r="4" fill="#7ba4d4"/><circle cx="145" cy="50" r="4" fill="#c084fc"/><text x="110" y="140" text-anchor="middle" fill="rgba(192,132,252,0.7)" font-size="10" font-family="Orbitron,sans-serif">TESTING</text></svg>' },
    {num:'05',label:'Performance Monitoring & Analysis',title:'Performance Monitoring & Analysis',desc:'After implementation, we track keyword visibility, store impressions, listing visitors, conversion, downloads, reviews, ratings, retention, and acquisition performance to understand how the changes affect growth.',subs:[{title:'Ranking Monitoring',desc:'We track keyword positions, visibility changes, competitors, and market performance.',icon:'<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>'},{title:'Conversion Analysis',desc:'We measure listing visits, downloads, conversion rates, and creative effectiveness.',icon:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>'},{title:'Review & Sentiment Analysis',desc:'We evaluate ratings, feedback themes, recurring issues, and user expectations.',icon:'<path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z"/>'},{title:'Campaign Reporting',desc:'We explain completed work, results, limitations, risks, and recommended actions.',icon:'<path d="M3 3h18v18H3zM3 9h18M9 21V9"/>'}],deliverables:['Keyword and visibility report','Conversion and download analysis','Review and sentiment summary','ASO performance dashboard'],illus:'<svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="180" height="120" rx="12" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.3)" stroke-width="1.5"/><rect x="40" y="60" width="20" height="60" rx="3" fill="rgba(59,92,200,0.4)"/><rect x="75" y="40" width="20" height="80" rx="3" fill="rgba(192,132,252,0.5)"/><rect x="110" y="55" width="20" height="65" rx="3" fill="rgba(123,164,212,0.5)"/><rect x="145" y="30" width="20" height="90" rx="3" fill="rgba(192,132,252,0.7)"/><text x="110" y="148" text-anchor="middle" fill="rgba(192,132,252,0.7)" font-size="10" font-family="Orbitron,sans-serif">ANALYTICS</text></svg>' },
    {num:'06',label:'Continuous Optimization & Scaling',title:'Continuous Optimization & Scaling',desc:'ASO insights are used to update keywords, listings, creative assets, localization, acquisition campaigns, and engagement strategies. Successful approaches are expanded while underperforming assumptions are reviewed and improved.',subs:[{title:'Keyword Refinement',desc:'We update keyword priorities using rankings, trends, competition, and conversion data.',icon:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>'},{title:'Creative Iteration',desc:'We test new icons, screenshots, videos, captions, and value propositions.',icon:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>'},{title:'Market Expansion',desc:'We localize successful listing strategies for suitable languages and regions.',icon:'<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'},{title:'Growth Alignment',desc:'We connect ASO insights with acquisition, engagement, retention, and product planning.',icon:'<polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/>'}],deliverables:['Updated ASO optimization plan','New keyword and creative testing priorities','Localization and market-expansion roadmap','Continuous improvement and scaling report'],illus:'<svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="180" height="120" rx="12" fill="rgba(59,92,200,0.08)" stroke="rgba(59,92,200,0.3)" stroke-width="1.5"/><path d="M50 110 Q80 50 110 80 Q140 110 170 40" stroke="#c084fc" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="50" cy="110" r="4" fill="#7ba4d4"/><circle cx="110" cy="80" r="4" fill="#7ba4d4"/><circle cx="170" cy="40" r="5" fill="#c084fc"/><text x="110" y="148" text-anchor="middle" fill="rgba(192,132,252,0.7)" font-size="10" font-family="Orbitron,sans-serif">SCALING</text></svg>' }
  ];`;

html = html.replace(/const steps=\[\s*\{num:'01'.*?\];/s, jsSteps);

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully updated indexapp1.html with ASO docx content!');
