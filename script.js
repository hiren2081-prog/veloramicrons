// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
function closeMobile() {
  mobileMenu.classList.remove('open');
}

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ===== SCROLL FADE-IN ANIMATIONS =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

const fadeEls = document.querySelectorAll(
  '.acard, .prod-card, .ind-item, .why-item, .about-text, .contact-info, .contact-form'
);
fadeEls.forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// ===== CONTACT FORM SUBMIT → WHATSAPP =====
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this.querySelector('input[type="text"]').value || 'Customer';
  const phone = this.querySelector('input[type="tel"]').value || '';
  const company = this.querySelectorAll('input[type="text"]')[1]?.value || '';
  const product = this.querySelector('select').value || 'Not specified';
  const message = this.querySelector('textarea').value || '';

  const waText = `Hello Velora Microns!%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Company:* ${encodeURIComponent(company)}%0A*Product Required:* ${encodeURIComponent(product)}%0A*Message:* ${encodeURIComponent(message)}`;

  const btn = this.querySelector('button[type="submit"]');
  btn.textContent = '✓ Opening WhatsApp...';
  btn.style.background = '#25D366';
  btn.disabled = true;

  setTimeout(() => {
    window.open('https://wa.me/919119711811?text=' + waText, '_blank');
    btn.textContent = 'Send Enquiry →';
    btn.style.background = '';
    btn.disabled = false;
    this.reset();
  }, 800);
});
