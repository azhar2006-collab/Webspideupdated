const fs = require('fs');
const https = require('https');

const html = fs.readFileSync('indexweb1.html', 'utf8');

const tsSection = html.match(/<!-- TECH STACK -->[\s\S]*?<\/section>/);
if (!tsSection) {
  console.log('Tech stack section not found!');
  process.exit(1);
}

const items = tsSection[0].match(/<div class="ts-tech-item">[\s\S]*?<\/div>/g) || [];

function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', (err) => {
      resolve({ url, status: err.message });
    });
  });
}

async function testAll() {
  for (let idx = 0; idx < items.length; idx++) {
    const item = items[idx];
    const label = item.match(/<span>(.*?)<\/span>/);
    const src = item.match(/src="(.*?)"/);
    if (src) {
      const res = await checkUrl(src[1]);
      console.log(`${idx + 1}. [${label ? label[1] : 'N/A'}] -> HTTP ${res.status}`);
    }
  }
}

testAll();
