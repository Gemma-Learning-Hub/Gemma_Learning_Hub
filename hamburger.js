
          // Get the elements
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('menu-close');
const navMenu = document.getElementById('nav-menu');

// Toggle menu visibility when the hamburger menu is clicked
menuBtn.addEventListener('click', () => {
    navMenu.classList.add('active');
    closeBtn.style.display = 'block';
});

// Close the menu when the close button is clicked
closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('active');
    closeBtn.style.display = 'none';
});

