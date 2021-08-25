
const redLight = document.querySelector('#redLight');
const yellowLight = document.querySelector('#yellowLight');
const greenLight = document.querySelector('#greenLight');
const userChoice = document.querySelector('#userChoice');

userChoice.addEventListener("change", cpuChoice, false);



//Randomly Pick A Light
function cpuChoice(){
  let lights = document.querySelectorAll('.light');
  let generatedNum = generateRandomNum();
  let cpuLightChoice = lights[generatedNum].getAttribute('id');
  let userAnswer = userChoice.value;
  let cpuChoice = "";
  
  console.log(cpuLightChoice);
  //console.log(userChoice.value);
  //console.log(userAnswer);
  
  switch(cpuLightChoice){
    case 'redLight':
      lights[generatedNum].classList.remove('lightOff');
      lights[generatedNum].classList.add('red');
      cpuChoice = 'red';
      
      break;
      
    case 'yellowLight':
      lights[generatedNum].classList.remove('lightOff');
      lights[generatedNum].classList.add('yellow');
      cpuChoice = 'yellow';
      break;
      
    case 'greenLight':
      lights[generatedNum].classList.remove('lightOff');
      lights[generatedNum].classList.add('green');
      cpuChoice = 'green';
      break;
      
  }
  
  if(userAnswer === cpuChoice){
    document.querySelector('#gameResult').innerHTML = 'You Are Correct!';
  } else{
    document.querySelector('#gameResult').innerHTML = 'Sorry, Try Again!';
  } 
  
}

function generateRandomNum(){
  return Math.floor((Math.random() * 3));
}