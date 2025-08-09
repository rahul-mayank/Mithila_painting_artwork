// Add a subtle shadow to the header when scrolling
window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (window.scrollY > 10) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});
