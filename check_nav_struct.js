const fs = require('fs');

const html = fs.readFileSync('indexsem1.html', 'utf8');
const megaStart = html.indexOf('mega-dropdown');
const megaEnd = html.indexOf('</div>\n        </div>\n      </li>', megaStart);
console.log('=== MEGA DROPDOWN ===');
console.log(html.slice(megaStart - 20, megaStart + 2200));

const mobStart = html.indexOf('mobile-menu');
const mobEnd = html.indexOf('</nav>', mobStart);
console.log('=== MOBILE MENU ===');
console.log(html.slice(mobStart - 20, mobEnd + 10));
