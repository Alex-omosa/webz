const humburger = document.querySelector(" .humburger ");
const navlinks = document.querySelector(" .nav-links");
const links = document.querySelector(".nav-links li");

humburger.addEventListener("click", () => {
  navlinks.classList.toggle("open");
});
