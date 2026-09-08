/* ===== JP HOLIDAYS — Interactive JavaScript ===== */

document.addEventListener('DOMContentLoaded', () => {

  /* ----- Sticky Header ----- */
  const header = document.getElementById('header');
  const backToTop = document.querySelector('.back-to-top');
  const handleScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
    if (backToTop) backToTop.classList.toggle('visible', window.scrollY > 500);
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check

  /* ----- Mobile Navigation & Dropdowns ----- */
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  mobileToggle?.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    mainNav.classList.toggle('open');
    document.body.style.overflow = mainNav.classList.contains('open') ? 'hidden' : '';
  });

  // Mobile Dropdown Accordion Toggle
  const dropdownLinks = document.querySelectorAll('.nav-item.dropdown .dropdown-link');
  dropdownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        const parent = link.closest('.nav-item.dropdown');
        parent.classList.toggle('active-mobile');
      }
    });
  });

  // Close nav on direct link click
  mainNav?.querySelectorAll('a:not(.dropdown-link)').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      mobileToggle?.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  /* ----- Hero Slider ----- */
  const slides = document.querySelectorAll('.hero-slide');
  const heroDots = document.querySelectorAll('.hero-dot');
  const heroTexts = document.querySelectorAll('.hero-text');
  let currentSlide = 0;
  let slideInterval;

  function goToSlide(index) {
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === index);
    });
    heroDots.forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });
    heroTexts.forEach((t, i) => {
      t.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    goToSlide((currentSlide + 1) % slides.length);
  }

  function startSlider() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  heroDots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      clearInterval(slideInterval);
      goToSlide(i);
      startSlider();
    });
  });

  if (slides.length) {
    goToSlide(0);
    startSlider();
  }

  /* ----- Animated Counters ----- */
  const counters = document.querySelectorAll('.counter');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        const duration = 2000;
        const step = Math.ceil(target / (duration / 16));
        let current = 0;

        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = current.toLocaleString('en-IN') + suffix;
        }, 16);

        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => counterObserver.observe(c));

  /* ----- Testimonial Slider ----- */
  const track = document.querySelector('.testimonials-track');
  const tDots = document.querySelectorAll('.testimonial-dot');
  let currentTestimonial = 0;
  let tInterval;

  function goToTestimonial(index) {
    if (!track) return;
    track.style.transform = `translateX(-${index * 100}%)`;
    tDots.forEach((d, i) => d.classList.toggle('active', i === index));
    currentTestimonial = index;
  }

  function nextTestimonial() {
    const total = tDots.length;
    goToTestimonial((currentTestimonial + 1) % total);
  }

  tDots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      clearInterval(tInterval);
      goToTestimonial(i);
      tInterval = setInterval(nextTestimonial, 6000);
    });
  });

  if (tDots.length) {
    goToTestimonial(0);
    tInterval = setInterval(nextTestimonial, 6000);
  }

  /* ----- Wishlist Hearts ----- */
  document.querySelectorAll('.dest-wishlist').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      btn.classList.toggle('liked');
      const icon = btn.querySelector('i');
      icon.classList.toggle('fa-regular');
      icon.classList.toggle('fa-solid');
    });
  });

  /* ----- Scroll Reveal ----- */
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach((el, i) => {
    el.style.transitionDelay = `${i % 3 * 0.12}s`;
    revealObserver.observe(el);
  });

  /* ----- Smooth Scroll ----- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = header.offsetHeight + 10;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ----- Back to Top ----- */
  const backToTop = document.querySelector('.back-to-top');
  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ----- Search Form ----- */
  const searchForm = document.querySelector('.search-bar');
  searchForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const dest = searchForm.querySelector('#search-dest')?.value;
    if (dest) {
      alert(`Searching tours for "${dest}"... \nThis is a demo. Contact JP Holidays for real bookings!`);
    }
  });

  /* ----- Parallax on Hero (subtle) ----- */
  window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    const scrolled = window.scrollY;
    if (scrolled < hero.offsetHeight) {
      hero.style.setProperty('--parallax', `${scrolled * 0.3}px`);
    }
  });

});
