
window.onscroll = function() {getMove()};

var navbar = document.getElementById("nav");

var sticky = navbar.offsetTop;

function getMove() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}