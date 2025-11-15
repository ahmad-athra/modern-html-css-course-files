const hamburger = document.querySelector("#hamburger");
hamburger.addEventListener("click", function () {
  console.log("Clicked");
  const nav = document.querySelector(".mobile-menu-items");
  nav.classList.toggle("active");
});
