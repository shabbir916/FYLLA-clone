
  let lastScrollTop = 0;
  const navbar = document.querySelector("nav");

  window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;  // Yeh vertical scroll position batata hai — kitna pixel user upar se niche scroll kar chuka hai.

    if (currentScroll > lastScrollTop) {
      // Scrolling down
      navbar.style.transform = "translateY(-100%)";
    } else {
      // Scrolling up
      navbar.style.transform = "translateY(0)";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For mobile  currentScroll <= 0 check karta hai ke agar user top pe aa gaya hai (negative value avoid karne ke liye). // Agar haan, toh 0 set karo, nahi toh current value set karo.
  });


// const toggle = document.getElementById("themeToggle");
// const body = document.body;
// const toggleCircle = document.getElementById("toggleCircle");
// const toggleIcon = document.getElementById("toggleIcon");

// // Load theme from localStorage
// if (localStorage.getItem("theme") === "dark") {
//   body.classList.add("dark");
//   toggleIcon.className = "ri-moon-fill";
//   toggleCircle.style.transform = "translateX(30px)";
// } else {
//   toggleIcon.className = "ri-sun-line";
// }

// // Toggle theme on click
// toggle.addEventListener("click", () => {
//   body.classList.toggle("dark");

//   if (body.classList.contains("dark")) {
//     localStorage.setItem("theme", "dark");
//     toggleIcon.className = "ri-moon-fill";
//     toggleCircle.style.transform = "translateX(30px)";
//   } else {
//     localStorage.setItem("theme", "light");
//     toggleIcon.className = "ri-sun-line";
//     toggleCircle.style.transform = "translateX(0px)";
//   }
// });

// const toggle = document.getElementById("themeToggle");
// const body = document.querySelector("body");
// const toggleCircle = document.getElementById("toggleCircle");
// const toggleIcon = document.getElementById("toggleIcon");

// if(localStorage.getItem("theme") == "dark"){
//   body.classList.add("dark");
//   toggleIcon.className = "ri-moon-fill";
//   toggleCircle.style.transform = "translateX(30px)"
// }
// else{
//   toggleIcon.className = "ri-sun-line";
// }

// // Toggle theme on click
// toggle.addEventListener("click",function(){
//   body.classList.toggle("dark");

//   if(body.classList.contains("dark")){
//     localStorage.setItem("theme","dark");
//     toggleIcon.className = "ri-moon-fill";
//     toggleCircle.style.transform = "translateX(30px)";
//   }
//   else{
//     localStorage.setItem("theme", "light");
//     toggleIcon.className = "ri-sun-line";
//     toggleCircle.style.transform = "translateX(0px)";
//   }
// })




