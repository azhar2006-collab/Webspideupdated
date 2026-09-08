const fs = require('fs');
const html = fs.readFileSync('indexecom1.html', 'utf8');
const lines = html.split('\n');
lines.forEach((l, i) => {
  if (i > 2278 && i < 2540) {
    if (l.includes('card-title') || l.includes('id="svc-card') || l.includes('svc-btn-primary')) {
      console.log((i+1) + ': ' + l.trim().substring(0,140));
    }
  }
});
