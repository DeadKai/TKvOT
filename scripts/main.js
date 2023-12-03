document.addEventListener('DOMContentLoaded', (event) => {
    const toggle = document.getElementById("dark-mode-toggle");
    const iconMoon = toggle.querySelector('.fa-moon');
    const iconSun = toggle.querySelector('.fa-sun');
    const body = document.body;

    // Check if dark mode preference is stored in localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Set initial dark mode state
    if (isDarkMode) {
        body.classList.add('dark-mode');
        iconMoon.style.display = 'inline-block';
        iconSun.style.display = 'none';
    }

    toggle.addEventListener('click', function() {
        // Toggle dark mode class on body
        body.classList.toggle('dark-mode');

        // Update icon visibility
        if (body.classList.contains('dark-mode')) {
            iconMoon.style.display = 'inline-block';
            iconSun.style.display = 'none';
            // Store dark mode preference in localStorage
            localStorage.setItem('darkMode', 'true');
        } else {
            iconMoon.style.display = 'none';
            iconSun.style.display = 'inline-block';
            // Remove dark mode preference from localStorage
            localStorage.setItem('darkMode', 'false');
        }
    });
});
