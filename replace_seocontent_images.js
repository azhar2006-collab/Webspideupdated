const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, 'indexseocontent1.html');
const updateScriptPath = path.join(__dirname, 'update_seocontent_page.js');

let html = fs.readFileSync(targetPath, 'utf8');

// 1. Service Cards Images Mapping (10 cards)
const serviceImages = [
  {
    num: '01',
    alt: 'Website Content Writing',
    src: 'Images/Webspide-Images_/Digital Marketting/seo-content-writing-services/Service/seo-content-writing-services-website-content-writing.webp'
  },
  {
    num: '02',
    alt: 'Blog & Article Writing',
    src: 'Images/Webspide-Images_/Digital Marketting/seo-content-writing-services/Service/seo-content-writing-services-blog-article-writing.webp'
  },
  {
    num: '03',
    alt: 'Ecommerce Content Writing',
    src: 'Images/Webspide-Images_/Digital Marketting/seo-content-writing-services/Service/seo-content-writing-services-ecommerce-content-writing.webp'
  },
  {
    num: '04',
    alt: 'Local SEO Content Writing',
    src: 'Images/Webspide-Images_/Digital Marketting/seo-content-writing-services/Service/seo-content-writing-services-local-seo-content-writing.webp'
  },
  {
    num: '05',
    alt: 'Technical SEO Content Writing',
    src: 'Images/Webspide-Images_/Digital Marketting/seo-content-writing-services/Service/seo-content-writing-services-technical-seo-content-writing.webp'
  },
  {
    num: '06',
    alt: 'Press Release & Newsletter Writing',
    src: 'Images/Webspide-Images_/Digital Marketting/seo-content-writing-services/Service/seo-content-writing-services-press-release-newsletter-writing.webp'
  },
  {
    num: '07',
    alt: 'Social Media SEO Content',
    src: 'Images/Webspide-Images_/Digital Marketting/seo-content-writing-services/Service/seo-content-writing-services-social-media-seo-content.webp'
  },
  {
    num: '08',
    alt: 'Video & YouTube SEO Content',
    src: 'Images/Webspide-Images_/Digital Marketting/seo-content-writing-services/Service/seo-content-writing-services-video-youtube-seo-content.webp'
  },
  {
    num: '09',
    alt: 'Email Marketing Content',
    src: 'Images/Webspide-Images_/Digital Marketting/seo-content-writing-services/Service/seo-content-writing-services-email-marketing-content.webp'
  },
  {
    num: '10',
    alt: 'SEO Copywriting Services',
    src: 'Images/Webspide-Images_/Digital Marketting/seo-content-writing-services/Service/seo-content-writing-services-seo-copywriting.webp'
  }
];

serviceImages.forEach((imgInfo, idx) => {
  const cardId = `svc-card-${idx + 1}`;
  const imgTag = `<img src="${imgInfo.src}" alt="${imgInfo.alt}" style="width:100%;height:auto;display:block;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);">`;

  // Replace SVG inside card-visual of specific card
  const cardRegex = new RegExp(
    `(<div class="service-card[^"]*" id="${cardId}">[\\s\\S]*?<div class="card-visual">[\\s\\S]*?<div class="illus-wrap[^"]*"[^>]*>)\\s*<svg[\\s\\S]*?<\\/svg>(\\s*<\\/div>\\s*<\\/div>)`,
    'g'
  );

  if (cardRegex.test(html)) {
    html = html.replace(cardRegex, `$1\n        ${imgTag}\n      $2`);
    console.log(`✓ Replaced SVG with image for card ${cardId}`);
  } else {
    console.warn(`✗ Could not match card visual SVG for ${cardId}`);
  }
});

// 2. Workflow Steps Images Mapping (6 steps)
const workflowImages = [
  {
    num: '01',
    alt: 'Content Discovery & Strategy',
    src: 'Images/Webspide-Images_/Digital Marketting/seo-content-writing-services/Workflow/seo-content-writing-services-content-discovery-strategy.webp'
  },
  {
    num: '02',
    alt: 'Keyword Research & Content Planning',
    src: 'Images/Webspide-Images_/Digital Marketting/seo-content-writing-services/Workflow/seo-content-writing-services-keyword-research-content-planning.webp'
  },
  {
    num: '03',
    alt: 'Content Creation & SEO Optimization',
    src: 'Images/Webspide-Images_/Digital Marketting/seo-content-writing-services/Workflow/seo-content-writing-services-content-creation-seo-optimization.webp'
  },
  {
    num: '04',
    alt: 'Editorial Review & Quality Assurance',
    src: 'Images/Webspide-Images_/Digital Marketting/seo-content-writing-services/Workflow/seo-content-writing-services-editorial-review-quality-assurance.webp'
  },
  {
    num: '05',
    alt: 'Publishing & Distribution Support',
    src: 'Images/Webspide-Images_/Digital Marketting/seo-content-writing-services/Workflow/seo-content-writing-services-publishing-distribution-support.webp'
  },
  {
    num: '06',
    alt: 'Performance Monitoring & Continuous Improvement',
    src: 'Images/Webspide-Images_/Digital Marketting/seo-content-writing-services/Workflow/seo-content-writing-services-performance-monitoring-continuous-improvement.webp'
  }
];

workflowImages.forEach((wf) => {
  const imgTag = `<img src="${wf.src}" alt="${wf.alt}" style="max-width:320px;width:100%;height:auto;display:block;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);">`;

  // Replace step illus SVG in the JS steps array
  const stepRegex = new RegExp(
    `(\\{num:'${wf.num}'[\\s\\S]*?illus:)'<svg[\\s\\S]*?<\\/svg>'`,
    'g'
  );
  if (stepRegex.test(html)) {
    html = html.replace(stepRegex, `$1'${imgTag}'`);
    console.log(`✓ Replaced workflow step ${wf.num} illus SVG with image`);
  } else {
    console.warn(`✗ Could not match workflow step ${wf.num} illus SVG`);
  }
});

// Write updated html
fs.writeFileSync(targetPath, html, 'utf8');
console.log('\n✅ Successfully updated indexseocontent1.html with SEO content writing images!');

// 3. Also update update_seocontent_page.js so future runs don't revert images
if (fs.existsSync(updateScriptPath)) {
  let scriptContent = fs.readFileSync(updateScriptPath, 'utf8');

  // Update getSvgVisual helper to return img tag
  scriptContent = scriptContent.replace(
    /function getSvgVisual\(num\) \{[\s\S]*?^\}/m,
    `function getSvgVisual(num) {
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
  return \`<img src="Images/Webspide-Images_/Digital Marketting/seo-content-writing-services/Service/\${imgs[num]}" alt="\${alts[num]}" style="width:100%;height:auto;display:block;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);">\`;
}`
  );

  // Update illus SVG values in jsSteps
  workflowImages.forEach(wf => {
    const imgTag = `<img src="${wf.src}" alt="${wf.alt}" style="max-width:320px;width:100%;height:auto;display:block;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);">`;
    const stepRegex = new RegExp(
      `(\\{num:'${wf.num}'[\\s\\S]*?illus:)'<svg[\\s\\S]*?<\\/svg>'`,
      'g'
    );
    scriptContent = scriptContent.replace(stepRegex, `$1'${imgTag}'`);
  });

  fs.writeFileSync(updateScriptPath, scriptContent, 'utf8');
  console.log('✅ Successfully updated update_seocontent_page.js!');
}
