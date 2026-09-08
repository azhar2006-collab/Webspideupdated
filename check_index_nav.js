const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');

const megaStart = content.indexOf('<div class="mega-dropdown"');
const megaEnd = content.indexOf('</div>\n        </div>\n      </li>', megaStart);
console.log('=== INDEX.HTML MEGA DROPDOWN ===');
console.log(content.slice(megaStart, megaEnd + 30));

const mobStart = content.indexOf('<nav class="mobile-menu"');
const mobEnd = content.indexOf('</nav>', mobStart);
console.log('=== INDEX.HTML MOBILE MENU ===');
console.log(content.slice(mobStart, mobEnd + 10));
