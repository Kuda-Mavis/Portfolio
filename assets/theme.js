// Global theme management
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const mobileThemeToggle = document.getElementById("mobile-theme-toggle");
  const themeLabels = document.querySelectorAll(".theme-label");
  
  // Ensure website starts in bright mode by default
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeLabels.forEach(label => label.textContent = "Dark");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
    themeLabels.forEach(label => label.textContent = "Light");
  }
  
  // Theme toggle functionality for both toggles
  function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    themeLabels.forEach(label => label.textContent = isDark ? "Dark" : "Light");
  }
  
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
  
  if (mobileThemeToggle) {
    mobileThemeToggle.addEventListener("click", toggleTheme);
  }
}

// Initialize theme as soon as possible
initTheme();