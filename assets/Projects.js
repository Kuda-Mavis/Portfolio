// Toggle expand/collapse for project categories
const headers = document.querySelectorAll(".toggle-header");

headers.forEach((header) => {
  header.addEventListener("click", () => {
    const list = header.nextElementSibling;
    list.classList.toggle("active");

    const arrow = header.querySelector(".arrow");
    // Change arrow direction based on expanded/collapsed state
    arrow.innerHTML = list.classList.contains("active") ? "&#9660;" : "&#9654;";
  });
});

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

// Ensure both elements exist before adding event listener
if (hamburger && navLinks) {
  // FIX: Handle both click and touch events for iPad / mobile Safari
  ["click", "touchstart"].forEach((eventType) => {
    hamburger.addEventListener(eventType, (e) => {
      e.preventDefault(); // Prevent double-trigger on iOS
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("open"); // Optional animation class
    });
  });
}
