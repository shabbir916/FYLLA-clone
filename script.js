let lastScrollTop = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop; 
  if (currentScroll > lastScrollTop) {
    navbar.style.transform = "translateY(-100%)";
  } else {
    navbar.style.transform = "translateY(0)";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
});

const toggle = document.getElementById("themeToggle");
const body = document.body;
const toggleCircle = document.getElementById("toggleCircle");
const toggleIcon = document.getElementById("toggleIcon");

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggleIcon.className = "ri-moon-fill";
  toggleCircle.style.transform = "translateX(30px)";
} else {
  toggleIcon.className = "ri-sun-line";
}

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleIcon.className = "ri-moon-fill";
    toggleCircle.style.transform = "translateX(30px)";
  } else {
    localStorage.setItem("theme", "light");
    toggleIcon.className = "ri-sun-line";
    toggleCircle.style.transform = "translateX(0px)";
  }
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
