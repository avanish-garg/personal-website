/*
  Common JavaScript for the personal portfolio site.
  Handles navigation toggling on mobile, sets active nav link based on the
  current page, animates skill progress bars, and converts the contact form
  submission into a mailto link.
*/

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  // Close menu when clicking a nav link on mobile
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
      }
    });
  });

  // Set active nav link based on current path
  const currentPath = window.location.pathname.split('/').pop();
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (href === 'index.html' && currentPath === '')) {
      link.classList.add('active');
    }
  });

  // Animate skill progress bars when present
  const progressBars = document.querySelectorAll('.progress-bar');
  if (progressBars.length > 0) {
    progressBars.forEach(bar => {
      const value = bar.getAttribute('data-value');
      bar.style.width = value;
    });
  }

  // Contact form handler
  const contactForm = document.querySelector('#contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.querySelector('#name').value;
      const email = document.querySelector('#email').value;
      const message = document.querySelector('#message').value;
      const subject = encodeURIComponent('New message from ' + name);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      window.location.href = `mailto:gargavanish@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});