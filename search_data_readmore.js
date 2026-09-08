const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

const rmPos = indexHtml.indexOf('data-readmore');
console.log('data-readmore pos:', rmPos);
if (rmPos !== -1) {
  console.log(indexHtml.substring(rmPos - 100, rmPos + 800));
}

const jsRmPos = indexHtml.indexOf('data-readmore', rmPos + 10);
if (jsRmPos !== -1) {
  console.log('Second data-readmore occurrence (JS):');
  console.log(indexHtml.substring(jsRmPos - 200, jsRmPos + 600));
}
