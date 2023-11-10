const myHeading = document.querySelector("h1");

myHeading.onclick = () => {
    const myText = myHeading.textContent;
    if (myText === "Programmeerimiskeeli tutvustav lehekülg") {
        myHeading.textContent = "Easter egg";
    } else {
        myHeading.textContent = "Programmeerimiskeeli tutvustav lehekülg";    
    }
}

const toggleSwitch = document.getElementById("dark-mode-toggle"); 

function switchBackround() {
    if (toggleSwitch.checked) {
        var body = document.body;
        body.style.backgroundColor = "#5C616B";
        body.style.color = "#E5CCCA";
    } else {
        var body = document.body;
        body.style.backgroundColor = "#726A5A";
        body.style.color = "#1A1F1F";
    }

}

toggleSwitch.addEventListener("change", switchBackround);
