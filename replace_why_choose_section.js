const fs = require('fs');

let html = fs.readFileSync('indexreact1.html', 'utf8');

const newWhyChooseBlock = `<!-- WHY CHOOSE US -->
<div class="sections section-soft-gradient">
  <div class="left">
    <br>
    <div class="villan-badge">Why Choose Webspide</div>
    <div class="left-title gradient-heading">Why Choose Webspide for<br><span>React Native App Development Services?</span></div>
    <div class="title-underline"></div>
    <p class="left-desc">Webspide combines React Native strategy, user-focused design, cross-platform engineering, and transparent project management to create dependable mobile applications for global businesses. Our React Native app development services prioritize quality, security, performance, communication, scalability, and long-term value. From initial planning through deployment and support, every stage is managed around your users, operations, technical needs, brand, and growth objectives.</p>
    <div class="illustration">
      <div class="gear-left">⚙</div>
      <div class="gear-sm">⚙</div>
      <div class="code-tag">&lt;/&gt;</div>
      <div class="laptop">
        <div class="laptop-screen">
          <div class="screen-code"><span>function</span> <em>initReactNativeApp</em>() {<br>&nbsp;&nbsp;<span>const</span> app = <em>createReactNativeApp</em>();<br>&nbsp;&nbsp;<em>runApp</em>(app);<br>&nbsp;&nbsp;<span>return</span> app;<br>}</div>
        </div>
        <div class="laptop-base"></div>
        <div class="laptop-bottom"></div>
      </div>
    </div>
  </div>
  <div class="right">
    <div class="process-timeline">
      <div class="feature-row">
        <div class="num">01</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Skilled React Native Developers</div>
          <p class="feature-desc">Our developers work with React Native, JavaScript, TypeScript, native modules, APIs, databases, cloud services, testing tools, and modern mobile architecture. This combined expertise helps us solve design, technical, and operational requirements as one connected product. Clients receive maintainable applications built for dependable performance, efficient integration, consistent platform behaviour, and future expansion across users, features, devices, and markets.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">02</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Agile &amp; Transparent Development</div>
          <p class="feature-desc">We divide projects into manageable phases with clear priorities, milestones, reviews, and approval points. Regular communication gives stakeholders visibility into progress, decisions, risks, and upcoming work. This agile approach supports practical feedback, controlled changes, and dependable delivery while keeping the React Native application aligned with business requirements, user expectations, budgets, and agreed outcomes throughout development.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">03</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.58 7.58"/><circle cx="11" cy="11" r="2"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">User-Centric &amp; Engaging UI/UX</div>
          <p class="feature-desc">Our designers create intuitive, accessible, and brand-aligned React Native experiences using clear journeys, reusable components, smooth interactions, and platform-aware layouts. Research, wireframing, prototyping, and stakeholder reviews guide important decisions. The resulting interface helps users understand features, complete tasks confidently, and enjoy consistent experiences across Android and iOS while supporting stronger engagement, satisfaction, and retention across diverse customer journeys.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">04</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Scalable &amp; Future-Ready Applications</div>
          <p class="feature-desc">We plan React Native applications around modular architecture, reusable components, secure integrations, and maintainable code. This foundation helps the product accommodate increasing users, transactions, features, services, and markets without unnecessary redevelopment. Platform-aware engineering and structured documentation also make future updates, migrations, team collaboration, and operating-system compatibility easier to manage as business requirements evolve across changing operational environments.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">05</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Robust Security &amp; Quality Assurance</div>
          <p class="feature-desc">Security and quality are considered during architecture, coding, integration, testing, deployment, and maintenance. We implement suitable authentication, encryption, secure storage, validation, permissions, and API protections while testing critical workflows across representative devices. This structured approach helps protect users, business information, and transactions while supporting reliable performance, compliance awareness, and responsible application growth across supported mobile platforms.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="num">06</div>
        <div class="connector"><div class="timeline-dot"></div><div class="h-line"></div></div>
        <div class="icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
        <div class="feature-content">
          <div class="feature-title">Dedicated Post-Launch Support</div>
          <p class="feature-desc">Our involvement can continue after launch through crash monitoring, bug fixes, framework updates, security improvements, performance tuning, and feature enhancements. We help clients keep React Native applications dependable as platforms, libraries, integrations, and user expectations change. Long-term support provides continuity, faster issue resolution, and a knowledgeable technical partner for future releases, modernization, scaling, and product growth.</p>
        </div>
      </div>
    </div>
  </div>
</div>`;

const startIdx = html.indexOf('<!-- WHY CHOOSE US -->');
const endIdx = html.indexOf('<section class="how-we-work"');

if (startIdx !== -1 && endIdx !== -1) {
  html = html.slice(0, startIdx) + newWhyChooseBlock + '\n\n' + html.slice(endIdx);
  fs.writeFileSync('indexreact1.html', html, 'utf8');
  console.log('Successfully replaced Why Choose Us section in indexreact1.html!');
} else {
  console.error('Failed to locate Why Choose Us block boundaries. startIdx:', startIdx, 'endIdx:', endIdx);
}
