const triviaForm = document.querySelector("#trivia-form");
const submitButton = document.querySelector("#submit");
const output = document.querySelector("#output");

const answers = ["Obtuse Angled", "180°", "Yes", "Angle Side Angle (ASA)"];

function calcMarks() {
  let marks = 0;
  let index = 0;
  const formResults = new FormData(triviaForm);

  for (let value of formResults.values()) {
    if (value === answers[index]) {
      marks++;
    }
    index++;
  }
  output.innerText = "Your Score : " + marks;
}
submitButton.addEventListener("click", calcMarks);
