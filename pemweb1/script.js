// add responsive behavior to navbar and sidebar
window.addEventListener("scroll", function() {
var navbar = document.querySelector(".navbar");
var sidebar = document.querySelector(".sidebar");
if (window.pageYOffset > 0) {
navbar.classList.add("navbar-scrolled");
sidebar.classList.add("sidebar-scrolled");
} else {
navbar.classList.remove("navbar-scrolled");
sidebar.classList.remove("sidebar-scrolled");
}
});