const sides = document.querySelectorAll(".side");
const checkBtn = document.querySelector("#check");
const output = document.querySelector("#output");

checkBtn.addEventListener("click", getHypotenuse);

function getHypotenuse() {
  console.log(sides[0].value);
  let hypotenuse = Math.sqrt(getSquare(sides[0]) + getSquare(sides[1]));
  output.innerText = hypotenuse;
}

function getSquare(num) {
  let num1 = parseFloat(num.value);
  console.log(num1);
  return num1 * num1;
}
