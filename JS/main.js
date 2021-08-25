//nav bar functions

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

//back to top link

var meta = JSON.parse('https://epic.gsfc.nasa.gov/api/natural');

$.ajax('https://epic.gsfc.nasa.gov/api/natural', {
        success : function(iDataArr, stat, xhr) {
            // do something with the list
        }
    });


    //moon phase calender
    function load_moon_phases(obj,callback){
      var gets=[]
      for (var i in obj){
          gets.push(i + "=" +encodeURIComponent(obj[i]))
      }
      gets.push("LDZ=" + new Date(obj.year,obj.month-1,1) / 1000)
      var xmlhttp = new XMLHttpRequest()
      var url = "https://www.icalendar37.net/lunar/api/?" + gets.join("&")
      xmlhttp.onreadystatechange = function() {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
              callback(JSON.parse(xmlhttp.responseText))
          }
      }
      xmlhttp.open("GET", url, true)
      xmlhttp.send()
  }
  
  function example_1(moon){    
    var day = new Date().getDate()
    var dayWeek=moon.phase[day].dayWeek
    var html = "<div>" +
    "<b>" + moon.nameDay[dayWeek]+ "</b>" +
    "<div>" + day + " <b>" + moon.monthName + "</b> " +
    moon.year + "</div>" +
    "<div shadow>" + moon.phase[day].svg + "</div>" +
    "<div>" + moon.phase[day].phaseName + " " +
    "" + ((moon.phase[day].isPhaseLimit )? ""  :   Math.round(moon.phase[day].lighting) + "%") +
    "</div>" +
    "</div>"
    document.getElementById("ex1").innerHTML = html
}   
var configMoon = {
    lang  		:'en', 
    month 		:new Date().getMonth() + 1,
    year  		:new Date().getFullYear(),
    size		:150, 
    lightColor	:"rgb(255,255,210)", 
    shadeColor	:"black", 
    texturize	:false, 
}
load_moon_phases(configMoon,example_1)