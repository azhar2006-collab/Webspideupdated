const fs = require('fs');

let html = fs.readFileSync('indexreact1.html', 'utf8');

// Fix Why Choose Us Title and layout
html = html.replace(
  /<div class="left-title gradient-heading">Why Choose[\s\S]*?<\/div>/i,
  `<div class="left-title gradient-heading">Why Choose Webspide for<br><span>React Native App Development Services?</span></div>`
);

// Fix image srcs for service cards if empty
html = html.replace(
  /<div class="service-card reveal" id="svc-card-1">[\s\S]*?<img src=".*?"/i,
  (m) => m.replace(/img src=".*?"/, 'img src="1.webp"')
);

// Card 2 image
const svc2Img = 'custom-web-development-front-end-services.webp';
html = html.replace(
  /<div class="service-card reverse reveal" id="svc-card-2">[\s\S]*?<img src=".*?"/i,
  (m) => m.replace(/img src=".*?"/, `img src="${svc2Img}"`)
);

// Card 3 image
const svc3Img = 'custom-web-development-back-end-services.webp';
html = html.replace(
  /<div class="service-card reveal" id="svc-card-3">[\s\S]*?<img src=".*?"/i,
  (m) => m.replace(/img src=".*?"/, `img src="${svc3Img}"`)
);

// Card 4 image
const svc4Img = 'custom-cms-development-services.webp-artguru.webp';
html = html.replace(
  /<div class="service-card reverse reveal" id="svc-card-4">[\s\S]*?<img src=".*?"/i,
  (m) => m.replace(/img src=".*?"/, `img src="${svc4Img}"`)
);

// Card 5 image
const svc5Img = 'custom-web-development-ecommerce-platform.webp';
html = html.replace(
  /<div class="service-card reveal" id="svc-card-5">[\s\S]*?<img src=".*?"/i,
  (m) => m.replace(/img src=".*?"/, `img src="${svc5Img}"`)
);

fs.writeFileSync('indexreact1.html', html, 'utf8');
console.log('Successfully refined indexreact1.html!');
