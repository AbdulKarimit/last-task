// script.js

// Mobile Navigation Menu Toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Add event listener for Read More buttons if needed for future dynamic content
document.addEventListener("DOMContentLoaded", function() {
    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // You can add functionality to dynamically load content or handle navigation here
        });
    });
});
