const fs = require('fs');

let html = fs.readFileSync('indexreact1.html', 'utf8');

const targetStr = `  function goToService(idx){
    const svc=SERVICES[idx];
    const targetEl=document.getElementById(svc.target);
    if(targetEl){
      targetEl.scrollIntoView({behavior:'smooth',block:'start'});
    }
  }`;

const replacementStr = `  function goToService(idx){
    const svc=SERVICES[idx];
    const targetEl=document.getElementById(svc.target);
    if(targetEl){
      const navHStr=getComputedStyle(document.documentElement).getPropertyValue('--nav-h');
      const navH=parseInt(navHStr,10)||70;
      const targetPos=targetEl.getBoundingClientRect().top+window.pageYOffset-navH-24;
      window.scrollTo({top:Math.max(0,targetPos),behavior:'smooth'});
    }
  }`;

if (html.includes(targetStr)) {
  html = html.replace(targetStr, replacementStr);
  console.log('Replaced goToService successfully!');
} else {
  console.error('targetStr not found!');
}

// Add event listener for all href="#svc-card-X" and href="#services" links
const anchorScript = `
  // Smooth scroll offset handler for all orbital/service links
  document.querySelectorAll('a[href^="#svc-card-"], a[href="#services"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      const targetId = href.replace('#','');
      const targetEl = document.getElementById(targetId);
      if(targetEl){
        e.preventDefault();
        const navHStr = getComputedStyle(document.documentElement).getPropertyValue('--nav-h');
        const navH = parseInt(navHStr, 10) || 70;
        const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - navH - 24;
        window.scrollTo({ top: Math.max(0, targetPos), behavior: 'smooth' });
      }
    });
  });
`;

if (!html.includes('Smooth scroll offset handler')) {
  html = html.replace('</script>', anchorScript + '\n</script>');
  console.log('Added anchor smooth scroll listener!');
}

fs.writeFileSync('indexreact1.html', html, 'utf8');
