document.addEventListener("scroll", function () {
  var bottomNavbar = document.querySelector(".bottom-navbar");
  var topNavbar = document.querySelector(".top-navbar");
  var scrolled = window.scrollY;

  if (scrolled > 120) {
    bottomNavbar.classList.add("top-navbar");
    bottomNavbar.classList.remove("bottom-navbar");
  } else {
    topNavbar.classList.add("bottom-navbar");
    topNavbar.classList.remove("top-navbar");
  }
});

document.querySelector(".hamburger").addEventListener("click", function () {
  var nav = document.querySelector(".nav_container");
  nav.classList.toggle("active");

  // Toggle animation class for each bar
  var hamburgerBars = document.querySelectorAll(".bar");

  hamburgerBars.forEach((bar, index) => {
    bar.classList.toggle(`animate${index + 1}`);
  });
});
