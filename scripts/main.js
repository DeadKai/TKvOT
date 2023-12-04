document.addEventListener('DOMContentLoaded', (event) => {
    const toggle = document.getElementById("dark-mode-toggle");
    const iconMoon = toggle.querySelector('.fa-moon');
    const iconSun = toggle.querySelector('.fa-sun');
    const body = document.body;

    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    if (isDarkMode) {
        body.classList.add('dark-mode');
        iconMoon.style.display = 'inline-block';
        iconSun.style.display = 'none';
    }

    toggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            iconMoon.style.display = 'inline-block';
            iconSun.style.display = 'none';
            localStorage.setItem('darkMode', 'true');
        } else {
            iconMoon.style.display = 'none';
            iconSun.style.display = 'inline-block';
            localStorage.setItem('darkMode', 'false');
        }
    });
});
