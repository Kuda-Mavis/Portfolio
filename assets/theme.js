// Global theme management
function initTheme() {
  console.log('Initializing theme...');
  
  // Load saved theme immediately
  const savedTheme = localStorage.getItem("theme");
  console.log('Saved theme:', savedTheme);
  
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    updateThemeLabels(true);
  } else {
    updateThemeLabels(false);
  }
  
  // Theme toggle functionality for both desktop and mobile
  const themeToggle = document.getElementById("theme-toggle");
  const mobileThemeToggle = document.getElementById("mobile-theme-toggle");
  
  console.log('Theme toggles found:', !!themeToggle, !!mobileThemeToggle);
  
  function toggleTheme() {
    console.log('Toggling theme...');
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateThemeLabels(isDark);
    console.log('Theme toggled to:', isDark ? 'dark' : 'light');
  }
  
  function updateThemeLabels(isDark) {
    const labels = document.querySelectorAll(".theme-label");
    console.log('Updating', labels.length, 'theme labels to:', isDark ? 'Dark' : 'Light');
    labels.forEach(label => {
      label.textContent = isDark ? "Dark" : "Light";
    });
  }
  
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
    console.log('Desktop theme toggle listener added');
  }
  
  if (mobileThemeToggle) {
    mobileThemeToggle.addEventListener("click", toggleTheme);
    console.log('Mobile theme toggle listener added');
  }
}

// Initialize theme when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTheme);
} else {
  initTheme();
}

console.log('Theme script loaded');