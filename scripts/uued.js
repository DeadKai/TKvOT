document.addEventListener('DOMContentLoaded', function() {
    var rustLogo = document.getElementById('rust-logo');
    
    rustLogo.addEventListener('click', function() {
        this.classList.add('rotating');

        setTimeout(() => {
            this.classList.remove('rotating');
        }, 2000);
    });
});