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
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }

}

toggleSwitch.addEventListener("change", switchBackround);
