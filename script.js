
// mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("main-nav");

if (menuBtn) {
  menuBtn.addEventListener("click", function () {
    nav.classList.toggle("open");
  });
}

// image hover effect for car images
const carImages = document.querySelectorAll(".car-image");

carImages.forEach(function (img) {
  img.addEventListener("mouseenter", function () {
    img.style.transform = "scale(1.05)";
  });

  img.addEventListener("mouseleave", function () {
    img.style.transform = "scale(1)";
  });
});
