const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const megaStart = content.indexOf('<div class="mega-dropdown"');
  if (megaStart !== -1) {
    const megaEnd = content.indexOf('</div>\n        </div>\n      </li>', megaStart);
    console.log(`\n=================== ${file} MEGA DROPDOWN HTML ===================`);
    console.log(content.slice(megaStart, megaStart + 1500));
  }
});
