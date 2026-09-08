const fs = require('fs');
const html = fs.readFileSync('indexweb1.html', 'utf8');

const tsSection = html.match(/<!-- TECH STACK -->[\s\S]*?<\/section>/);
if (!tsSection) {
  console.log('Tech stack section not found!');
  process.exit(1);
}

const items = tsSection[0].match(/<div class="ts-tech-item">[\s\S]*?<\/div>/g) || [];
console.log(`Total tech stack items: ${items.length}`);

items.forEach((item, idx) => {
  const label = item.match(/<span>(.*?)<\/span>/);
  const src = item.match(/src="(.*?)"/);
  const style = item.match(/style="(.*?)"/);
  const onerror = item.match(/onerror="(.*?)"/);
  console.log(`${idx + 1}. [${label ? label[1] : 'N/A'}]`);
  console.log(`   src: ${src ? src[1] : 'NONE'}`);
  if (style) console.log(`   style: ${style[1]}`);
  if (onerror) console.log(`   onerror: ${onerror[1]}`);
});
