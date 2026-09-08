const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, 'indexmanage1.html');
const updateScriptPath = path.join(__dirname, 'update_manage_page.js');

let html = fs.readFileSync(targetPath, 'utf8');

// 1. Service Cards Images Mapping (6 cards)
const serviceImages = [
  {
    num: '01',
    alt: 'Facebook Management',
    src: 'Images/Webspide-Images_/Digital Marketting/social-media-management-services/Service/social-media-management-services-facebook-management.webp'
  },
  {
    num: '02',
    alt: 'Instagram Marketing & Growth',
    src: 'Images/Webspide-Images_/Digital Marketting/social-media-management-services/Service/social-media-management-services-instagram-marketing-growth.webp'
  },
  {
    num: '03',
    alt: 'LinkedIn Marketing & Lead Generation',
    src: 'Images/Webspide-Images_/Digital Marketting/social-media-management-services/Service/social-media-management-services-linkedin-marketing-lead-generation.webp'
  },
  {
    num: '04',
    alt: 'YouTube Channel Management & Video Marketing',
    src: 'Images/Webspide-Images_/Digital Marketting/social-media-management-services/Service/social-media-management-services-youtube-channel-management-video-marketing.webp'
  },
  {
    num: '05',
    alt: 'X Management & Trend Engagement',
    src: 'Images/Webspide-Images_/Digital Marketting/social-media-management-services/Service/social-media-management-services-x-management-trend-engagement.webp'
  },
  {
    num: '06',
    alt: 'Pinterest Marketing & Visual Branding',
    src: 'Images/Webspide-Images_/Digital Marketting/social-media-management-services/Service/social-media-management-services-pinterest-marketing-visual-branding.webp'
  }
];

serviceImages.forEach((imgInfo, idx) => {
  const cardId = `svc-card-${idx + 1}`;
  const imgTag = `<img src="${imgInfo.src}" alt="${imgInfo.alt}" style="width:100%;height:auto;display:block;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);">`;

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
    alt: 'Strategy & Audience Analysis',
    src: 'Images/Webspide-Images_/Digital Marketting/social-media-management-services/Workflow/social-media-management-services-strategy-audience-analysis.webp'
  },
  {
    num: '02',
    alt: 'Platform Planning & Technical Setup',
    src: 'Images/Webspide-Images_/Digital Marketting/social-media-management-services/Workflow/social-media-management-services-platform-planning-technical-setup.webp'
  },
  {
    num: '03',
    alt: 'Content Creation & Scheduling',
    src: 'Images/Webspide-Images_/Digital Marketting/social-media-management-services/Workflow/social-media-management-services-content-creation-scheduling.webp'
  },
  {
    num: '04',
    alt: 'Campaign Launch & Performance Monitoring',
    src: 'Images/Webspide-Images_/Digital Marketting/social-media-management-services/Workflow/social-media-management-services-campaign-launch-performance-monitoring.webp'
  },
  {
    num: '05',
    alt: 'Community Management & Campaign Optimization',
    src: 'Images/Webspide-Images_/Digital Marketting/social-media-management-services/Workflow/social-media-management-services-community-management-campaign-optimization.webp'
  },
  {
    num: '06',
    alt: 'Reporting & Continuous Improvement',
    src: 'Images/Webspide-Images_/Digital Marketting/social-media-management-services/Workflow/social-media-management-services-reporting-continuous-improvement.webp'
  }
];

workflowImages.forEach((wf) => {
  const imgTag = `<img src="${wf.src}" alt="${wf.alt}" style="max-width:320px;width:100%;height:auto;display:block;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);">`;

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
console.log('\n✅ Successfully updated indexmanage1.html with social media management images!');

// 3. Update update_manage_page.js so future runs keep images
if (fs.existsSync(updateScriptPath)) {
  let scriptContent = fs.readFileSync(updateScriptPath, 'utf8');

  scriptContent = scriptContent.replace(
    /function getSvgVisual\(num\) \{[\s\S]*?^\}/m,
    `function getSvgVisual(num) {
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
  return \`<img src="Images/Webspide-Images_/Digital Marketting/social-media-management-services/Service/\${imgs[num]}" alt="\${alts[num]}" style="width:100%;height:auto;display:block;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);">\`;
}`
  );

  workflowImages.forEach(wf => {
    const imgTag = `<img src="${wf.src}" alt="${wf.alt}" style="max-width:320px;width:100%;height:auto;display:block;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);">`;
    const stepRegex = new RegExp(
      `(\\{num:'${wf.num}'[\\s\\S]*?illus:)'<svg[\\s\\S]*?<\\/svg>'`,
      'g'
    );
    scriptContent = scriptContent.replace(stepRegex, `$1'${imgTag}'`);
  });

  fs.writeFileSync(updateScriptPath, scriptContent, 'utf8');
  console.log('✅ Successfully updated update_manage_page.js!');
}
