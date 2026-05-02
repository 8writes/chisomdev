function showTab(tabId) {
  // Hide all panels
  document.querySelectorAll(".tab-panel").forEach(function (panel) {
    panel.classList.remove("active");
  });

  // Remove active from all nav links
  document.querySelectorAll(".nav-link").forEach(function (link) {
    link.classList.remove("active");
  });

  // Show target panel
  var target = document.getElementById("tab-" + tabId);
  if (target) target.classList.add("active");

  // Activate sidebar + mobile nav links
  var sidebarLink = document.getElementById("nav-" + tabId);
  if (sidebarLink) sidebarLink.classList.add("active");
  var mobileLink = document.getElementById("mnav-" + tabId);
  if (mobileLink) mobileLink.classList.add("active");
}

// Mobile menu
function toggleMobileMenu() {
  var nav = document.getElementById("mobileNav");
  var btn = document.getElementById("hamburger");
  var isOpen = nav.classList.toggle("open");
  btn.classList.toggle("open", isOpen);
  btn.setAttribute("aria-expanded", isOpen);
}

function closeMobileMenu() {
  var nav = document.getElementById("mobileNav");
  var btn = document.getElementById("hamburger");
  nav.classList.remove("open");
  btn.classList.remove("open");
  btn.setAttribute("aria-expanded", "false");
}

// Close mobile menu on outside click
document.addEventListener("click", function (e) {
  var nav = document.getElementById("mobileNav");
  var btn = document.getElementById("hamburger");
  var topbar = document.querySelector(".mobile-topbar");
  if (
    nav &&
    nav.classList.contains("open") &&
    !nav.contains(e.target) &&
    !topbar.contains(e.target)
  ) {
    closeMobileMenu();
  }
});
