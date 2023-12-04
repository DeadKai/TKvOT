// Oota DOM-i sisu täielikku laadimiseni enne skripti tätmist
document.addEventListener('DOMContentLoaded', function() {

    // salvesta Rusti logo muutujasse 'rustLogo'
    var rustLogo = document.getElementById('rust-logo');

    // Lisa 'rustLogo' elemendile EventListener
    rustLogo.addEventListener('click', function() {
        // Lisa 'rotating' klass 'rustLogo' elemendile, kui seda klikitakse
        this.classList.add('rotating');

        // eemalda rotating klass peale 2s (animatsiooni aeg), et saaks uuesti klikata rusti logo peale
        setTimeout(() => {
            this.classList.remove('rotating');
        }, 2000);
    });
});
// js kirjutamisel on kasutatud https://www.w3schools.com/js/default.asp ja chatgpt abi