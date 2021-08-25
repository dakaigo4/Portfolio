const signText = document.getElementById("signText");
const signCost = document.getElementById("signCost");
const tenderBtn = document.getElementById("tender");
  
/*
// user clicks show cost
  -onclick store and calculate cost
*/
function getCost(){
  return signText.value.length * 5;
}
  
/*
display cost
  -show cost to the user 
*/
function showCost(){
  signCost.innerHTML = "$" + getCost();
}

//runs the application once the button is clicked
tenderBtn.onclick = showCost;

//nav bar
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