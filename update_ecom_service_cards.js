const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'indexecom1.html');
let html = fs.readFileSync(filePath, 'utf8');

// ── HERO H1 fix (BACKEND still there) ──────────────────────────────────────
html = html.replace(
  '<span class="grad">BACKEND</span>\n      <span class="grad">DEVELOPMENT SERVICES</span>\n      <span class="outline">Scalable Applications</span>',
  '<span class="grad">eCOMMERCE</span>\n      <span class="grad">WEBSITE DEVELOPMENT</span>\n      <span class="outline">Services</span>'
);
// Also handle \r\n variant
html = html.replace(
  '<span class="grad">BACKEND</span>\r\n      <span class="grad">DEVELOPMENT SERVICES</span>\r\n      <span class="outline">Scalable Applications</span>',
  '<span class="grad">eCOMMERCE</span>\r\n      <span class="grad">WEBSITE DEVELOPMENT</span>\r\n      <span class="outline">Services</span>'
);

// ── SERVICE SECTION NAV LABEL ───────────────────────────────────────────────
html = html.replace(/01\. Custom Backend Development/, '01. Custom eCommerce Website Development');

// ── SERVICES SECTION SUBTITLE ───────────────────────────────────────────────
html = html.replace(
  'Enterprise-grade backend solutions engineered for security, scalability, and performance.',
  'Secure, scalable, and conversion-focused eCommerce solutions for growing businesses worldwide.'
);

// ──────────────────────────────────────────────────────────────────────────────
// REPLACE ALL 10 SERVICE CARDS entirely (title + desc paragraphs + CTA)
// We'll do targeted substring replacements for each card's inner content
// ──────────────────────────────────────────────────────────────────────────────

// CARD 01 — Custom eCommerce Website Development
html = html.replace(
  '<h2 class="card-title">Custom Backend<br><span>Development</span></h2><br>',
  '<h2 class="card-title">Custom eCommerce<br><span>Website Development</span></h2><br>'
);
html = html.replace(
  'Webspide provides custom backend development services for businesses that need reliable server-side systems built around their specific operations. We analyse application requirements, user roles, workflows, data volumes, integrations, and expected growth before defining the architecture. This planning helps us create a backend that supports stable performance, secure processing, and smooth communication with web or mobile interfaces.',
  'Webspide develops custom eCommerce websites for businesses that need more flexibility than standard templates provide. We begin by understanding your products, customers, pricing, fulfilment model, target markets, and operational workflows. This helps us plan a storefront that supports clear product discovery, smooth purchasing, practical administration, and future expansion without unnecessary technical limitations.'
);
html = html.replace(
  'Our developers build business logic, databases, authentication, administrative controls, notifications, reporting functions, and background processes using technologies suited to the project. We focus on clean architecture, reusable components, validation, error handling, and documentation. These practices make the system easier to maintain while allowing new modules, users, and integrations to be added as business requirements develop.',
  'Our team creates responsive interfaces, secure back-end systems, product catalogues, customer accounts, discount rules, shipping logic, and reporting tools around your requirements. We also integrate payment gateways, CRM platforms, ERP systems, analytics, marketing tools, and logistics providers where needed. Every feature is developed to support usability, performance, security, and consistent data management.'
);
html = html.replace(
  'From backend application development and API creation to cloud deployment and ongoing support, we manage the complete delivery process. Every solution is tested for functionality, performance, security, and compatibility before release. The result is a scalable, maintainable, and high-performing backend foundation that helps your digital platform operate efficiently and supports long-term business growth across international markets. Clear technical documentation supports maintenance, onboarding, troubleshooting, and planned application improvements.',
  'From discovery and UI/UX planning to development, testing, deployment, and support, our eCommerce website development services cover the complete delivery process. The finished platform is designed to simplify store management, improve customer journeys, support B2B or B2C sales, and accommodate additional products, locations, languages, currencies, and integrations as your business grows internationally. Clear documentation and administrator guidance also help internal teams manage daily updates, reporting, promotions, and future enhancements confidently.'
);
html = html.replace(
  '<a href="#contact" class="svc-btn-primary">Build Your Custom Backend →</a>',
  '<a href="#contact" class="svc-btn-primary">Request Custom Development →</a>'
);

// CARD 02 — Shopify, WooCommerce & Magento Development
html = html.replace(
  '<h2 class="card-title">API Development &amp;<br><span>Integration</span></h2><br>',
  '<h2 class="card-title">Shopify, WooCommerce<br><span>&amp; Magento Development</span></h2><br>'
);
html = html.replace(
  'Webspide develops secure, scalable APIs that allow applications, databases, platforms, and third-party services to exchange information efficiently. We begin by understanding the systems involved, required data, access permissions, transaction frequency, and business purpose. This helps us design API structures that are practical, maintainable, and aligned with your existing technology environment.',
  'Webspide builds and improves online stores using Shopify, WooCommerce, and Magento according to each business model, catalogue size, internal capability, and growth plan. We help clients select an appropriate platform, configure the core store, and create a consistent shopping experience aligned with their brand, customers, products, and operational requirements.'
);
html = html.replace(
  'Our backend API development services include RESTful APIs, GraphQL implementations, webhook connections, and selected legacy integrations where required. We connect payment gateways, CRMs, ERPs, shipping services, cloud platforms, authentication providers, communication tools, and analytics systems. Secure authentication, input validation, error handling, rate controls, logging, and clear documentation support dependable communication between connected services.',
  'Our services include theme development, storefront customization, plugin or extension integration, product configuration, checkout setup, payment gateways, shipping rules, tax settings, and administrative workflows. We also address responsive behaviour, search structure, page speed, security, and platform-specific best practices. Existing stores can be redesigned, migrated, upgraded, or extended with new features.'
);
html = html.replace(
  'Whether you need a new API, an integration with an external provider, or improvements to existing endpoints, our team manages development, testing, deployment, and monitoring. We focus on data consistency, performance, security, and future scalability. The completed integration reduces repetitive manual work, improves automation, and creates a connected digital ecosystem for employees, customers, partners, and operational teams. Detailed API documentation also supports future maintenance, partner onboarding, testing, and integration upgrades.',
  'Whether you need Shopify for streamlined management, WooCommerce for WordPress flexibility, or Magento for complex commerce operations, our team provides practical guidance and dependable implementation. We manage planning, development, testing, launch, and ongoing enhancements so your store remains stable, easy to operate, and prepared for changing customer expectations, sales channels, and international market requirements.'
);
html = html.replace(
  '<a href="#contact" class="svc-btn-primary">Connect Your Applications →</a>',
  '<a href="#contact" class="svc-btn-primary">Build Your Online Store →</a>'
);

// CARD 03 — Headless eCommerce Development
html = html.replace(
  '<h2 class="card-title">Database Management &amp;<br><span>Optimization</span></h2><br>',
  '<h2 class="card-title">Headless eCommerce<br><span>Development</span></h2><br>'
);
html = html.replace(
  'Webspide provides database management and optimization services for applications that require accurate, secure, and quickly accessible information. We assess data relationships, transaction patterns, reporting needs, expected growth, and recovery requirements before designing or improving the database structure. A carefully planned data layer helps applications remain responsive and dependable as usage increases.',
  'Headless eCommerce separates the customer-facing storefront from the commerce back end, giving businesses greater flexibility over design, performance, and digital channels. Webspide plans headless solutions for brands that need distinctive experiences, faster interface development, or consistent commerce capabilities across websites, mobile experiences, kiosks, marketplaces, and other customer touchpoints.'
);
html = html.replace(
  'Our team works with relational and NoSQL technologies, selecting the appropriate option for each project. Services can include schema design, indexing, query optimization, caching, data validation, access controls, backup planning, replication, and migration. We also review slow queries, inefficient structures, and excessive server usage to identify practical performance improvements without compromising data integrity or application functionality.',
  'Our developers connect modern front-end frameworks with commerce platforms, headless CMS tools, product information systems, payment services, and business applications through secure APIs. We design content delivery, product data, customer sessions, search, checkout, and order workflows carefully so each component works together reliably. Performance, caching, security, and maintainability guide the architecture.'
);
html = html.replace(
  'Whether you need a new database, performance tuning, cloud migration, or support for a growing backend application, we provide structured solutions and documentation. Security, consistency, availability, and maintainability guide every decision. The result is an optimized database environment that supports faster responses, reliable reporting, smooth transactions, and scalable backend development solutions for international business operations. Documented structures and maintenance guidance also support safer updates, troubleshooting, and future application development.',
  'Headless development is best suited to projects with clear technical and commercial reasons for decoupling systems. We evaluate those needs before recommending the approach and provide implementation, testing, deployment, and documentation. The completed platform supports faster experimentation, reusable commerce services, omnichannel delivery, and future interface changes without requiring the entire commerce system to be rebuilt.'
);
html = html.replace(
  '<a href="#contact" class="svc-btn-primary">Optimize Your Database →</a>',
  '<a href="#contact" class="svc-btn-primary">Explore Headless Solutions →</a>'
);

// CARD 04 — Marketplace Development
html = html.replace(
  '<h2 class="card-title">Authentication &amp;<br><span>Security Development</span></h2><br>',
  '<h2 class="card-title">Marketplace<br><span>Development</span></h2><br>'
);
html = html.replace(
  'Webspide develops secure authentication and backend protection mechanisms for applications handling users, transactions, business information, and connected services. We review access requirements, user roles, data sensitivity, compliance expectations, and common threat scenarios before defining the security approach. This allows protective controls to be integrated into the architecture instead of added only after development.',
  'Webspide develops multi-vendor marketplace platforms that connect buyers with independent sellers, service providers, distributors, or business partners. We plan each marketplace around its commercial model, target users, vendor responsibilities, commission rules, product or service structure, payment flow, fulfilment process, and administrative oversight. This creates a practical foundation for controlled growth.'
);
html = html.replace(
  'Our services can include OAuth, JSON Web Tokens, multi-factor authentication, single sign-on, role-based access control, session management, encryption, secure password handling, and API authorization. We also apply input validation, rate limiting, audit logging, secure configuration, and responsible coding practices to reduce exposure to common vulnerabilities and unauthorized access attempts.',
  'Marketplace features can include vendor registration, approval workflows, storefronts, catalogue management, commissions, subscriptions, order allocation, payouts, ratings, disputes, messaging, reporting, and role-based dashboards. We also integrate payment gateways, tax services, shipping providers, CRM systems, analytics, and identity verification tools where required. Security and data separation are considered throughout development.'
);
html = html.replace(
  'Security is verified through code review, functional testing, vulnerability assessment, and configuration checks appropriate to the project. We also support security patches, monitoring, and ongoing improvements after launch. The result is a dependable backend development solution that protects users and business data while maintaining practical access, stable performance, and smooth integration across web, mobile, cloud, and enterprise applications. Clear security documentation also supports internal governance, audits, maintenance, and responsible future enhancements.',
  'Our eCommerce web development process covers discovery, UX planning, architecture, custom development, integration, testing, deployment, and support. We create responsive experiences for buyers, sellers, and administrators while keeping routine management clear and efficient. The finished marketplace is designed to support additional vendors, categories, regions, users, and transaction volumes as the platform develops.'
);
html = html.replace(
  '<a href="#contact" class="svc-btn-primary">Secure Your Backend System →</a>',
  '<a href="#contact" class="svc-btn-primary">Launch Your Marketplace →</a>'
);

// CARD 05 — Secure Payment Gateway Integration
html = html.replace(
  '<h2 class="card-title">Cloud-Based &amp;<br><span>Serverless Development</span></h2><br>',
  '<h2 class="card-title">Secure Payment<br><span>Gateway Integration</span></h2><br>'
);
html = html.replace(
  'Webspide builds cloud-based and serverless backend solutions for businesses that need flexible infrastructure, reliable availability, and efficient scaling. We evaluate application workloads, traffic patterns, storage requirements, security considerations, and operational budgets before recommending an appropriate cloud architecture. This ensures the selected environment supports both current performance and future business growth.',
  'Webspide integrates secure payment gateways that help customers complete purchases confidently and allow businesses to manage transactions accurately. We review your markets, currencies, customer preferences, order model, refund process, subscription requirements, and compliance responsibilities before selecting and configuring suitable providers. This planning helps reduce payment friction and operational confusion.'
);
html = html.replace(
  'Our backend development services cover cloud application deployment, managed databases, object storage, serverless functions, API gateways, event-driven processing, monitoring, backups, and disaster recovery. We work with platforms such as AWS, Microsoft Azure, and Google Cloud, using suitable managed services to reduce unnecessary infrastructure administration. Auto-scaling and distributed resources help applications respond effectively to changing demand.',
  'Our integration services can support cards, digital wallets, bank transfers, regional payment methods, recurring payments, multi-currency transactions, and selected buy-now-pay-later options. We implement secure checkout communication, transaction validation, webhook handling, status synchronization, refunds, failure responses, and administrative reporting. Payment data is handled through responsible architecture and provider-recommended security practices.'
);
html = html.replace(
  'Whether you are launching a cloud-native platform, modernising an existing backend, or moving from traditional servers, our team manages planning, configuration, migration, testing, and deployment. Security permissions, cost visibility, performance, and reliability are considered throughout the process. The completed solution provides a scalable cloud foundation that supports faster releases, dependable operations, and easier expansion across users, regions, and services. Documentation also helps teams understand configurations, costs, monitoring, and future changes.',
  'Before launch, we test successful payments, declined transactions, cancellations, duplicate attempts, refunds, currency behaviour, and order updates across supported devices. We also verify that customers receive clear confirmations and that internal teams receive reliable records. The result is a smoother payment experience that supports trust, conversion, accurate accounting, and international eCommerce operations.'
);
html = html.replace(
  '<a href="#contact" class="svc-btn-primary">Build Your Cloud Backend →</a>',
  '<a href="#contact" class="svc-btn-primary">Integrate Secure Payments →</a>'
);

// CARD 06 — Shopping Cart & Checkout Optimization
html = html.replace(
  '<h2 class="card-title">Real-Time Data Processing &amp;<br><span>WebSockets</span></h2><br>',
  '<h2 class="card-title">Shopping Cart &amp;<br><span>Checkout Optimization</span></h2><br>'
);
html = html.replace(
  'Webspide creates real-time backend solutions for applications that require immediate updates, live communication, and continuous data exchange. We identify expected user volumes, event frequency, latency requirements, message types, and reliability needs before selecting the architecture. This planning supports responsive functionality without placing unnecessary strain on servers, databases, or connected systems.',
  'A complicated cart or checkout can cause customers to abandon purchases even when they are ready to buy. Webspide reviews the complete journey from product selection to payment confirmation, identifying unnecessary steps, unclear costs, usability issues, technical errors, and mobile barriers. We then improve the experience around customer expectations and business requirements.'
);
html = html.replace(
  'Our backend web development services use WebSockets, event-driven processing, message queues, streaming tools, and caching technologies where appropriate. We build features for live chat, notifications, collaboration, tracking, dashboards, bidding, monitoring, and other time-sensitive experiences. Authentication, encrypted connections, event validation, reconnection handling, and controlled message delivery help maintain security and stability.',
  'Optimization may include guest checkout, simplified forms, address assistance, clear validation, saved carts, shipping estimates, transparent taxes, coupon handling, multiple payment choices, and responsive layouts. We also improve error messages, progress indicators, product summaries, trust information, and account options. Changes are designed to reduce friction without removing essential security or operational controls.'
);
html = html.replace(
  'We test real-time functions under realistic loads to evaluate response times, concurrent connections, failure handling, and data consistency. Monitoring and logging are configured to identify issues after deployment. The completed solution enables fast, dependable interactions across web and mobile applications while remaining scalable enough to support additional users, events, locations, and real-time business requirements. Clear documentation supports future scaling, monitoring, troubleshooting, service integration, and evolving user expectations.',
  'Our team uses analytics, testing, and observed behaviour to prioritize improvements that can influence completion rates and average order value. We can also implement abandoned-cart recovery, relevant cross-selling, and checkout performance enhancements. The finished flow helps customers understand each step, resolve issues quickly, and complete purchases confidently across desktop and mobile devices.'
);
html = html.replace(
  '<a href="#contact" class="svc-btn-primary">Build a Real-Time Application →</a>',
  '<a href="#contact" class="svc-btn-primary">Optimize Your Checkout →</a>'
);

// CARD 07 — Inventory & Order Management Systems
html = html.replace(
  '<h2 class="card-title">Microservices Architecture<br><span>Development</span></h2><br>',
  '<h2 class="card-title">Inventory &amp; Order<br><span>Management Systems</span></h2><br>'
);
html = html.replace(
  'Webspide designs microservices architectures for businesses that need modular, independently deployable, and scalable backend systems. We analyse application domains, team responsibilities, integrations, data ownership, traffic patterns, and operational complexity before dividing functionality into appropriate services. This prevents unnecessary fragmentation while creating a structure that supports maintainability and controlled expansion.',
  'Webspide builds inventory and order management capabilities that help eCommerce businesses maintain accurate stock information and fulfil purchases efficiently. We map product locations, sales channels, suppliers, order stages, returns, and internal responsibilities before designing the workflow. This creates a system that reflects how your business actually receives, processes, and dispatches orders.'
);
html = html.replace(
  'Each microservice is designed around a clear business capability and communicates through secure APIs, messaging, or event-driven workflows. We can implement containerization, service discovery, API gateways, centralized logging, monitoring, and automated deployment using suitable cloud and DevOps technologies. Fault isolation and independent scaling help critical functions remain stable when demand or issues affect another service.',
  'Features can include real-time stock tracking, low-stock alerts, purchase records, multi-location inventory, reservations, backorders, order routing, fulfilment status, returns, cancellations, and operational reporting. We also connect stores with ERP platforms, warehouse systems, shipping carriers, marketplaces, and accounting tools. Automated synchronization reduces duplicate entry and helps prevent overselling or inconsistent records.'
);
html = html.replace(
  'Our backend development company supports microservices planning, development, migration, testing, deployment, and documentation. We also help modernise selected parts of monolithic applications through a staged approach. The result is a resilient backend environment that enables faster feature delivery, flexible scaling, easier maintenance, and improved collaboration across development teams without compromising security, data consistency, or operational visibility. Documented service boundaries support onboarding, governance, troubleshooting, maintenance, and future architectural decisions.',
  'Our eCommerce development team focuses on data accuracy, practical administration, permissions, exception handling, and scalable processing. The system is tested across common and unusual order scenarios before launch. The completed solution gives teams clearer visibility over inventory and fulfilment, supports faster customer service, and provides a stronger operational foundation for expanding products, warehouses, and sales channels.'
);
html = html.replace(
  '<a href="#contact" class="svc-btn-primary">Adopt a Microservices Architecture →</a>',
  '<a href="#contact" class="svc-btn-primary">Improve Inventory Management →</a>'
);

// CARD 08 — Third-Party Tools & API Integration
html = html.replace(
  '<h2 class="card-title">CMS &amp; E-Commerce<br><span>Backend Development</span></h2><br>',
  '<h2 class="card-title">Third-Party Tools<br><span>&amp; API Integration</span></h2><br>'
);
html = html.replace(
  'Webspide develops secure backend systems for content management platforms and eCommerce websites that require dependable administration, transactions, and data control. We plan the backend around content structures, product catalogues, customer journeys, order processes, permissions, integrations, and reporting needs. This creates an operational foundation tailored to how your organisation manages content or online sales.',
  'Modern eCommerce platforms often depend on multiple business tools working together. Webspide integrates stores with CRM systems, ERP platforms, payment providers, shipping services, accounting software, marketing automation, customer support tools, analytics, marketplaces, and other approved applications. We first define the required data, direction, timing, permissions, and business outcome for each connection.'
);
html = html.replace(
  'For CMS projects, we build content types, publishing workflows, media management, user roles, multilingual controls, and SEO fields. For eCommerce platforms, we develop product, customer, inventory, pricing, promotion, payment, shipping, tax, and order-management functions. APIs can connect CRM, ERP, accounting, marketing, fulfilment, and analytics systems to reduce manual work and maintain consistent information.',
  'Our developers work with existing APIs, webhooks, middleware, and custom integration layers to synchronize products, customers, orders, inventory, payments, tracking details, and other records. We implement authentication, validation, mapping, logging, retries, and error handling to improve reliability. Where an API has limitations, we explain the constraints and recommend practical alternatives.'
);
html = html.replace(
  'Our backend web development services include database architecture, security, performance optimization, integration, testing, deployment, and support. Administrative interfaces are structured for practical daily use while protecting sensitive controls and customer data. The finished backend supports efficient content publishing or commerce operations, stable transactions, international growth, and future enhancements as products, markets, users, and business requirements expand. Documentation and administrator guidance also support training, maintenance, reporting, and future operational improvements.',
  'Every integration is tested for data accuracy, security, failure behaviour, and performance before release. Documentation is prepared to support maintenance and future changes. The completed connections reduce repetitive manual tasks, improve visibility across departments, and help your eCommerce operation deliver more consistent customer experiences while supporting additional systems and transaction volumes over time.'
);
html = html.replace(
  '<a href="#contact" class="svc-btn-primary">Power Your CMS or Online Store →</a>',
  '<a href="#contact" class="svc-btn-primary">Connect Your eCommerce Systems →</a>'
);

// CARD 09 — Progressive Web Apps for eCommerce
html = html.replace(
  '<h2 class="card-title">AI &amp; Machine Learning<br><span>Backend Solutions</span></h2><br>',
  '<h2 class="card-title">Progressive Web Apps<br><span>for eCommerce</span></h2><br>'
);
html = html.replace(
  'Webspide develops backend systems that integrate artificial intelligence and machine learning capabilities into practical business applications. We begin by identifying the required outcome, available data, processing needs, accuracy expectations, user interactions, and integration points. This ensures AI functionality addresses a clear operational or customer requirement rather than adding unnecessary technical complexity.',
  'Webspide develops progressive web apps for eCommerce businesses seeking fast, mobile-first shopping experiences delivered through the browser. PWAs can combine responsive websites with app-like capabilities, helping customers browse products and interact with the store across devices without requiring a traditional app-store download. We assess whether the approach suits your audience and goals.'
);
html = html.replace(
  'Our backend development services can support recommendation engines, intelligent search, chatbots, document processing, predictive analytics, classification, image analysis, and workflow automation. We connect trained models or approved AI services through secure APIs and build the surrounding data pipelines, business logic, access controls, queues, and monitoring required for dependable application use.',
  'Depending on project requirements, features may include home-screen installation, offline or low-connectivity access, push notifications, background updates, cached content, fast repeat visits, and responsive checkout journeys. We connect the PWA with commerce platforms, payment gateways, customer accounts, product data, and order systems through secure APIs. Performance and browser compatibility remain central considerations.'
);
html = html.replace(
  'Performance, privacy, scalability, and output handling are considered throughout development. We test integrations, manage errors, record relevant system activity, and design fallbacks where appropriate. Whether AI is added to an existing platform or included in a new backend application, the completed solution helps automate tasks, improve decision-making, personalize experiences, and extract practical value from data while remaining maintainable and aligned with business objectives. Clear documentation supports model updates, monitoring, maintenance, governance, and future application enhancements.',
  'Our process covers interface planning, architecture, development, testing, deployment, and ongoing optimization. The finished progressive web app is designed to improve mobile usability, loading efficiency, engagement, and customer retention while maintaining a single web-based delivery model. It can also support future features and integrations as your eCommerce operation expands across products, markets, and audiences.'
);
html = html.replace(
  '<a href="#contact" class="svc-btn-primary">Integrate AI into Your Backend →</a>',
  '<a href="#contact" class="svc-btn-primary">Build Your eCommerce PWA →</a>'
);

// CARD 10 — eCommerce SEO & Performance Optimization
html = html.replace(
  '<h2 class="card-title">DevOps &amp;<br><span>Continuous Integration</span></h2><br>',
  '<h2 class="card-title">eCommerce SEO &amp;<br><span>Performance Optimization</span></h2><br>'
);
html = html.replace(
  'Webspide provides DevOps and continuous integration and delivery services that help backend teams release software more consistently and efficiently. We review the current development workflow, environments, infrastructure, testing practices, deployment risks, and monitoring requirements before designing an automation strategy. This creates a clear path from code changes to reliable production releases.',
  'Webspide improves eCommerce visibility and performance by addressing the technical and structural factors that influence search access, user experience, and conversions. We review site architecture, category and product templates, URLs, metadata, internal linking, crawlability, structured data, mobile behaviour, loading speed, and platform limitations before defining a prioritized optimization plan.'
);
html = html.replace(
  'Our services can include version-control workflows, automated builds, testing pipelines, containerization, infrastructure as code, environment configuration, deployment automation, rollback planning, logging, and monitoring. We work with suitable tools such as GitHub Actions, GitLab CI/CD, Jenkins, Docker, Kubernetes, Terraform, and cloud-native services according to project needs and operational maturity.',
  'Our work can include technical SEO corrections, schema implementation, canonical configuration, redirect planning, sitemap improvements, image optimization, caching, code reduction, database tuning, and Core Web Vitals enhancements. We also examine duplicate content, filters, pagination, and indexation risks common to large catalogues. Changes are implemented carefully to protect existing functionality and analytics.'
);
html = html.replace(
  'Security checks, code-quality controls, approvals, and environment protections can be incorporated into the pipeline. We also document processes so internal teams understand how releases are managed and issues are resolved. The result is a dependable delivery workflow that reduces repetitive manual steps, improves collaboration, limits deployment errors, and supports faster, safer updates to backend applications across development, staging, and production environments. Handover guidance supports internal adoption, governance, troubleshooting, and future pipeline improvements.',
  'Performance and SEO improvements are verified through testing, monitoring, and relevant reporting tools. We provide clear recommendations for areas requiring ongoing content or authority development. The result is a faster, more accessible eCommerce website that helps search engines understand important pages, enables customers to browse efficiently, and creates stronger conditions for organic visibility, engagement, and sales growth.'
);
html = html.replace(
  '<a href="#contact" class="svc-btn-primary">Automate Your Delivery Workflow →</a>',
  '<a href="#contact" class="svc-btn-primary">Improve SEO &amp; Store Performance →</a>'
);

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully replaced all 10 service cards with eCommerce content in indexecom1.html');
