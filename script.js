document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  // Toggle navigation on small screens
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close the navigation menu when a link is clicked (useful for one-page navigation)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
      }
    });
  });
});