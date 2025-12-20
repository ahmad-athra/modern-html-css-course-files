document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuItems = document.querySelector(".navbar .mobile-menu-items");
  const mobileMenuToggle = document.querySelector(
    ".navbar .mobile-menu-toggle"
  );
  mobileMenuToggle.addEventListener("click", function () {
    mobileMenuItems.classList.toggle("active");
  });
});

// Scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    header.classList.add("navbar-scroll");
  } else {
    header.classList.remove("navbar-scroll");
  }
});
