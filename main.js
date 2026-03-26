// Nav: transparent on dark hero, frosted white after
const nav = document.getElementById('nav');
const hero = document.getElementById('hero');

function updateNav() {
  const heroBtm = hero.offsetTop + hero.offsetHeight;
  const scrolled = window.scrollY;
  nav.classList.toggle('light', scrolled >= heroBtm - nav.offsetHeight);
  nav.classList.toggle('dark-scrolled', scrolled > 20 && scrolled < heroBtm - nav.offsetHeight);
}
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.hero-content, .hero-photo-wrap, .timeline-item, .tag-grid, .cert-list, .contact-links').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});
