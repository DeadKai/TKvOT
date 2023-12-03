document.addEventListener('DOMContentLoaded', function() {
    var rustLogo = document.getElementById('rust-logo');
    
    rustLogo.addEventListener('click', function() {
        // Add the rotating class to start the animation
        this.classList.add('rotating');

        // Optional: Remove the class after the animation completes (2 seconds) to allow re-click animation
        setTimeout(() => {
            this.classList.remove('rotating');
        }, 2000);
    });
});