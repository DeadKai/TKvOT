const toggleSwitch = document.getElementById("dark-mode-toggle");

function setTheme(theme) {
    const body = document.body;
    if (theme === "dark") {
        body.style.backgroundColor = "#5C616B";
        body.style.color = "#E5CCCA";
    } else {
        body.style.backgroundColor = "#726A5A";
        body.style.color = "#1A1F1F";
    }
}

function toggleTheme() {
    const isDarkMode = toggleSwitch.checked;
    const theme = isDarkMode ? "dark" : "light";
    
    setTheme(theme);

    localStorage.setItem("theme", theme);
}

function loadSavedTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        toggleSwitch.checked = savedTheme === "dark";
        setTheme(savedTheme);
    }
}

toggleSwitch.addEventListener("change", toggleTheme);

loadSavedTheme();
