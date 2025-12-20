document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuItems = document.querySelector(".navbar .mobile-menu-items");
  const mobileMenuToggle = document.querySelector(
    ".navbar .mobile-menu-toggle"
  );
  mobileMenuToggle.addEventListener("click", function () {
    mobileMenuItems.classList.toggle("active");
  });
});
