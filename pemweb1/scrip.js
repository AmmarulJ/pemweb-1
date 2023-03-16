// Toggle sidebar
const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.sidebar-toggle');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar');
});

// Search functionality
const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value.toLowerCase().trim();
  const images = document.querySelectorAll('table img');

  images.forEach((image) => {
    if (image.alt.toLowerCase().trim().includes(searchTerm)) {
      image.closest('tr').style.display = 'table-row';
    } else {
      image.closest('tr').style.display = 'none';
    }
  });

  searchInput.value = '';
});

// Responsive navbar
const navbar = document.querySelector('.navbar');
const navbarLinks = document.querySelector('.navbar-links');

navbarToggle.addEventListener('click', () => {
  navbarLinks.classList.toggle('show-links');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navbarLinks.classList.remove('show-links');
  }
});
// Navbar Toggle
const navbarToggle = document.querySelector(".navbar-toggle");

navbarToggle.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
// Dropdown Menu
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const dropdownToggle = dropdown.querySelector("a");
  const dropdownMenu = dropdown.querySelector("ul");

  dropdownToggle.addEventListener("click", (e) => {
    e.preventDefault();
    dropdownMenu.classList.toggle("active");
  });

  dropdownToggle.addEventListener("blur", () => {
    dropdownMenu.classList.remove("active");
  });
});


