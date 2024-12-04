var bottomNavbar = document.querySelector(".bottom-navbar");

document.addEventListener("scroll", function () {
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

const navbarToggler = document.querySelector(".navbar-toggler");

function bottomBorderFunction() {
  if (bottomNavbar.classList.contains("rounded-bottom-0")) {
    setTimeout(() => {
      bottomNavbar.classList.remove("rounded-bottom-0");
    }, 330);
  } else {
    bottomNavbar.classList.add("rounded-bottom-0");
  }
}

navbarToggler.addEventListener("click", function () {
  navbarToggler.disabled = true;
  setTimeout(function () {
    navbarToggler.disabled = false;
  }, 500);
});

//PULSE BUTTON

const button = document.querySelector(".floating-button");

function pulseEffect() {
  button.classList.add("pulse");

  // Keep the pulse effect for 2 seconds
  setTimeout(() => {
    button.classList.remove("pulse");

    // Pause for 5 seconds before reapplying the effect
    setTimeout(pulseEffect, 5000);
  }, 2200);
}

// Start the pulse effect
pulseEffect();

// FAQ

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    faqItems.forEach((i) => {
      if (i !== item) {
        i.querySelector(".faq-answer").style.maxHeight = null;
      }
    });

    const answer = item.querySelector(".faq-answer");
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
