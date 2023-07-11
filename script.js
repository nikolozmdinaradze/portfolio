const menu = document.getElementById("menu");
const nav = document.querySelector(".navigation");
let screenWidth = window.innerWidth;

menu.addEventListener("click", function() {
  nav.style.display = nav.style.display === "none" ? "flex" : "none";
});

