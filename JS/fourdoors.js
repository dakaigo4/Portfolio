// Nav Bar
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// Door functions
$('.frontDoor').on('click', function() {
  let movingDoor = this.classlist;
  if ($(this).hasClass("doorOpen")) {
    $(this).removeClass("doorOpen");
  } else {
  $(this).addClass('doorOpen');
}});

