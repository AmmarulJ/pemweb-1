// Tambahkan event listener untuk window scroll
window.addEventListener('scroll', function() {
    // Ambil navbar dan sidebar
    var navbar = document.querySelector('.navbar');
    var sidebar = document.querySelector('.sidebar');
    
    // Jika posisi scroll lebih dari 60px
    if (window.pageYOffset > 60) {
    // Tambahkan class "scrolled" pada navbar dan sidebar
    navbar.classList.add('scrolled');
    sidebar.classList.add('scrolled');
    } else {
    // Hapus class "scrolled" pada navbar dan sidebar
    navbar.classList.remove('scrolled');
    sidebar.classList.remove('scrolled');
    }
    });