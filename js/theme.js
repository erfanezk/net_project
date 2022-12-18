const theme = document.getElementById("theme");
const initTheme = localStorage.getItem("theme");

if (initTheme === "theme-dark") {
  theme.textContent = "dark theme";
} else {
  theme.textContent = "light theme";
}

theme.addEventListener("click", () => {
  toggleTheme();
});
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.body.className = themeName;
}
function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light");
    theme.textContent = "light theme";
  } else {
    setTheme("theme-dark");
    theme.textContent = "dark theme";
  }
}
// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark");
  } else {
    setTheme("theme-light");
  }
})();
