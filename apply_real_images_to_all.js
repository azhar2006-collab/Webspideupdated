const fs = require('fs');

const fileImageMap = {
  'index1.html': 'Why Work with webspide/Web Development Services/back-end-development-services-transparent.png',
  'indexandroid1.html': 'Why Work with webspide/Android App Development/android-app-development-services-transparent.png',
  'indexapp1.html': 'Why Work with webspide/Digital Marketing Services/app-store-optimization-aso-services-transparent.png',
  'indexemail1.html': 'Why Work with webspide/Digital Marketing Services/email-marketing-services-transparent.png',
  'indexflutter1.html': 'Why Work with webspide/Android App Development/flutter-app-development-services-transparent.png',
  'indexfront1.html': 'Why Work with webspide/Web Development Services/front-end-development-services-transparent.png',
  'indexinfluence1.html': 'Why Work with webspide/Digital Marketing Services/influencer-marketing-services-transparent.png',
  'indexios1.html': 'Why Work with webspide/Android App Development/ios-app-development-services-transparent.png',
  'indexmanage1.html': 'Why Work with webspide/Digital Marketing Services/social-media-management-services-transparent.png',
  'indexreact1.html': 'Why Work with webspide/Android App Development/react-native-app-development-services-transparent.png',
  'indexsem1.html': 'Why Work with webspide/Digital Marketing Services/search-engine-marketing-services-transparent.png',
  'indexseo1.html': 'Why Work with webspide/Digital Marketing Services/search-engine-optimization-services-transparent.png',
  'indexseocontent1.html': 'Why Work with webspide/Digital Marketing Services/seo-content-writing-services-transparent.png',
  'indexsmmarket1.html': 'Why Work with webspide/Digital Marketing Services/social-media-marketing-services-transparent.png',
  'indexuiux1.html': 'Why Work with webspide/Web Development Services/ui-ux-design-services-transparent.png',
  'indexweb1.html': 'Why Work with webspide/Web Development Services/web-application-development-services-transparent.png',
  'indexword1.html': 'Why Work with webspide/Web Development Services/wordpress-development-services-transparent.png'
};

const newLeftCSS = '.left{flex:1;padding:0 74px 0 70px;display:flex;flex-direction:column;justify-content:flex-start;position:sticky;top:var(--nav-h);align-self:flex-start;z-index:1;overflow:visible}';
const newIlluCSS = '.illustration{margin-top:16px;position:relative;width:100%;max-width:320px;height:auto;flex-shrink:0;overflow:visible}';

for (const [fileName, imgSrc] of Object.entries(fileImageMap)) {
  if (!fs.existsSync(fileName)) {
    console.log('Skip (not found):', fileName);
    continue;
  }
  let content = fs.readFileSync(fileName, 'utf8');

  // Fix .left CSS
  content = content.replace(
    /\.left\{flex:1;padding:0 74px 0 70px;display:flex;flex-direction:column;justify-content:flex-start;position:sticky;top:var\(--nav-h\);align-self:flex-start;z-index:1;max-height:calc\(100vh - 90px\);overflow:hidden\}/g,
    newLeftCSS
  );

  // Fix .illustration CSS
  content = content.replace(/\.illustration\{margin-top:auto;position:relative;height:150px;flex-shrink:0\}/g, newIlluCSS);

  // Replace illustration HTML block
  const imgHtml = `<div class="illustration">
      <img 
        src="${imgSrc}" 
        alt="Why Work with Webspide" 
        class="laptop-image" 
        style="width:100%;height:auto;max-height:220px;object-fit:contain;display:block;" 
      >
    </div>`;

  const origLaptopRegex = /<div class="illustration">[\s\S]*?<div class="laptop">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
  if (origLaptopRegex.test(content)) {
    content = content.replace(origLaptopRegex, imgHtml);
    fs.writeFileSync(fileName, content, 'utf8');
    console.log('Successfully updated:', fileName);
  } else {
    console.log('Regex match failed for:', fileName);
  }
}

console.log('All remaining 17 HTML files updated successfully!');
