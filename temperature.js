const icon1=document.getElementById('icon1');
const icon2=document.getElementById('icon2');
icon1.style.display="none";
const body=document.querySelector('body');
var original=body.style.background;
const box1=document.querySelector(".box1");


function changeBackground(div) {
    var gradient = window.getComputedStyle(div).backgroundImage;
    document.body.style.background = gradient;
    icon2.style.display="block";
    icon1.style.display="none";
    body.style.color="black";
  } 
icon1.addEventListener('click',()=>{
    body.style.background="linear-gradient(to right,#003973,#e5e5be)";
    icon1.style.display="none";
    icon2.style.display="block";
    body.style.color="black";
    
    

})

  icon2.addEventListener('click',()=>{
    body.style.backgroundColor!="black"
    body.style.background="black";
    icon2.style.display="none";
    icon1.style.display="block";
    icon1.style.color="white";
    body.style.color="white";  
    
})
function convertTemperature(event) {
  event.preventDefault();
  const input = document.getElementById('temperatureInput').value;
  const type = document.getElementById('temperatureType').value;
  let celsiusValue;
  var isValid = /^-?\d*\.?\d+$/.test(input);
  if(isValid){
  if (type === 'fahrenhit') {
      celsiusValue = parseFloat((input - 32) * (5 / 9));
  } else if (type === 'centigrates') {
      celsiusValue = input;
  } else if (type === 'kelvin') {
      celsiusValue = input - 273.15;
  } else if(type=='centigrades'){
    celsiusValue=input;
  }
  else {
      console.log('Invalid input type');
  }
}
else{
  alert("Please enter a Valid number");
}
  
  console.log(celsiusValue);

  document.getElementById('celsiusValue').textContent = ` ${celsiusValue}`;
}




