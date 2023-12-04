// Reference of all the copy buttons
const copyBtns = document.querySelectorAll(".koodi-btn");

copyBtns.forEach((button) => {
    button.addEventListener("click", copyToClipboard);

});

function copyToClipboard(event) {
    const contentId = event.currentTarget.getAttribute("data-content-id");

    const content = document.getElementById(contentId);

    navigator.clipboard
        .writeText(content.innerText)
        .catch((e) => alert(e.message));
}

/* Antud kood kopeerib koodi kasti sees */

/* 
Allikas: https://dev.to/bibekkakati/how-to-implement-copy-to-clipboard-on-a-website-1p0l
         https://chat.openai.com/share/3d815c9e-5b8e-4386-8354-e361c9f13423
*/