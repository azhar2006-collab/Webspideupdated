const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index1.html');
let html = fs.readFileSync(filePath, 'utf-8');

const targetStr = `  function goToService(idx){
    const svc = SERVICES[idx];
    if(!svc) return;
    const targetEl = document.getElementById(svc.target);
    if(targetEl){
      const navEl = document.querySelector('header') || document.querySelector('.navbar');
      const navH = navEl ? navEl.offsetHeight : 70;
      const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - navH - 24;
      window.scrollTo({
        top: Math.max(0, targetPos),
        behavior: 'smooth'
      });
    }
  }`;

const exactReplacement = `  function goToService(idx){
    const svc = SERVICES[idx];
    if(!svc) return;
    const targetEl = document.getElementById(svc.target);
    if(targetEl){
      const navEl = document.querySelector('.site-header') || document.querySelector('header');
      const navH = navEl ? navEl.offsetHeight : 70;
      const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - navH - 16;
      window.scrollTo({
        top: Math.max(0, targetPos),
        behavior: 'smooth'
      });
    }
  }`;

if (html.includes(targetStr)) {
  html = html.replace(targetStr, exactReplacement);
  fs.writeFileSync(filePath, html, 'utf-8');
  console.log('✅ Updated goToService precisely!');
} else {
  console.error('❌ Could not find targetStr');
}
