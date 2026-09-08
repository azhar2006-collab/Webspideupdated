const fs = require('fs');

let html = fs.readFileSync('indexseomarket1.html', 'utf8');

const semKeywords = 'Search engine marketing services, Search engine marketing company, Search engine marketing agency, PPC advertising services, PPC management services, Google Ads management services, Google Search Ads services, Google Display Ads services, Google Shopping Ads services, Paid search marketing, Pay-per-click advertising, PPC campaign management, Search engine marketing strategy, Ecommerce PPC services, International PPC agency';

const oldKwRegex = /<meta name="keywords"[\s\S]*?>/;
const newKwTag = `<meta name="keywords"\n        content="${semKeywords}">`;

html = html.replace(oldKwRegex, newKwTag);

fs.writeFileSync('indexseomarket1.html', html, 'utf8');
console.log('Updated meta keywords in indexseomarket1.html!');
