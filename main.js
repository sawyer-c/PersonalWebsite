// Nav scroll state
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.hero-text, .hero-photo-wrap, .about-text, .about-stats, .timeline-item, .skill-tags, .certs, .contact-inner'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});
