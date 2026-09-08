const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const map = {};

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const links = content.match(/<a [^>]*class="mega-link"[^>]*>[\s\S]*?<\/a>/g) || [];
  links.forEach(l => {
    const hrefMatch = l.match(/href="([^"]+)"/);
    const text = l.replace(/<[^>]+>/g, '').trim();
    if (hrefMatch && text) {
      if (!map[text]) map[text] = new Set();
      map[text].add(`${file} => ${hrefMatch[1]}`);
    }
  });
});

console.log(JSON.stringify(map, (k, v) => v instanceof Set ? Array.from(v) : v, 2));
