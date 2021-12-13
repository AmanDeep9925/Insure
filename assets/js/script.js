const closeBtn = document.querySelector(".close-btn");
const mobileNavbar = document.getElementById("navbar-mobile");

closeBtn.addEventListener("click", () => {
  mobileNavbar.classList.toggle("active");
});
