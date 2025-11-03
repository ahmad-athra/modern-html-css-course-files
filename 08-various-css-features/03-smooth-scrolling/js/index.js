function scrollListener() {
  console.log("content loaded");
  const header = document.querySelector(".header");
  console.log(header);
  function toggleHeaderTransparency() {
    if (window.scrollY > 0) {
      header.classList.add("transparent");
    } else {
      header.classList.remove("transparent");
    }
  }
  window.addEventListener("scroll", toggleHeaderTransparency);
}

document.addEventListener("DOMContentLoaded", scrollListener);
