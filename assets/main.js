const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 22);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuButton?.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('menu-open', open);
});
mobileMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

const purchaseButtons = document.querySelectorAll('[data-checkout-url]');
purchaseButtons.forEach(button => {
  button.addEventListener('click', event => {
    const url = button.dataset.checkoutUrl?.trim();
    if (url) return;
    event.preventDefault();
    const subject = encodeURIComponent('MFCOptimizer Pilot 1.0 purchase inquiry');
    const body = encodeURIComponent('Hello Ntergalactic,\n\nI would like to purchase MFCOptimizer Pilot 1.0. Please send me the secure checkout link and next steps.');
    window.location.href = `mailto:ahmed@ntergalacticenergies.com?subject=${subject}&body=${body}`;
  });
});

const contactForm = document.querySelector('[data-contact-form]');
contactForm?.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const name = `${data.get('firstName') || ''} ${data.get('lastName') || ''}`.trim();
  const email = data.get('email') || '';
  const message = data.get('message') || '';
  const subject = encodeURIComponent(`Website inquiry from ${name || 'a visitor'}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  const status = contactForm.querySelector('.form-status');
  if (status) status.textContent = 'Opening your email app…';
  window.location.href = `mailto:ahmed@ntergalacticenergies.com?subject=${subject}&body=${body}`;
});
