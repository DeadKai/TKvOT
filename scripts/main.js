const toggleSwitch = document.getElementById("dark-mode-toggle"); 

function switchBackround() {
    var body = document.body
    if (toggleSwitch.checked) {
        body.style.backgroundColor = "#5C616B";
        body.style.color = "#E5CCCA";
    } else {
        body.style.backgroundColor = "#726A5A";
        body.style.color = "#1A1F1F";
    }
}

toggleSwitch.addEventListener("change", switchBackround);
