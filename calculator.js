// For Calculator
// 3 Sides
const side1 = document.querySelector("#side1");
const side2 = document.querySelector("#side2");
const side3 = document.querySelector("#side3");
const calc1 = document.querySelector("#calc1");
const output1 = document.querySelector("#output1");

calc1.addEventListener("click", () => {
  areaAllSides(
    parseFloat(side1.value),
    parseFloat(side2.value),
    parseFloat(side3.value)
  );
});

function areaAllSides(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    let s = (a + b + c) / 2;
    output1.innerText = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  } else {
    window.alert("Enter valid input.");
  }
}

// Base and Height
const base = document.querySelector("#base");
const height = document.querySelector("#height");
const calc2 = document.querySelector("#calc2");
const output2 = document.querySelector("#output2");

calc2.addEventListener("click", () => {
  areaBaseHeight(parseFloat(base.value), parseFloat(height.value));
});

function areaBaseHeight(base, height) {
  if (base<0 || height<0){
    window.alert("Enter valid input");
  }
  else{
  output2.innerText = (base * height) / 2;
  }
}

// 2 Sides 1 Angle
const sideA = document.querySelector("#side-a");
const sideB = document.querySelector("#side-b");
const angle = document.querySelector("#angle");
const calc3 = document.querySelector("#calc3");
const output3 = document.querySelector("#output3");

calc3.addEventListener("click", () => {
  areaTwoSidesOneAngle(
    parseFloat(sideA.value),
    parseFloat(sideB.value),
    parseFloat(angle.value)
  );
});

function areaTwoSidesOneAngle(a, b, angle) {
  if (a<0 || b<0 || angle<0) {
    window.alert("Enter valid input.");
  }
  else{
  output3.innerText = (a * b * Math.sin((angle * Math.PI) / 180)) / 2;
  }
}
