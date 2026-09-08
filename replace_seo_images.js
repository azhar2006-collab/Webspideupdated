const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, 'indexseo1.html');
const updateScriptPath = path.join(__dirname, 'update_seo_page.js');

let html = fs.readFileSync(targetPath, 'utf8');

// 1. Service Cards Images Mapping
const serviceImages = [
  {
    num: '01',
    alt: 'Keyword Research & SEO Strategy',
    src: 'Images/Webspide-Images_/Digital Marketting/search-engine-optimization-services/Service/search-engine-optimization-services-keyword-research-seo-strategy.webp'
  },
  {
    num: '02',
    alt: 'On-Page SEO',
    src: 'Images/Webspide-Images_/Digital Marketting/search-engine-optimization-services/Service/search-engine-optimization-services-on-page-seo.webp'
  },
  {
    num: '03',
    alt: 'Technical SEO',
    src: 'Images/Webspide-Images_/Digital Marketting/search-engine-optimization-services/Service/search-engine-optimization-services-technical-seo.webp'
  },
  {
    num: '04',
    alt: 'SEO Content Writing & Optimization',
    src: 'Images/Webspide-Images_/Digital Marketting/search-engine-optimization-services/Service/search-engine-optimization-services-seo-content-writing-optimization.webp'
  },
  {
    num: '05',
    alt: 'Link Building & Off-Page SEO',
    src: 'Images/Webspide-Images_/Digital Marketting/search-engine-optimization-services/Service/search-engine-optimization-services-link-building-off-page-seo.webp'
  },
  {
    num: '06',
    alt: 'Local SEO',
    src: 'Images/Webspide-Images_/Digital Marketting/search-engine-optimization-services/Service/search-engine-optimization-services-local-seo.webp'
  },
  {
    num: '07',
    alt: 'Ecommerce SEO',
    src: 'Images/Webspide-Images_/Digital Marketting/search-engine-optimization-services/Service/search-engine-optimization-services-ecommerce-seo.webp'
  },
  {
    num: '08',
    alt: 'SEO Analytics & Reporting',
    src: 'Images/Webspide-Images_/Digital Marketting/search-engine-optimization-services/Service/search-engine-optimization-services-seo-analytics-reporting.webp'
  }
];

serviceImages.forEach((imgInfo, idx) => {
  const cardId = `svc-card-${idx + 1}`;
  const imgTag = `<img src="${imgInfo.src}" alt="${imgInfo.alt}" style="width:100%;height:auto;display:block;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);">`;

  // Replace SVG inside card-visual of specific card
  const cardRegex = new RegExp(`(<div class="service-card[^"]*" id="${cardId}">[\\s\\S]*?<div class="card-visual">[\\s\\S]*?<div class="illus-wrap[^"]*"[^>]*>)\\s*<svg[\\s\\S]*?<\\/svg>(\\s*<\\/div>\\s*<\\/div>)`, 'g');
  
  if (cardRegex.test(html)) {
    html = html.replace(cardRegex, `$1\n        ${imgTag}\n      $2`);
    console.log(`Replaced SVG with image for card ${cardId}`);
  } else {
    console.warn(`Could not match card visual SVG for ${cardId}`);
  }
});

// 2. Workflow Steps Images Mapping
const workflowImages = [
  {
    num: '01',
    alt: 'SEO Audit & Strategy Analysis',
    src: 'Images/Webspide-Images_/Digital Marketting/search-engine-optimization-services/Workflow/search-engine-optimization-services-seo-audit-strategy-analysis.webp'
  },
  {
    num: '02',
    alt: 'Keyword & Competitive Planning',
    src: 'Images/Webspide-Images_/Digital Marketting/search-engine-optimization-services/Workflow/search-engine-optimization-services-keyword-competitive-planning.webp'
  },
  {
    num: '03',
    alt: 'On-Page, Technical & Content Optimization',
    src: 'Images/Webspide-Images_/Digital Marketting/search-engine-optimization-services/Workflow/search-engine-optimization-services-on-page-technical-content-optimization.webp'
  },
  {
    num: '04',
    alt: 'Authority Building & Off-Page SEO',
    src: 'Images/Webspide-Images_/Digital Marketting/search-engine-optimization-services/Workflow/search-engine-optimization-services-authority-building-off-page-seo.webp'
  },
  {
    num: '05',
    alt: 'Analytics & Performance Review',
    src: 'Images/Webspide-Images_/Digital Marketting/search-engine-optimization-services/Workflow/search-engine-optimization-services-analytics-performance-review.webp'
  },
  {
    num: '06',
    alt: 'Continuous Optimization & Growth',
    src: 'Images/Webspide-Images_/Digital Marketting/search-engine-optimization-services/Workflow/search-engine-optimization-services-continuous-optimization-growth.webp'
  }
];

workflowImages.forEach((wf) => {
  const imgTag = `<img src="${wf.src}" alt="${wf.alt}" style="max-width:320px;width:100%;height:auto;display:block;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);">`;
  
  // Replace step illus SVG in the JS steps array
  const stepRegex = new RegExp(`(\\{num:'${wf.num}'[\\s\\S]*?illus:)'<svg[\\s\\S]*?<\\/svg>'`, 'g');
  if (stepRegex.test(html)) {
    html = html.replace(stepRegex, `$1'${imgTag}'`);
    console.log(`Replaced workflow step ${wf.num} illus SVG with image`);
  } else {
    console.warn(`Could not match workflow step ${wf.num} illus SVG`);
  }
});

// Write updated html to indexseo1.html
fs.writeFileSync(targetPath, html, 'utf8');
console.log('Successfully updated indexseo1.html with search engine optimization images!');

// Also update update_seo_page.js so future runs don't revert images
if (fs.existsSync(updateScriptPath)) {
  let scriptContent = fs.readFileSync(updateScriptPath, 'utf8');
  
  // Update getSvgVisual helper to return img tag if called, or update service cards generator
  scriptContent = scriptContent.replace(
    /function getSvgVisual\(num\) \{[\s\S]*?^\}/m,
    `function getSvgVisual(num) {
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
  return \`<img src="Images/Webspide-Images_/Digital Marketting/search-engine-optimization-services/Service/\${imgs[num]}" alt="\${alts[num]}" style="width:100%;height:auto;display:block;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);">\`;
}`
  );

  // Update jsSteps array illus values in update_seo_page.js
  workflowImages.forEach(wf => {
    const imgTag = `<img src="${wf.src}" alt="${wf.alt}" style="max-width:320px;width:100%;height:auto;display:block;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);">`;
    const stepRegex = new RegExp(`(\\{num:'${wf.num}'[\\s\\S]*?illus:)'<svg[\\s\\S]*?<\\/svg>'`, 'g');
    scriptContent = scriptContent.replace(stepRegex, `$1'${imgTag}'`);
  });

  fs.writeFileSync(updateScriptPath, scriptContent, 'utf8');
  console.log('Successfully updated update_seo_page.js!');
}
