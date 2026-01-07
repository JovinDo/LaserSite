// 1. Hamburger Menu Logic
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header-right-side");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// 2. Close Hamburger when a normal link is clicked
// We exclude the "Services" button (.dropbtn) so it doesn't close the menu
document.querySelectorAll(".page-link:not(.dropdown)").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));

// Also close when clicking links INSIDE the dropdown
document.querySelectorAll(".dropdown-content a").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));

// 3. Services Dropdown Logic
const dropBtn = document.querySelector(".dropbtn");
const dropContent = document.querySelector(".dropdown-content");

if (dropBtn) {
  dropBtn.addEventListener("click", (e) => {
    e.preventDefault();  // Stop page jumping to top
    e.stopPropagation(); // Stop the hamburger from closing
    dropContent.classList.toggle("active");
  });
}