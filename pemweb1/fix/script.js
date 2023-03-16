const navbarLinks = document.querySelector('.navbar-links');
const toggleButton = document.querySelector('.navbar-toggle-button');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navbarLinks.classList.remove('active');
  }
});
