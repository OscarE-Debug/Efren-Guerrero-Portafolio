// *grab DOM elements for navbar responsive

var navbarHeight = document.querySelector("header");
var navbar = document.querySelector(".mobile-links");
var linksOrientation = document.querySelector(".list-links");
var buttonOpenLinks = document.querySelector(".bi-list");
var buttonCloseLinks = document.querySelector(".bi-x");

// *Event listeners for window width

let screenWidth = screen.width;
console.log(screenWidth);

window.addEventListener("load", () => {
  let innerScreenWidth = window.innerWidth;
  if (innerScreenWidth >= 1031) {
    navbar.classList.remove("mobile-links");
    linksOrientation.classList.remove("orientation-mobile");
    linksOrientation.classList.add("orientation-desktop");
  } else {
    navbar.classList.add("mobile-links");
    linksOrientation.classList.add("orientation-mobile");
    linksOrientation.classList.remove("orientation-desktop");
  }
});

window.addEventListener("resize", () => {
  let screenWidth = window.innerWidth;
  if (screenWidth >= 1031) {
    navbar.classList.remove("mobile-links");
    linksOrientation.classList.remove("orientation-mobile");
    linksOrientation.classList.add("orientation-desktop");
  } else {
    navbar.classList.add("mobile-links");
    linksOrientation.classList.add("orientation-mobile");
    linksOrientation.classList.remove("orientation-desktop");
  }
});

// *Links visible

buttonOpenLinks.addEventListener("click", () => {
  navbar.classList.add("active");
  setTimeout(function addingClasses() {
    buttonOpenLinks.classList.add("inactive");
    buttonCloseLinks.classList.add("active");
  }, 1000);
});

buttonCloseLinks.addEventListener("click", () => {
  navbar.classList.add("removing-links");
  setTimeout(function removingClasses() {
    navbar.classList.remove("removing-links");
    navbar.classList.remove("active");
    buttonCloseLinks.classList.remove("active");
    buttonOpenLinks.classList.remove("inactive");
  }, 1000);
});

// *Scrollreveal config

ScrollReveal().reveal(".reveal", {
  delay: 300,
  distance: "20px",
  duration: 600,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  interval: 0,
  opacity: 0,
  origin: "left",
  scale: 1,
  cleanup: false,
  container: document.documentElement,
  desktop: true,
  mobile: true,
  reset: true,
  useDelay: "always",
  viewFactor: 0.0,
  viewOffset: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});

ScrollReveal().reveal(".reveal-right", {
  origin: "right",
});

ScrollReveal().reveal(".reveal-special", {
  distance: "0px",
  delay: 500,
});

// *Popup for web templates & Grab DOM elements for popup

let imageKnowledge = document.querySelectorAll(".image-portfolio");

imageKnowledge.forEach((element) => {
  element.addEventListener("click", () => {
    overlayImage = element.dataset.target;
  });
});
