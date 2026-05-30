// Mobile navigation toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Form submission
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = document.createElement('div');
    message.textContent = 'Message sent successfully!';
    message.style.cssText = `position: fixed; top: 20px; right: 20px; background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; padding: 1rem 2rem; border-radius: 10px; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); z-index: 1000;`;
    document.body.appendChild(message);
    form.reset();
    setTimeout(() => message.remove(), 3000);
});

// Parallax effect
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    hero.style.backgroundPositionY = window.pageYOffset * 0.5 + 'px';
});
