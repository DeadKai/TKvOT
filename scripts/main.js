document.addEventListener('DOMContentLoaded', (event) => {
    const toggle = document.getElementById("dark-mode-toggle");
    const iconMoon = toggle.querySelector('.fa-moon');
    const iconSun = toggle.querySelector('.fa-sun');
    const body = document.body;

    //kontrollib kas leht on dark mode's
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Kui leht on dark mode'is, lisa vastav klass body-le ja pane kuu ikoon nähtavaks
    if (isDarkMode) {
        body.classList.add('dark-mode');
        iconMoon.style.display = 'inline-block';
        iconSun.style.display = 'none';
    }

    // Lisab EventListener-i dark mode lülitamise jaoks
    toggle.addEventListener('click', function() {
        // Vaheta body dark mode klass
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) { 
            iconMoon.style.display = 'inline-block'; // Kui body sisaldab darkmode klassi vaheta ikoon kuuks
            iconSun.style.display = 'none';
            localStorage.setItem('darkMode', 'true'); // Salvesta dark mode'i seade
        } else {
            iconMoon.style.display = 'none';
            iconSun.style.display = 'inline-block'; // Kui body ei sisalda darkmode klassi vaheta ikoon päikeseks
            localStorage.setItem('darkMode', 'false'); // Salvesta dark mode'i seade
        }
    });
});
