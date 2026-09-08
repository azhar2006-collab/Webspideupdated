const fs = require('fs');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>About Webspide | Digital Technology & Growth Company</title>
<meta name="description" content="Discover Webspide, a digital technology company delivering web development, mobile app development, digital marketing, and scalable business solutions." />
<meta name="keywords" content="About Webspide, Webspide company, digital technology company, web development company, mobile app development company, digital marketing company, custom software development, IT solutions company, digital transformation company, business technology solutions" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Exo+2:wght@300;400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800&family=Rajdhani:wght@500;600;700&family=Nunito+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />

<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --ws-navy:#07164F;
  --ws-dark-blue:#102A7A;
  --ws-royal-blue:#1F4FB2;
  --ws-sky-blue:#75A8F7;
  --ws-indigo:#38216E;
  --ws-violet:#8B5CF6;
  --ws-purple:#A855F7;
  --ws-magenta:#C026B8;
  --ws-dark-magenta:#7A0D78;
  --ws-light-bg:#F8FAFF;
  --ws-lavender-bg:#F4EEFF;
  --ws-text-dark:#0D1730;
  --ws-text-muted:#475467;
  --ws-btn-gradient:linear-gradient(90deg,#1F4FB2 0%,#8B5CF6 50%,#C026B8 100%);
  --ws-heading-gradient:linear-gradient(90deg,#1F4FB2,#8B5CF6,#C026B8);
  --ws-footer-gradient:linear-gradient(135deg,#07164F 0%,#26155F 55%,#7A0D78 100%);
  --nav-h:70px;
  --grad-logo:linear-gradient(90deg,#1F4FB2,#8B5CF6,#C026B8);
  --grad-logo-btn:linear-gradient(90deg,#1F4FB2 0%,#8B5CF6 50%,#C026B8 100%);
}

html{scroll-behavior:smooth;font-size:112%}
body{background:var(--ws-light-bg);color:#101828;font-family:'Exo 2',sans-serif;overflow-x:hidden;min-height:100vh}
p{font-family:Arial,Helvetica,sans-serif;font-size:1rem;line-height:1.75;}
h1{font-weight:900!important}
h2{font-weight:800!important;color:#07164F!important}
h3{font-weight:800!important;color:#1F4FB2!important}
h4{font-weight:800!important;color:#38216E!important}
h5{font-weight:800!important;color:#8B5CF6!important}

/* ══════════════════════════
   SITE HEADER & NAVIGATION
   ══════════════════════════ */
.site-header{
  position:fixed;top:0;left:0;right:0;z-index:200;
  background:#ffffff;backdrop-filter:blur(12px);
  border-bottom:1px solid rgba(7,22,79,0.08);
  box-shadow:0 4px 24px rgba(7,22,79,0.06);
}
.site-header::before{
  content:'';position:absolute;top:0;left:0;right:0;height:3px;
  background:var(--grad-logo-btn);
}
.nav-bar{
  display:flex;align-items:center;justify-content:space-between;
  padding:0 24px;height:var(--nav-h);max-width:1600px;margin:0 auto;gap:12px;
}
.logo-wrap{display:flex;align-items:center;gap:.55rem;text-decoration:none;flex-shrink:0}
.logo-name{font-family:'Orbitron',sans-serif;font-size:1.15rem;font-weight:900;background:var(--grad-logo);-webkit-background-clip:text;-webkit-text-fill-color:transparent;letter-spacing:2px;white-space:nowrap;display:inline-flex;align-items:center}
.logo-name .w-logo{height:1.95rem;width:auto;margin-right:-1px;vertical-align:middle;object-fit:contain;display:inline-block}
.logo-sub{font-size:.55rem;font-weight:600;letter-spacing:2.5px;color:#a78bca;text-transform:uppercase;display:block;margin-top:1px}

.nav-links-new{display:flex;align-items:center;gap:2px;list-style:none;flex:1;justify-content:center}
.nav-links-new li{position:relative}
.nav-links-new a,
.nav-links-new>li>button{
  display:flex;align-items:center;gap:6px;text-decoration:none;
  color:#07164F;font-size:.94rem;font-weight:600;letter-spacing:.4px;
  padding:7px 12px;border-radius:8px;
  transition:color .2s,background .2s;white-space:nowrap;
  cursor:pointer;background:transparent;border:none;font-family:'Exo 2',sans-serif;
}
.nav-links-new a:hover,
.nav-links-new>li>button:hover{color:#07164F;background:rgba(58,92,200,.10)}
.nav-links-new a.active-nav{color:var(--ws-royal-blue);background:rgba(31,79,178,0.08);font-weight:800;}
.nav-icon{width:15px;height:15px;stroke:#07164F;fill:none;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round;transition:stroke .2s;flex-shrink:0}
.nav-arrow{width:13px;height:13px;stroke:#07164F;fill:none;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round;transition:transform .3s,stroke .2s;flex-shrink:0}

.nav-item-services>button{
  background:rgba(59,92,200,.22);border:1px solid rgba(58,92,200,.55);
  color:#fff;animation:svcPulse 3s ease-in-out infinite;
}
@keyframes svcPulse{
  0%,100%{border-color:rgba(58,92,200,.55)}
  50%{border-color:rgba(123,164,212,.8);box-shadow:0 0 12px rgba(58,92,200,.25)}
}
.nav-item-services>button .nav-icon,
.nav-item-services>button .nav-arrow{stroke:#c084fc}
.nav-item-services.open>button .nav-arrow,
.nav-item-products.open>button .nav-arrow{transform:rotate(180deg)}
.nav-item-services.open>button,
.nav-item-services>button:hover{background:rgba(59,92,200,.32)}

.nav-item-products>button{
  display:flex;align-items:center;gap:6px;color:#07164F;font-size:.94rem;
  font-weight:600;padding:7px 12px;border-radius:8px;cursor:pointer;
  background:transparent;border:none;font-family:'Exo 2',sans-serif;
  transition:color .2s,background .2s;
}

.nav-cta-new{
  display:flex;align-items:center;gap:7px;padding:9px 20px;border-radius:30px;
  background:var(--grad-logo-btn);color:#fff;font-weight:700;
  font-size:.82rem;letter-spacing:.5px;text-decoration:none;cursor:pointer;
  border:none;font-family:'Exo 2',sans-serif;white-space:nowrap;flex-shrink:0;
  box-shadow:0 4px 20px rgba(59,92,200,.45);transition:transform .2s,box-shadow .2s;
  animation:ctaGlow 3s ease-in-out infinite;
}
@keyframes ctaGlow{
  0%,100%{box-shadow:0 4px 20px rgba(59,92,200,.4)}
  50%{box-shadow:0 4px 32px rgba(192,132,252,.75)}
}
.nav-cta-new:hover{transform:translateY(-2px);box-shadow:0 8px 32px rgba(192,132,252,.7)!important;animation:none}
.nav-cta-new svg{width:14px;height:14px;stroke:#fff;fill:none;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round;transition:transform .2s}
.nav-cta-new:hover svg{transform:translateX(3px)}

/* Mega Dropdown */
.mega-dropdown{
  position:absolute;top:calc(100% + 8px);left:50%;
  transform:translateX(-50%) translateY(4px);
  width:860px;background:#ffffff;
  border:1px solid rgba(139,92,246,.18);border-radius:16px;
  box-shadow:0 20px 60px rgba(7,22,79,.14),0 4px 16px rgba(139,92,246,.08);
  padding:20px;opacity:0;visibility:hidden;pointer-events:none;
  transition:opacity .2s,visibility .2s,transform .2s;
}
.nav-item-services.open .mega-dropdown{opacity:1;visibility:visible;pointer-events:auto;transform:translateX(-50%) translateY(0)}
.mega-inner{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.mega-col{background:#F7F9FF;border:1.5px solid rgba(139,92,246,.18);border-radius:14px;padding:22px 20px 24px;transition:border-color .22s,box-shadow .22s;position:relative;overflow:hidden}
.mega-col::after{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#1F4FB2,#8B5CF6,#C026B8);opacity:0;transition:opacity .22s}
.mega-col:hover{background:#fff;border-color:rgba(139,92,246,.38);box-shadow:0 8px 28px rgba(139,92,246,.12)}
.mega-col:hover::after{opacity:1}
.mega-col-header{display:flex;align-items:center;gap:14px;padding-bottom:14px;margin-bottom:14px;border-bottom:2px solid rgba(139,92,246,.15)}
.mega-col-icon{width:46px;height:46px;min-width:46px;border-radius:12px;background:linear-gradient(135deg,#1F4FB2 0%,#8B5CF6 55%,#C026B8 100%);display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 6px 18px rgba(139,92,246,.35)}
.mega-col-icon svg{width:22px;height:22px;stroke:#fff;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.mega-col-title{font-family:'Exo 2',sans-serif;font-size:1rem;font-weight:800;color:#07164F}
.mega-links{display:grid;grid-template-columns:1fr 1fr;gap:4px 10px}
.mega-link{display:flex;align-items:center;gap:8px;font-family:'Exo 2',sans-serif;font-size:.87rem;font-weight:500;color:#344157;text-decoration:none;padding:6px 8px;border-radius:6px;transition:background .18s,color .18s,transform .15s}
.mega-link::before{content:'';width:6px;height:6px;min-width:6px;border-radius:50%;background:#8B5CF6;flex-shrink:0}
.mega-link:hover{background:rgba(139,92,246,.08);color:#1F4FB2;transform:translateX(3px)}

.simple-dropdown{position:absolute;top:calc(100% + 8px);left:50%;transform:translateX(-50%) translateY(4px);min-width:180px;background:#fff;border:1px solid rgba(139,92,246,.2);border-radius:10px;padding:6px 0;opacity:0;visibility:hidden;pointer-events:none;transition:opacity .2s,visibility .2s,transform .2s;box-shadow:0 20px 50px rgba(0,0,0,.1)}
.nav-item-products.open .simple-dropdown{opacity:1;visibility:visible;pointer-events:auto;transform:translateX(-50%) translateY(0)}
.simple-dropdown a{display:block;padding:8px 16px;color:#344157;font-size:.88rem;text-decoration:none;transition:color .2s,background .2s}
.simple-dropdown a:hover{color:#1F4FB2;background:rgba(139,92,246,.06)}

/* Hamburger & Mobile Menu */
.hamburger{display:none;flex-direction:column;justify-content:center;align-items:center;gap:5px;width:40px;height:40px;border:1px solid rgba(59,92,200,.4);border-radius:8px;background:rgba(59,92,200,.1);cursor:pointer;flex-shrink:0;transition:border-color .2s,background .2s}
.hamburger:hover{border-color:#c084fc;background:rgba(59,92,200,.2)}
.hamburger span{display:block;width:20px;height:2px;background:#c084fc;border-radius:2px;transition:transform .3s,opacity .3s,width .3s}
.hamburger.open span:nth-child(1){transform:translateY(7px) rotate(45deg)}
.hamburger.open span:nth-child(2){opacity:0;width:0}
.hamburger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}

.mobile-menu{display:none;position:fixed;top:var(--nav-h);left:0;right:0;bottom:0;z-index:199;background:#fff;overflow-y:auto;transform:translateX(100%);transition:transform .35s cubic-bezier(.4,0,.2,1)}
.mobile-menu.open{transform:translateX(0)}
.mobile-menu-inner{padding:20px 20px 40px;display:flex;flex-direction:column;gap:4px}
.mob-link{display:flex;align-items:center;gap:10px;padding:14px 16px;border-radius:10px;color:#07164F;text-decoration:none;font-size:.95rem;font-weight:500;transition:background .2s,color .2s;border:1px solid transparent}
.mob-link:hover,.mob-link.active-mob{color:#1F4FB2;background:rgba(117,168,247,.1);border-color:rgba(139,92,246,.2)}
.mob-link svg{width:18px;height:18px;stroke:#8B5CF6;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;flex-shrink:0}
.mob-section-title{font-family:'Orbitron',sans-serif;font-size:.62rem;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:#75A8F7;padding:18px 16px 8px;border-top:1px solid rgba(139,92,246,.15);margin-top:8px}
.mob-sub-link{display:flex;align-items:center;gap:8px;padding:9px 16px 9px 28px;border-radius:8px;color:#667085;text-decoration:none;font-size:.82rem;transition:color .2s,background .2s}
.mob-sub-link::before{content:'';width:5px;height:5px;border-radius:50%;background:rgba(139,92,246,.5);flex-shrink:0}
.mob-sub-link:hover{color:#07164F;background:rgba(139,92,246,.06)}
.mob-cta{margin-top:20px;padding:14px;border-radius:12px;background:var(--grad-logo-btn);color:#fff;font-weight:700;font-size:.95rem;letter-spacing:1px;text-align:center;text-decoration:none;display:block}

/* ══════════════════════════
   SECTION 1: HERO (LIGHT)
   ══════════════════════════ */
.about-hero{
  min-height:88vh;
  display:grid;
  grid-template-columns:1.05fr 1.15fr;
  align-items:center;
  padding:calc(var(--nav-h) + 40px) 6% 50px;
  gap:2.5rem;
  background:#ffffff;
  position:relative;
}
.about-hero-left{display:flex;flex-direction:column;gap:1.4rem;}
.about-badge{
  font-family:'Orbitron',sans-serif;font-size:.78rem;font-weight:800;
  letter-spacing:2.5px;color:#2B4CB8;text-transform:uppercase;
}
.about-hero h1{
  font-family:'Exo 2',sans-serif;
  font-size:clamp(2.3rem,4.4vw,3.5rem);
  font-weight:900;
  line-height:1.15;
  color:#0E1B48;
}
.about-hero-desc{
  color:#4A5568;
  font-size:1.02rem;
  line-height:1.8;
  max-width:580px;
}
.about-hero-btns{display:flex;gap:1.2rem;flex-wrap:wrap;align-items:center;padding-top:8px}
.btn-hero-primary{
  display:inline-flex;align-items:center;gap:.6rem;
  padding:.85rem 2.2rem;border-radius:50px;
  background:var(--grad-logo-btn);color:#fff;
  font-weight:700;font-size:1rem;letter-spacing:.5px;
  text-decoration:none;border:none;cursor:pointer;
  font-family:'Exo 2',sans-serif;
  box-shadow:0 8px 24px rgba(31,79,178,.35);
  transition:transform .2s,box-shadow .2s;
}
.btn-hero-primary:hover{transform:translateY(-2px);box-shadow:0 14px 32px rgba(139,92,246,.45)}
.btn-hero-primary svg{width:16px;height:16px;stroke:#fff;fill:none;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round;transition:transform .2s}
.btn-hero-primary:hover svg{transform:translateX(3px)}

.btn-hero-outline{
  display:inline-flex;align-items:center;gap:.5rem;
  padding:.85rem 2.2rem;border-radius:50px;
  border:1.8px solid #c084fc;color:#8B5CF6;
  font-weight:700;font-size:1rem;letter-spacing:.5px;
  text-decoration:none;background:#fff;cursor:pointer;
  font-family:'Exo 2',sans-serif;
  transition:all .2s;
  box-shadow:0 4px 14px rgba(139,92,246,.08);
}
.btn-hero-outline:hover{background:rgba(139,92,246,.08);border-color:#8B5CF6;color:#1F4FB2;transform:translateY(-2px)}

.about-hero-visual{
  display:flex;align-items:center;justify-content:center;
}
.about-hero-visual img{
  width:100%;max-width:680px;height:auto;display:block;object-fit:contain;
}

/* ══════════════════════════
   SECTION 2: WHO WE ARE
   ══════════════════════════ */
.who-we-are{
  padding:90px 6%;
  background:#ffffff;
  border-top:1px solid rgba(139,92,246,.08);
}
.wwa-inner{
  max-width:1450px;margin:0 auto;
  display:grid;grid-template-columns:1fr 1.6fr;gap:3.5rem;align-items:center;
}
.wwa-tag{
  font-family:'Orbitron',sans-serif;font-size:.78rem;font-weight:800;
  letter-spacing:2.5px;text-transform:uppercase;color:#2B4CB8;
  margin-bottom:1rem;
}
.wwa-left h2{
  font-family:'Exo 2',sans-serif;
  font-size:clamp(1.9rem,3.4vw,2.7rem);
  font-weight:900;line-height:1.2;
  color:#0E1B48;
  margin-bottom:1.4rem;
}
.wwa-left p{color:#4A5568;font-size:1.02rem;line-height:1.8;margin-bottom:1.8rem}
.wwa-learn-link{
  display:inline-flex;align-items:center;gap:.6rem;
  color:#2B4CB8;font-weight:700;font-size:1.02rem;
  text-decoration:none;transition:gap .2s;
}
.wwa-learn-link:hover{gap:.9rem;color:#8B5CF6}
.wwa-learn-link svg{width:16px;height:16px;stroke:currentColor;fill:none;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}

.wwa-diagram-img-wrap{
  display:flex;align-items:center;justify-content:center;
}
.wwa-diagram-img-wrap img{
  width:100%;max-width:800px;height:auto;display:block;object-fit:contain;
}

/* ══════════════════════════════════════
   SECTION 3: MISSION, VISION & VALUES (DARK)
   ══════════════════════════════════════ */
.mission-section{
  padding:90px 6%;
  background:linear-gradient(135deg,#05091E 0%,#091338 40%,#180A3A 70%,#260533 100%);
  position:relative;overflow:hidden;
}
.mission-inner{max-width:1450px;margin:0 auto;position:relative;z-index:1}
.mission-tag{
  display:inline-block;font-family:'Orbitron',sans-serif;
  font-size:.75rem;font-weight:800;letter-spacing:2.5px;text-transform:uppercase;
  color:#75A8F7;margin-bottom:.9rem;
}
.mission-inner h2{
  font-family:'Exo 2',sans-serif;font-size:clamp(2rem,3.6vw,2.8rem);font-weight:900;
  line-height:1.2;color:#fff!important;
  margin-bottom:2.8rem;max-width:800px;
}
.mission-grid{
  display:grid;grid-template-columns:1.25fr 1fr;gap:2.5rem;align-items:center;
}
.mission-timeline-img img,
.mission-mvv-img img{
  width:100%;height:auto;display:block;object-fit:contain;
  border-radius:18px;
}

/* ══════════════════════════════════════
   SECTION 4: OUR EXPERTISE (DARK)
   ══════════════════════════════════════ */
.expertise-section{
  padding:90px 6%;
  background:linear-gradient(135deg,#05091E 0%,#081235 50%,#1C0738 100%);
  position:relative;overflow:hidden;
  border-top:1px solid rgba(255,255,255,.08);
}
.expertise-inner{max-width:1450px;margin:0 auto;position:relative;z-index:1}
.exp-tag{
  display:inline-block;font-family:'Orbitron',sans-serif;
  font-size:.75rem;font-weight:800;letter-spacing:2.5px;text-transform:uppercase;
  color:#75A8F7;margin-bottom:.8rem;
}
.expertise-inner h2{
  font-family:'Exo 2',sans-serif;font-size:clamp(1.9rem,3.4vw,2.6rem);font-weight:900;
  color:#fff!important;margin-bottom:2.8rem;
}
.expertise-cards{
  display:grid;grid-template-columns:repeat(4,1fr);gap:1.3rem;
}
.exp-card-wrapper{
  transition:transform .25s ease,box-shadow .25s ease;display:block;
}
.exp-card-wrapper:hover{
  transform:translateY(-5px);
}
.exp-card-wrapper img{
  width:100%;height:auto;display:block;object-fit:contain;
  border-radius:16px;box-shadow:0 10px 30px rgba(0,0,0,.35);
}

/* ══════════════════════════════════════
   SECTION 5: WHY CHOOSE WEBSPIDE (DARK)
   ══════════════════════════════════════ */
.why-section{
  padding:90px 6%;
  background:linear-gradient(135deg,#05091E 0%,#0A1642 50%,#20083F 100%);
  position:relative;
  border-top:1px solid rgba(255,255,255,.08);
}
.why-inner{
  max-width:1450px;margin:0 auto;position:relative;z-index:1;
  display:grid;grid-template-columns:1fr 2.4fr;gap:3.5rem;align-items:center;
}
.why-tag{
  display:inline-block;font-family:'Orbitron',sans-serif;
  font-size:.75rem;font-weight:800;letter-spacing:2.5px;text-transform:uppercase;
  color:#75A8F7;margin-bottom:.8rem;
}
.why-left h2{
  font-family:'Exo 2',sans-serif;font-size:clamp(1.9rem,3.4vw,2.6rem);font-weight:900;
  color:#fff!important;line-height:1.2;margin-bottom:2rem;
}
.btn-why-cta{
  display:inline-flex;align-items:center;gap:.6rem;
  padding:.85rem 2.2rem;border-radius:50px;
  background:var(--grad-logo-btn);color:#fff;
  font-weight:700;font-size:.95rem;letter-spacing:.5px;
  text-decoration:none;border:none;cursor:pointer;
  font-family:'Exo 2',sans-serif;
  box-shadow:0 8px 24px rgba(31,79,178,.4);
  transition:transform .2s,box-shadow .2s;
}
.btn-why-cta:hover{transform:translateY(-2px);box-shadow:0 14px 32px rgba(139,92,246,.55)}
.btn-why-cta svg{width:15px;height:15px;stroke:#fff;fill:none;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round;transition:transform .2s}
.btn-why-cta:hover svg{transform:translateX(3px)}

.why-grid-img-wrap img{
  width:100%;height:auto;display:block;object-fit:contain;
  border-radius:18px;
}

/* ══════════════════════════════════════
   SECTION 6: OUR LEADERSHIP (LIGHT)
   ══════════════════════════════════════ */
.leadership-section{
  padding:100px 6% 90px;
  background:#ffffff;
  border-top:1px solid rgba(139,92,246,.12);
  position:relative;overflow:hidden;
}
.lead-decor-left{
  position:absolute;top:60px;left:4%;width:130px;opacity:.95;pointer-events:none;
}
.lead-decor-right{
  position:absolute;top:50px;right:4%;width:170px;opacity:.95;pointer-events:none;
}
.leadership-inner{max-width:1350px;margin:0 auto;position:relative;z-index:1}
.lead-head{text-align:center;margin-bottom:3.8rem;}
.lead-tag{
  display:inline-block;font-family:'Orbitron',sans-serif;
  font-size:.78rem;font-weight:800;letter-spacing:3px;text-transform:uppercase;
  color:#2B4CB8;margin-bottom:.8rem;
}
.lead-head h2{
  font-family:'Exo 2',sans-serif;font-size:clamp(2.1rem,4vw,3rem);font-weight:900;
  color:#0E1B48;line-height:1.15;margin-bottom:1.2rem;
}
.lead-head p{font-family:Arial,Helvetica,sans-serif;font-size:1.02rem;color:#4A5568;line-height:1.8;max-width:760px;margin:0 auto}

.leader-cards{
  display:grid;grid-template-columns:1fr 1fr;gap:2.5rem;margin-bottom:3.5rem;
}
.leader-card{
  background:#fff;
  border:1.5px solid rgba(139,92,246,.18);border-radius:24px;
  box-shadow:0 12px 36px rgba(7,22,79,.08);
  padding:32px 28px;display:flex;align-items:center;gap:2rem;
  transition:all .28s ease;
}
.leader-card:hover{
  border-color:rgba(139,92,246,.45);
  box-shadow:0 20px 55px rgba(139,92,246,.16);
  transform:translateY(-4px);
}
.leader-arch-img{
  width:160px;min-width:160px;height:auto;display:block;border-radius:20px;
}
.leader-info{flex:1}
.leader-name{font-family:'Exo 2',sans-serif;font-size:1.32rem;font-weight:900;color:#0E1B48;margin-bottom:.25rem}
.leader-role{
  font-family:'Exo 2',sans-serif;font-size:.95rem;font-weight:700;
  color:#2B4CB8;letter-spacing:.3px;margin-bottom:.6rem;
}
.leader-divider{width:36px;height:3px;background:var(--ws-heading-gradient);border-radius:2px;margin-bottom:1rem}
.leader-desc{font-family:Arial,Helvetica,sans-serif;font-size:.92rem;color:#4A5568;line-height:1.7;margin-bottom:1.4rem}
.leader-linkedin{
  display:inline-flex;align-items:center;gap:.6rem;
  padding:.55rem 1.4rem;border-radius:8px;
  border:1.5px solid rgba(31,79,178,.35);color:#1F4FB2;
  font-size:.88rem;font-weight:700;text-decoration:none;
  transition:all .2s ease;
}
.leader-linkedin:hover{background:rgba(31,79,178,.08);border-color:#1F4FB2;color:#07164F}
.leader-linkedin svg{width:16px;height:16px;fill:#1F4FB2}

.strengths-bar-img-wrap img{
  width:100%;height:auto;display:block;object-fit:contain;
  border-radius:20px;box-shadow:0 8px 28px rgba(7,22,79,.06);
}

/* ══════════════════════════════════════
   SECTION 7: COMMITMENT + CTA (SPLIT DARK)
   ══════════════════════════════════════ */
.commitment-section{
  display:grid;grid-template-columns:1.05fr 1fr;
  min-height:380px;
}
.commit-left{
  padding:70px 6%;
  background:linear-gradient(135deg,#05091E 0%,#0F153F 60%,#22063A 100%);
  position:relative;overflow:hidden;
  display:flex;flex-direction:column;justify-content:center;gap:1.5rem;
}
.commit-content{position:relative;z-index:1}
.commit-tag{
  display:inline-block;font-family:'Orbitron',sans-serif;
  font-size:.75rem;font-weight:800;letter-spacing:2.5px;text-transform:uppercase;
  color:#75A8F7;margin-bottom:.8rem;
}
.commit-left h2{
  font-family:'Exo 2',sans-serif;font-size:clamp(1.7rem,3vw,2.4rem);font-weight:900;
  color:#fff!important;margin-bottom:.9rem;line-height:1.25;
}
.commit-left p{font-family:Arial,Helvetica,sans-serif;font-size:.96rem;color:rgba(255,255,255,.75);line-height:1.75;margin-bottom:1.6rem}
.commit-cards-img-wrap img{
  width:100%;max-width:540px;height:auto;display:block;object-fit:contain;
}

.commit-right{
  padding:70px 6%;
  background:linear-gradient(135deg,#130842 0%,#270752 50%,#460565 100%);
  position:relative;overflow:hidden;
  display:flex;flex-direction:column;justify-content:center;align-items:flex-start;
  border-left:1px solid rgba(255,255,255,.08);
}
.commit-right-content{position:relative;z-index:2;max-width:480px}
.commit-right h2{
  font-family:'Exo 2',sans-serif;font-size:clamp(1.8rem,3.2vw,2.5rem);font-weight:900;
  color:#fff!important;line-height:1.2;margin-bottom:1rem;
}
.commit-right p{font-family:Arial,Helvetica,sans-serif;font-size:1rem;color:rgba(255,255,255,.8);line-height:1.8;margin-bottom:2rem}
.commit-cta-btns{display:flex;gap:1.2rem;flex-wrap:wrap}
.btn-commit-primary{
  display:inline-flex;align-items:center;gap:.6rem;
  padding:.85rem 2.2rem;border-radius:50px;
  background:var(--grad-logo-btn);color:#fff;
  font-weight:700;font-size:.95rem;letter-spacing:.5px;
  text-decoration:none;border:none;cursor:pointer;
  font-family:'Exo 2',sans-serif;
  box-shadow:0 8px 24px rgba(31,79,178,.4);
  transition:transform .2s,box-shadow .2s;
}
.btn-commit-primary:hover{transform:translateY(-2px);box-shadow:0 14px 32px rgba(192,38,184,.45)}
.btn-commit-primary svg{width:15px;height:15px;stroke:#fff;fill:none;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round;transition:transform .2s}
.btn-commit-primary:hover svg{transform:translateX(3px)}

.btn-commit-outline{
  display:inline-flex;align-items:center;gap:.6rem;
  padding:.85rem 2.2rem;border-radius:50px;
  border:1.5px solid rgba(255,255,255,.5);color:#fff;
  font-weight:700;font-size:.95rem;letter-spacing:.5px;
  text-decoration:none;background:transparent;cursor:pointer;
  font-family:'Exo 2',sans-serif;
  transition:all .2s ease;
}
.btn-commit-outline:hover{background:rgba(255,255,255,.1);border-color:#fff;transform:translateY(-2px)}
.btn-commit-outline svg{width:16px;height:16px;stroke:#fff;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}

.commit-rocket-wrap{
  position:absolute;right:3%;bottom:0;top:0;
  display:flex;align-items:center;justify-content:center;
  pointer-events:none;z-index:1;
}
.commit-rocket-wrap img{
  height:88%;max-height:320px;width:auto;object-fit:contain;
  filter:drop-shadow(0 0 35px rgba(192,38,184,.6));
}

/* ══════════════════════════
   FOOTER
   ══════════════════════════ */
.site-footer{
  position:relative;z-index:1;
  background:var(--ws-footer-gradient)!important;
  color:#fff;
}
.footer-top{display:grid;grid-template-columns:1.6fr 1fr 1fr 1fr;gap:2.5rem;padding:3.5rem 5% 2.5rem;border-bottom:1px solid rgba(255,255,255,.1)}
.ft-brand{display:flex;flex-direction:column;gap:.9rem}
.ft-logo{display:flex;align-items:center;gap:.55rem}
.ft-logo-text{font-family:'Orbitron',sans-serif;font-size:1.15rem;font-weight:900;background:linear-gradient(90deg,#fff,#75A8F7);-webkit-background-clip:text;-webkit-text-fill-color:transparent;letter-spacing:2px;display:inline-flex;align-items:center}
.ft-logo-text .w-logo{height:1.35rem;width:auto;margin-right:-1px;vertical-align:middle;object-fit:contain;display:inline-block}
.ft-desc{font-family:Arial,Helvetica,sans-serif;font-size:.93rem;color:rgba(255,255,255,.85)!important;line-height:1.75;max-width:270px}
.ft-contact{display:flex;flex-direction:column;gap:.6rem;margin-top:.25rem}
.ft-contact-item{display:flex;align-items:flex-start;gap:.55rem}
.ft-contact-item svg{width:13px;height:13px;flex-shrink:0;margin-top:2px}
.ft-contact-item span{font-size:.88rem;color:rgba(255,255,255,.85)!important;line-height:1.6}
.ft-contact-item a{color:#c084fc;text-decoration:none;font-size:.88rem}
.ft-contact-item a:hover{text-decoration:underline}
.ft-social-row{display:flex;gap:.5rem;margin-top:.4rem;flex-wrap:wrap}
.ft-soc{width:32px;height:32px;border-radius:7px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;transition:border-color .2s,background .2s;cursor:pointer;text-decoration:none}
.ft-soc:hover{border-color:#D8B4FE;background:rgba(255,255,255,.1)}
.ft-soc svg{width:13px;height:13px}
.ft-col h4{font-family:'Orbitron',sans-serif;font-size:.82rem;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:#fff!important;-webkit-text-fill-color:#fff!important;margin-bottom:1rem;padding-bottom:.55rem;border-bottom:1px solid rgba(255,255,255,.15)}
.ft-links{display:flex;flex-direction:column;gap:.55rem}
.ft-links a{font-size:.9rem;color:rgba(255,255,255,.85)!important;text-decoration:none;transition:color .2s;display:flex;align-items:center;gap:.4rem}
.ft-links a:hover{color:#D8B4FE!important}
.ft-links a::before{content:'';width:4px;height:4px;border-radius:50%;background:rgba(255,255,255,.4);flex-shrink:0}
.ft-links a:hover::before{background:#D8B4FE}
.footer-bottom{display:flex;align-items:center;justify-content:space-between;padding:1.4rem 5%;flex-wrap:wrap;gap:.8rem}
.fb-copy{font-size:.88rem;color:rgba(255,255,255,.85)!important}
.fb-copy span{color:#75A8F7!important}
.fb-legal{display:flex;gap:1.3rem;flex-wrap:wrap}
.fb-legal a{font-size:.86rem;color:rgba(255,255,255,.85)!important;text-decoration:none;transition:color .2s}
.fb-legal a:hover{color:#D8B4FE!important}

/* ── Scroll Animations ── */
.reveal{opacity:0;transform:translateY(30px);transition:opacity .65s ease,transform .65s ease}
.reveal.visible{opacity:1;transform:translateY(0)}
.fade-in{opacity:0;transform:translateY(28px);animation:fadeIn .8s ease forwards}
@keyframes fadeIn{to{opacity:1;transform:none}}
.delay-1{animation-delay:.1s}.delay-2{animation-delay:.2s}.delay-3{animation-delay:.3s}

/* ── RESPONSIVE ── */
@media(max-width:1150px){
  .about-hero{grid-template-columns:1fr;text-align:center;min-height:auto;padding:calc(var(--nav-h) + 40px) 5% 60px}
  .about-hero-left{align-items:center}
  .about-hero-desc{margin:0 auto}
  .about-hero-btns{justify-content:center}
  .wwa-inner{grid-template-columns:1fr;gap:3rem;text-align:center}
  .wwa-learn-link{justify-content:center}
  .mission-grid{grid-template-columns:1fr}
  .expertise-cards{grid-template-columns:repeat(2,1fr)}
  .why-inner{grid-template-columns:1fr;gap:2.5rem;text-align:center}
  .btn-why-cta{margin:0 auto}
  .leader-cards{grid-template-columns:1fr}
  .commitment-section{grid-template-columns:1fr}
  .footer-top{grid-template-columns:1fr 1fr;gap:2rem}
}
@media(max-width:850px){
  .nav-links-new{display:none}
  .hamburger{display:flex}
  .mobile-menu{display:block}
  .lead-decor-left, .lead-decor-right{display:none}
}
@media(max-width:600px){
  .expertise-cards{grid-template-columns:1fr}
  .leader-card{flex-direction:column;text-align:center}
  .leader-divider{margin:0 auto 1rem}
  .footer-top{grid-template-columns:1fr}
}
</style>
</head>
<body>

<!-- ══════ NAVIGATION ══════ -->
<header class="site-header">
  <div class="nav-bar">
    <a href="index.html" class="logo-wrap">
      <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="wGrad1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#1F4FB2"/><stop offset="50%" stop-color="#8B5CF6"/><stop offset="100%" stop-color="#C026B8"/></linearGradient>
          <linearGradient id="wGrad2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#75A8F7"/><stop offset="100%" stop-color="#8B5CF6"/></linearGradient>
          <linearGradient id="wGrad3" x1="0" y1="1" x2="1" y2="0"><stop offset="0%" stop-color="#07164F"/><stop offset="100%" stop-color="#1F4FB2"/></linearGradient>
        </defs>
        <polygon points="23,2 44,23 23,44 2,23" fill="url(#wGrad1)" opacity=".15" stroke="url(#wGrad2)" stroke-width="1"/>
        <polygon points="23,2 34,18 23,15 12,18" fill="url(#wGrad2)" opacity=".6"/>
        <polygon points="44,23 34,18 28,30 37,34" fill="url(#wGrad1)" opacity=".5"/>
        <polygon points="2,23 12,18 16,30 9,34" fill="url(#wGrad3)" opacity=".5"/>
        <polygon points="23,44 28,30 23,34 16,30" fill="url(#wGrad2)" opacity=".55"/>
        <polygon points="23,15 34,18 28,30 16,30 12,18" fill="url(#wGrad1)" opacity=".25"/>
        <path d="M13 16 L17 30 L23 22 L29 30 L33 16" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity=".95"/>
      </svg>
      <div class="logo-text-block">
        <span class="logo-name"><img src="w-logo.png" alt="W" class="w-logo">EBSPIDE</span>
        <span class="logo-sub">Technology</span>
      </div>
    </a>

    <ul class="nav-links-new">
      <li><a href="index.html"><svg class="nav-icon" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>Home</a></li>
      <li><a href="aboutus.html" class="active-nav"><svg class="nav-icon" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>About Us</a></li>
      <li class="nav-item-services" id="navServices">
        <button>
          <svg class="nav-icon" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
          Services
          <svg class="nav-arrow" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="mega-dropdown" id="megaDropdown">
          <div class="mega-inner">
            <div class="mega-col">
              <div class="mega-col-header">
                <div class="mega-col-icon"><svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div>
                <div class="mega-col-title">Web Development</div>
              </div>
              <div class="mega-links">
                <a href="index.html" class="mega-link">Custom Web Development</a>
                <a href="indexword1.html" class="mega-link">WordPress Development</a>
                <a href="indexfront1.html" class="mega-link">Front-End Development</a>
                <a href="index1.html" class="mega-link">Back-End Development</a>
                <a href="indexecom1.html" class="mega-link">E-Commerce Web Development</a>
                <a href="indexweb1.html" class="mega-link">Web Application Development</a>
                <a href="indexuiux1.html" class="mega-link">UI/UX Design</a>
              </div>
            </div>
            <div class="mega-col mega-col-app">
              <div class="mega-col-header">
                <div class="mega-col-icon"><svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg></div>
                <div class="mega-col-title">App Development</div>
              </div>
              <div class="mega-links">
                <a href="indexandroid1.html" class="mega-link">Android App Development</a>
                <a href="indexflutter1.html" class="mega-link">Flutter App Development</a>
                <a href="indexios1.html" class="mega-link">iOS App Development</a>
                <a href="indexreact1.html" class="mega-link">React Native App Development</a>
              </div>
            </div>
            <div class="mega-col">
              <div class="mega-col-header">
                <div class="mega-col-icon"><svg viewBox="0 0 24 24"><path d="M22 2L11 13"/><path d="M22 2L15 22l-4-9-9-4 20-7z"/></svg></div>
                <div class="mega-col-title">Digital Marketing Services</div>
              </div>
              <div class="mega-links">
                <a href="indexseo1.html" class="mega-link">Search Engine Optimization</a>
                <a href="indexsem1.html" class="mega-link">Search Engine Marketing</a>
                <a href="indexsmmarket1.html" class="mega-link">Social Media Marketing</a>
                <a href="indexmanage1.html" class="mega-link">Social Media Management</a>
                <a href="indexseocontent1.html" class="mega-link">SEO Content Writing</a>
                <a href="indexemail1.html" class="mega-link">Email Marketing</a>
                <a href="indexinfluence1.html" class="mega-link">Influencer Marketing</a>
                <a href="indexapp1.html" class="mega-link">App Store Optimization</a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="nav-item-products" id="navProducts">
        <button>
          <svg class="nav-icon" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
          Products
          <svg class="nav-arrow" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="simple-dropdown" id="simpleDropdown">
          <a href="#">CMS Platform</a>
          <a href="#">Analytics Dashboard</a>
          <a href="#">SEO Toolkit</a>
          <a href="#">E-Commerce Suite</a>
        </div>
      </li>
      <li><a href="#"><svg class="nav-icon" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>Blog</a></li>
      <li><a href="index.html#contact"><svg class="nav-icon" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>Contact Us</a></li>
    </ul>

    <a href="index.html#contact" class="nav-cta-new">
      Get a Quote
      <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
    </a>
    <button class="hamburger" id="hamburger" aria-label="Toggle menu"><span></span><span></span><span></span></button>
  </div>
</header>

<!-- Mobile Menu -->
<nav class="mobile-menu" id="mobileMenu">
  <div class="mobile-menu-inner">
    <a href="index.html" class="mob-link"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>Home</a>
    <a href="aboutus.html" class="mob-link active-mob"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>About Us</a>
    <a href="#" class="mob-link"><svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>Blog</a>
    <div class="mob-section-title">Web Development</div>
    <a href="index.html" class="mob-sub-link">Custom Web Development</a>
    <a href="indexword1.html" class="mob-sub-link">WordPress Development</a>
    <a href="indexfront1.html" class="mob-sub-link">Front-End Development</a>
    <a href="index1.html" class="mob-sub-link">Back-End Development</a>
    <a href="indexecom1.html" class="mob-sub-link">E-Commerce Web Development</a>
    <a href="indexweb1.html" class="mob-sub-link">Web Application Development</a>
    <a href="indexuiux1.html" class="mob-sub-link">UI/UX Design</a>
    <div class="mob-section-title">App Development</div>
    <a href="indexandroid1.html" class="mob-sub-link">Android App Development</a>
    <a href="indexflutter1.html" class="mob-sub-link">Flutter App Development</a>
    <a href="indexios1.html" class="mob-sub-link">iOS App Development</a>
    <a href="indexreact1.html" class="mob-sub-link">React Native App Development</a>
    <div class="mob-section-title">Digital Marketing</div>
    <a href="indexseo1.html" class="mob-sub-link">Search Engine Optimization (SEO)</a>
    <a href="indexsem1.html" class="mob-sub-link">Search Engine Marketing (SEM)</a>
    <a href="indexsmmarket1.html" class="mob-sub-link">Social Media Marketing</a>
    <a href="indexmanage1.html" class="mob-sub-link">Social Media Management</a>
    <a href="indexseocontent1.html" class="mob-sub-link">SEO Content Writing</a>
    <a href="indexemail1.html" class="mob-sub-link">Email Marketing</a>
    <a href="indexinfluence1.html" class="mob-sub-link">Influencer Marketing</a>
    <a href="indexapp1.html" class="mob-sub-link">App Store Optimization (ASO)</a>
    <div class="mob-section-title">Products</div>
    <a href="#" class="mob-sub-link">CMS Platform</a>
    <a href="#" class="mob-sub-link">Analytics Dashboard</a>
    <a href="#" class="mob-sub-link">SEO Toolkit</a>
    <a href="index.html#contact" class="mob-cta" id="mobCta">Get a Free Quote →</a>
  </div>
</nav>

<!-- ══════════════════════════════════════
     SECTION 1: HERO
     ══════════════════════════════════════ -->
<section class="about-hero">
  <div class="about-hero-left fade-in">
    <div class="about-badge">ABOUT WEBSPIDE</div>
    <h1>
      Building Digital Solutions<br>for Growing Businesses
    </h1>
    <p class="about-hero-desc">At Webspide, we combine strategy, design, and engineering to create digital solutions that drive measurable growth, operational efficiency, and long-term success.</p>
    <div class="about-hero-btns">
      <a href="index.html#contact" class="btn-hero-primary">
        Let's Work Together
        <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </a>
      <a href="index.html#services" class="btn-hero-outline">Explore Our Services</a>
    </div>
  </div>

  <div class="about-hero-visual fade-in delay-1">
    <img src="images/about/exact/hero_city.png" alt="Webspide Building Digital Solutions for Growing Businesses" />
  </div>
</section>

<!-- ══════════════════════════════════════
     SECTION 2: WHO WE ARE
     ══════════════════════════════════════ -->
<section class="who-we-are">
  <div class="wwa-inner">
    <div class="wwa-left reveal">
      <div class="wwa-tag">WHO WE ARE</div>
      <h2>A Digital Technology Partner<br>Focused on Business Growth</h2>
      <p>We're a team of strategists, designers, and engineers who partner with businesses to solve real problems and unlock new opportunities through technology.</p>
      <a href="#leadership" class="wwa-learn-link">
        Learn more about our journey
        <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </a>
    </div>

    <div class="wwa-diagram-img-wrap reveal">
      <img src="images/about/exact/who_we_are_orbit.png" alt="Who We Are - Business First, End-to-End Partner, Results That Matter, Built on Trust" />
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════
     SECTION 3: MISSION, VISION & VALUES
     ══════════════════════════════════════ -->
<section class="mission-section">
  <div class="mission-inner">
    <div class="mission-tag reveal">OUR APPROACH, MISSION, VISION & VALUES</div>
    <h2 class="reveal">Business Goals First.<br>Technology That Supports Them.</h2>

    <div class="mission-grid">
      <div class="mission-timeline-img reveal">
        <img src="images/about/exact/sec3_process.png" alt="01 Understand, 02 Strategize, 03 Build & Execute, 04 Improve & Grow" />
      </div>

      <div class="mission-mvv-img reveal">
        <img src="images/about/exact/sec3_mvv_block.png" alt="Our Mission, Our Vision, Our Core Values" />
      </div>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════
     SECTION 4: OUR EXPERTISE
     ══════════════════════════════════════ -->
<section class="expertise-section">
  <div class="expertise-inner">
    <div class="exp-tag reveal">OUR EXPERTISE</div>
    <h2 class="reveal">Digital Expertise Under One Roof</h2>

    <div class="expertise-cards">
      <a href="index.html" class="exp-card-wrapper reveal">
        <img src="images/about/exact/sec4_web.png" alt="Web Development" />
      </a>
      <a href="indexandroid1.html" class="exp-card-wrapper reveal">
        <img src="images/about/exact/sec4_app.png" alt="Mobile App Development" />
      </a>
      <a href="indexseo1.html" class="exp-card-wrapper reveal">
        <img src="images/about/exact/sec4_marketing.png" alt="Digital Marketing" />
      </a>
      <a href="indexweb1.html" class="exp-card-wrapper reveal">
        <img src="images/about/exact/sec4_software.png" alt="Software & Digital Solutions" />
      </a>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════
     SECTION 5: WHY CHOOSE WEBSPIDE
     ══════════════════════════════════════ -->
<section class="why-section">
  <div class="why-inner">
    <div class="why-left reveal">
      <div class="why-tag">WHY CHOOSE WEBSPIDE</div>
      <h2>A Partner You Can Rely On</h2>
      <a href="index.html#contact" class="btn-why-cta">
        Start a Conversation
        <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </a>
    </div>

    <div class="why-grid-img-wrap reveal">
      <img src="images/about/exact/sec5_why_grid.png" alt="Business-First Approach, Proven Expertise, Agile & Flexible, Quality You Can Trust, Transparent Communication, Long-Term Partnership" />
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════
     SECTION 6: OUR LEADERSHIP
     ══════════════════════════════════════ -->
<section class="leadership-section" id="leadership">
  <!-- Decorative 3D elements from mockup -->
  <img src="images/about/exact/sec6_cubes_left.png" alt="Decorative Cubes" class="lead-decor-left" />
  <img src="images/about/exact/sec6_w_cube_right.png" alt="Webspide Platform" class="lead-decor-right" />

  <div class="leadership-inner">
    <div class="lead-head reveal">
      <div class="lead-tag">OUR LEADERSHIP</div>
      <h2>The People Behind Webspide.</h2>
      <p>Our leadership team brings together expertise in business, technology, marketing, and client-focused thinking—driving innovation, building strong partnerships, and delivering lasting impact.</p>
    </div>

    <div class="leader-cards">
      <!-- Co-Founder & CEO -->
      <div class="leader-card reveal">
        <img src="images/about/exact/sec6_abdul_arch.png" alt="Abdul Wasigh Thalha A M" class="leader-arch-img" />
        <div class="leader-info">
          <div class="leader-name">Abdul Wasigh Thalha A M</div>
          <div class="leader-role">Co-Founder & CEO</div>
          <div class="leader-divider"></div>
          <p class="leader-desc">A technology leader with a passion for building scalable digital solutions and empowering businesses to grow through innovation and operational excellence.</p>
          <a href="#" class="leader-linkedin">
            <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            LinkedIn Profile
          </a>
        </div>
      </div>

      <!-- Co-Founder & CMO -->
      <div class="leader-card reveal">
        <img src="images/about/exact/sec6_sharukhan_arch.png" alt="Sharukhan S" class="leader-arch-img" />
        <div class="leader-info">
          <div class="leader-name">Sharukhan S</div>
          <div class="leader-role">Co-Founder & CMO</div>
          <div class="leader-divider"></div>
          <p class="leader-desc">A growth strategist and marketing leader with a track record of creating brands, driving engagement, and building strong client relationships.</p>
          <a href="#" class="leader-linkedin">
            <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            LinkedIn Profile
          </a>
        </div>
      </div>
    </div>

    <!-- 5 Strengths bar -->
    <div class="strengths-bar-img-wrap reveal">
      <img src="images/about/exact/sec6_strengths_bar.png" alt="Vision, Strategy, Client Focus, Marketing, Growth" />
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════
     SECTION 7: COMMITMENT + CTA
     ══════════════════════════════════════ -->
<div class="commitment-section">
  <!-- Left Side: Commitment -->
  <div class="commit-left">
    <div class="commit-content reveal">
      <div class="commit-tag">OUR COMMITMENT</div>
      <h2>More Than Project Delivery</h2>
      <p>We don't just deliver projects—we build relationships. Our commitment is to provide clarity, take responsibility, ensure quality, and stay with you for the long run.</p>
      
      <div class="commit-cards-img-wrap">
        <img src="images/about/exact/sec7_4_cards.png" alt="Clarity in Communication, Responsibility in Execution, Quality in Delivery, Commitment Beyond Launch" />
      </div>
    </div>
  </div>

  <!-- Right Side: Final CTA -->
  <div class="commit-right">
    <div class="commit-rocket-wrap">
      <img src="images/about/exact/sec7_rocket_launch.png" alt="Rocket Launch" />
    </div>

    <div class="commit-right-content reveal">
      <h2>Ready to Build What's Next?</h2>
      <p>Let's bring your ideas to life with strategy, technology, and marketing that deliver real results.</p>
      
      <div class="commit-cta-btns">
        <a href="index.html#contact" class="btn-commit-primary">
          Start Your Project
          <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
        <a href="index.html#contact" class="btn-commit-outline">
          Talk to Our Team
          <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </a>
      </div>
    </div>
  </div>
</div>

<!-- ══════ FOOTER ══════ -->
<footer class="site-footer">
  <div class="footer-top">
    <div class="ft-brand">
      <div class="logo-text-block">
        <span class="logo-name" style="font-family:'Orbitron',sans-serif;font-size:1.1rem;font-weight:900;background:linear-gradient(90deg,#fff,#75A8F7);-webkit-background-clip:text;-webkit-text-fill-color:transparent;letter-spacing:2px;display:inline-flex;align-items:center"><img src="w-logo.png" alt="W" class="w-logo" style="height:1.35rem;width:auto;margin-right:-1px;vertical-align:middle;filter:brightness(0) invert(1)">EBSPIDE</span>
        <span class="logo-sub" style="font-size:.55rem;font-weight:600;letter-spacing:2.5px;color:rgba(255,255,255,.6);text-transform:uppercase;display:block;margin-top:1px">Technology</span>
      </div>
      <p class="ft-desc">A global digital transformation company helping businesses scale through innovative web, mobile, and marketing solutions.</p>
      <div class="ft-contact">
        <div class="ft-contact-item"><svg viewBox="0 0 24 24" fill="none" stroke="#c084fc" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg><span>69A/47, Thomas Colony, S S Colony Road, Madurai – 625016, Tamil Nadu, India.</span></div>
        <div class="ft-contact-item"><svg viewBox="0 0 24 24" fill="none" stroke="#7ba4d4" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 11.84a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.07 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg><a href="tel:+919943391296">+91 99433 91296</a></div>
        <div class="ft-contact-item"><svg viewBox="0 0 24 24" fill="none" stroke="#e879f9" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg><a href="mailto:info@webspide.com">info@webspide.com</a></div>
      </div>
      <div class="ft-social-row">
        <a class="ft-soc" href="#"><svg viewBox="0 0 24 24" fill="none" stroke="#a78bca" stroke-width="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
        <a class="ft-soc" href="#"><svg viewBox="0 0 24 24" fill="none" stroke="#a78bca" stroke-width="1.5"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg></a>
        <a class="ft-soc" href="#"><svg viewBox="0 0 24 24" fill="none" stroke="#a78bca" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
        <a class="ft-soc" href="#"><svg viewBox="0 0 24 24" fill="none" stroke="#a78bca" stroke-width="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
      </div>
    </div>
    <div class="ft-col"><h4>Services</h4><div class="ft-links"><a href="index.html">Web Development</a><a href="indexandroid1.html">App Development</a><a href="indexseo1.html">Digital Marketing</a><a href="indexecom1.html">Ecommerce Development</a><a href="indexseo1.html">SEO Services</a></div></div>
    <div class="ft-col"><h4>Company</h4><div class="ft-links"><a href="aboutus.html">About Us</a><a href="#">Careers</a><a href="#">Blog</a><a href="index.html#contact">Contact Us</a></div></div>
    <div class="ft-col"><h4>Legal</h4><div class="ft-links"><a href="#">Privacy Policy</a><a href="#">Terms &amp; Conditions</a><a href="#">Refund Policy</a><a href="#">Disclaimer</a></div></div>
  </div>
  <div class="footer-bottom">
    <div class="fb-copy">© 2026 <span>WebSpide Technologies</span>. All rights reserved.</div>
    <div class="fb-legal"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Sitemap</a><a href="#">Contact</a></div>
  </div>
</footer>

<script>
/* ── NAV DROPDOWNS ── */
(function(){
  function setupDropdown(liId){
    const li=document.getElementById(liId);if(!li)return;
    let closeTimer=null;
    function open(){if(closeTimer){clearTimeout(closeTimer);closeTimer=null;}li.classList.add('open');}
    function scheduleClose(){closeTimer=setTimeout(function(){li.classList.remove('open');},200);}
    function cancelClose(){if(closeTimer){clearTimeout(closeTimer);closeTimer=null;}}
    li.addEventListener('mouseenter',open);li.addEventListener('mouseleave',scheduleClose);
    const dropdown=li.querySelector('.mega-dropdown, .simple-dropdown');
    if(dropdown){
      dropdown.addEventListener('mouseenter',cancelClose);dropdown.addEventListener('mouseleave',scheduleClose);
      dropdown.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){li.classList.remove('open');});});
    }
  }
  setupDropdown('navServices');setupDropdown('navProducts');
  document.addEventListener('click',function(e){['navServices','navProducts'].forEach(function(id){const li=document.getElementById(id);if(li&&!li.contains(e.target))li.classList.remove('open');});});
})();

/* ── Hamburger ── */
const hamburger=document.getElementById('hamburger');
const mobileMenu=document.getElementById('mobileMenu');
const mobCta=document.getElementById('mobCta');
function closeMobile(){hamburger.classList.remove('open');mobileMenu.classList.remove('open');document.body.style.overflow='';}
hamburger.addEventListener('click',function(){const isOpen=hamburger.classList.toggle('open');mobileMenu.classList.toggle('open',isOpen);document.body.style.overflow=isOpen?'hidden':'';});
if(mobCta) mobCta.addEventListener('click',closeMobile);
document.querySelectorAll('.mob-link,.mob-sub-link').forEach(function(el){el.addEventListener('click',closeMobile);});

/* ── Scroll Reveal ── */
const observer=new IntersectionObserver(function(entries){
  entries.forEach(function(entry,i){
    if(entry.isIntersecting){
      setTimeout(function(){entry.target.classList.add('visible');},i*80);
    }
  });
},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(function(el){observer.observe(el);});
</script>
</body>
</html>`;

fs.writeFileSync('./aboutus.html', htmlContent, 'utf8');
fs.writeFileSync('./indexabout.html', htmlContent, 'utf8');
console.log('Finished updating both files successfully!');
