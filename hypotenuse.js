const sides = document.querySelectorAll(".side");
const checkBtn = document.querySelector("#check");
const output = document.querySelector("#output");

checkBtn.addEventListener("click", getHypotenuse);

function getHypotenuse() {
  let num1 = parseFloat(sides[0].value);
  let num2 = parseFloat(sides[1].value);
  if (num1<=0 || num2<=0){
    window.alert("Enter valid input");
  }
  else{
  let hypotenuse = Math.sqrt(num1*num1 + num2*num2);
  output.innerText = hypotenuse;
  }
}