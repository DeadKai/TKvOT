const myHeading = document.querySelector("h1");

myHeading.onclick = () => {
    const myText = myHeading.textContent;
    if (myText === "Programmeerimiskeeli tutvustav lehekülg") {
        myHeading.textContent = "Easter egg";
    } else {
        myHeading.textContent = "Programmeerimiskeeli tutvustav lehekülg";    
    }
}
