const fs = require('fs');

let html = fs.readFileSync('indexreact1.html', 'utf8');

const newServiceCardsBlock = `  <!-- CARD 01 — Custom React Native App Development -->
  <div class="service-card reveal" id="svc-card-1">
    <div class="card-text">
      <div class="card-num">01</div>
      <h2 class="card-title">Custom React Native App Development</h2><br>
      <p class="card-desc">Webspide provides custom React Native app development for businesses that need consistent Android and iOS applications built around specific users, workflows, and commercial goals. We begin by understanding your audience, required features, data, integrations, security expectations, and growth plans. This discovery helps us define a practical product structure instead of forcing your requirements into a generic application model.</p>
      <div class="card-desc-extra" data-extra>
        <p>Our React Native developers use JavaScript or TypeScript, reusable components, native modules, secure APIs, databases, notifications, payments, maps, analytics, and other suitable services to build dependable mobile products. We focus on responsive interfaces, clean code, accessibility, performance, and maintainability while adapting platform-specific behaviour where Android and iOS users expect different interactions.</p><br>
        <p>From product planning and UI/UX design through development, testing, deployment, and support, our React Native app development services cover the complete delivery process. The finished application is designed to accommodate new users, features, integrations, markets, and transaction volumes as your business grows. Documentation and release guidance also support internal teams with administration, reporting, customer service, and future product planning. This structured approach supports predictable releases and responsible long-term application ownership.</p>
      </div>
      <br>
      <div class="card-btns">
        <a href="#contact" class="svc-btn-primary">Get Your Custom React Native App</a>
        <button type="button" class="svc-btn-link" data-readmore>Read More<svg class="rm-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></button>
      </div>
    </div>
    <div class="card-visual">
      <div class="illus-wrap float-anim-d" style="max-width:340px; position:relative;">
        <img src="1.webp" alt="Custom React Native App Development" style="width:100%;height:auto;display:block;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);">
      </div>
    </div>
  </div>

  <!-- CARD 02 — React Native UI/UX Design & Prototyping -->
  <div class="service-card reverse reveal" id="svc-card-2">
    <div class="card-text">
      <div class="card-num">02</div>
      <h2 class="card-title">React Native UI/UX Design<br><span>&amp; Prototyping</span></h2><br>
      <p class="card-desc">Successful cross-platform applications require clear journeys, familiar interactions, and interfaces suited to both Android and iOS. Webspide combines user research, information architecture, wireframing, prototyping, and visual design to create experiences aligned with your audience and business goals. We consider platform conventions, accessibility, content priorities, screen sizes, and user expectations before defining important workflows.</p>
      <div class="card-desc-extra" data-extra>
        <p>Our designers create low-fidelity wireframes, interactive prototypes, responsive layouts, reusable components, typography, colours, icons, and motion patterns. Prototypes help stakeholders understand how the application will behave before development begins. Feedback can be incorporated early, reducing uncertainty, unnecessary revisions, and implementation risks while preserving a consistent brand experience across supported mobile platforms.</p><br>
        <p>Once the design direction is approved, we prepare developer-ready screens, component states, specifications, and interaction guidance. The completed React Native UI/UX supports smooth onboarding, confident task completion, stronger engagement, and platform-appropriate behaviour. We also plan empty states, errors, permissions, notifications, accessibility settings, and future features so the design remains practical as the product evolves and new releases are introduced. Clear design documentation helps developers reproduce approved interactions accurately and maintain consistency during future feature updates.</p>
      </div>
      <br>
      <div class="card-btns">
        <a href="#contact" class="svc-btn-primary">Enhance Your App UI/UX</a>
        <button type="button" class="svc-btn-link" data-readmore>Read More<svg class="rm-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></button>
      </div>
    </div>
    <div class="card-visual">
      <div class="illus-wrap float-anim-d" style="max-width:340px; position:relative;">
        <img src="custom-web-development-front-end-services.webp" alt="React Native UI/UX Design & Prototyping" style="width:100%;height:auto;display:block;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);">
      </div>
    </div>
  </div>

  <!-- CARD 03 — React Native for Web & Cross-Platform Apps -->
  <div class="service-card reveal" id="svc-card-3">
    <div class="card-text">
      <div class="card-num">03</div>
      <h2 class="card-title">React Native for Web<br><span>&amp; Cross-Platform Apps</span></h2><br>
      <p class="card-desc">Webspide uses React Native technologies to help businesses extend suitable product experiences across Android, iOS, and selected web environments. We evaluate your users, workflows, browser requirements, device capabilities, deployment needs, and existing systems before recommending a shared approach. This ensures platform expansion supports genuine operational and commercial objectives rather than creating unnecessary technical complexity.</p>
      <div class="card-desc-extra" data-extra>
        <p>Our developers reuse components and business logic where practical while adapting navigation, inputs, layouts, permissions, APIs, and platform behaviour where required. We focus on responsive design, performance, accessibility, security, and maintainability across supported environments. Platform-specific testing ensures that shared development does not compromise important user expectations or device capabilities.</p><br>
        <p>Cross-platform React Native development can support customer applications, booking systems, commerce platforms, dashboards, communication tools, and internal business products. Our team manages architecture, design, engineering, integration, testing, deployment, and documentation. The completed solution provides a coordinated product foundation while remaining flexible enough for future platform-specific improvements, additional integrations, new users, and changing business requirements. Deployment guidance also explains platform differences, update responsibilities, and practical support requirements for long-term product management.</p>
      </div>
      <br>
      <div class="card-btns">
        <a href="#contact" class="svc-btn-primary">Build Cross-Platform Applications</a>
        <button type="button" class="svc-btn-link" data-readmore>Read More<svg class="rm-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></button>
      </div>
    </div>
    <div class="card-visual">
      <div class="illus-wrap float-anim" style="max-width:340px; position:relative;">
        <img src="custom-web-development-back-end-services.webp" alt="React Native for Web & Cross-Platform Apps" style="width:100%;height:auto;display:block;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);">
      </div>
    </div>
  </div>

  <!-- CARD 04 — React Native App Migration & Upgrade -->
  <div class="service-card reverse reveal" id="svc-card-4">
    <div class="card-text">
      <div class="card-num">04</div>
      <h2 class="card-title">React Native App Migration<br><span>&amp; Upgrade</span></h2><br>
      <p class="card-desc">Webspide helps businesses migrate native, hybrid, or outdated mobile applications to React Native and modernize existing React Native codebases. We begin with a technical assessment covering architecture, dependencies, integrations, data, security, performance, platform requirements, and current user journeys. This review identifies risks and defines a controlled migration or upgrade strategy for Android and iOS.</p>
      <div class="card-desc-extra" data-extra>
        <p>Our work can include rebuilding interfaces, replacing unsupported libraries, improving architecture, updating React Native versions, modernizing APIs, strengthening security, and optimizing performance. We preserve important functionality and data while introducing changes in manageable phases. Regression testing across supported devices helps reduce disruption for existing users and protects essential business workflows throughout the transition.</p><br>
        <p>Migration and upgrade services can improve maintainability, consistency, speed, and readiness for future features. Before release, we complete testing, deployment preparation, rollback planning, and documentation. The modernized application provides a stronger technical foundation for continued support, new integrations, operating-system updates, and product growth without unnecessarily rebuilding reliable business logic that still serves users effectively. Release notes, user communication planning, and post-launch monitoring help teams manage significant changes with greater confidence.</p>
      </div>
      <br>
      <div class="card-btns">
        <a href="#contact" class="svc-btn-primary">Migrate Your Application</a>
        <button type="button" class="svc-btn-link" data-readmore>Read More<svg class="rm-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></button>
      </div>
    </div>
    <div class="card-visual">
      <div class="illus-wrap float-anim-d" style="max-width:340px; position:relative;">
        <img src="custom-cms-development-services.webp-artguru.webp" alt="React Native App Migration & Upgrade" style="width:100%;height:auto;display:block;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);">
      </div>
    </div>
  </div>

  <!-- CARD 05 — React Native App Testing & Maintenance -->
  <div class="service-card reveal" id="svc-card-5">
    <div class="card-text">
      <div class="card-num">05</div>
      <h2 class="card-title">React Native App Testing<br><span>&amp; Maintenance</span></h2><br>
      <p class="card-desc">Webspide provides React Native app testing and maintenance to keep Android and iOS applications stable, secure, and compatible throughout their lifecycle. We review supported devices, operating-system versions, user roles, integrations, critical workflows, and release priorities to create a practical quality plan. This ensures important scenarios receive appropriate coverage before and after launch.</p>
      <div class="card-desc-extra" data-extra>
        <p>Our testing can include functional, usability, compatibility, API, security, performance, and regression checks. We combine manual and automated methods where suitable, document defects clearly, and retest completed fixes. Maintenance can include dependency updates, crash resolution, platform compatibility work, performance tuning, security improvements, and adjustments for changing third-party services.</p><br>
        <p>After release, ongoing monitoring and planned updates help the application respond to operating-system changes, framework releases, user feedback, and evolving business needs. Clear reports keep stakeholders informed about completed work, identified risks, and recommended priorities. Long-term support provides continuity for feature enhancements, integration changes, technical modernization, and future releases without repeatedly rebuilding project knowledge. Support priorities, release schedules, response procedures, and ownership responsibilities are documented to create a more dependable maintenance partnership.</p>
      </div>
      <br>
      <div class="card-btns">
        <a href="#contact" class="svc-btn-primary">Get Reliable App Maintenance</a>
        <button type="button" class="svc-btn-link" data-readmore>Read More<svg class="rm-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></button>
      </div>
    </div>
    <div class="card-visual">
      <div class="illus-wrap float-anim" style="max-width:340px; position:relative;">
        <img src="custom-web-development-ecommerce-platform.webp" alt="React Native App Testing & Maintenance" style="width:100%;height:auto;display:block;border-radius:0;box-shadow:none;mix-blend-mode:multiply;filter:contrast(1.05) saturate(1.1);">
      </div>
    </div>
  </div>`;

// Replace from <!-- CARD 01 to before WHY CHOOSE US comment or end of card 5
const card1Start = html.indexOf('<!-- CARD 01');
const whyChooseCommentStart = html.indexOf('<!-- WHY CHOOSE');

if (card1Start !== -1 && whyChooseCommentStart !== -1) {
  html = html.slice(0, card1Start) + newServiceCardsBlock + '\n\n' + html.slice(whyChooseCommentStart);
  fs.writeFileSync('indexreact1.html', html, 'utf8');
  console.log('Successfully replaced all 5 service cards in indexreact1.html!');
} else {
  console.error('Failed to locate card markers. card1Start:', card1Start, 'whyChooseCommentStart:', whyChooseCommentStart);
}
