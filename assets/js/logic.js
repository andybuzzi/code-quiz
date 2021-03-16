// TEST CODES!!!!!!!!!!
var startBtnEl = document.querySelector("#start-btn");
var homePageEl = document.querySelector("#home-page");
var choicesEl = document.querySelector(".buttons");
var questionPEl = document.querySelector(".questionP");

var indexQ = 0;
// console.log(questionsEl);
// console.log(questionsArray[0].correct);

var startQuiz = function () {
  document.getElementById("home-page").innerHTML = "";

  homePageEl.style.margin = "5px 35%";

  questions();
};

var questions = function () {
  var currentQuestion = questionsArray[indexQ];
  var titleEl = document.getElementById("questionTitle");
  titleEl.textContent = currentQuestion.question;
  titleEl.setAttribute("style", "margin-bottom: 25px");
  // console.log(titleEl.textContent);
  // console.log(currentQuestion);

  choicesEl.innerHTML = "";

  currentQuestion.choices.forEach(function (choice, i) {
    var buttonNode = document.createElement("button");
    buttonNode.setAttribute("class", "buttonNode");
    buttonNode.setAttribute("value", choice);
    buttonNode.textContent = i + 1 + ". " + choice;

    choicesEl.appendChild(buttonNode);
    buttonNode.onclick = questionClicker;
  });
};

function questionClicker() {
  var correctAnswer = questionsArray[indexQ].correct;
  // console.log(andwe);
  // if statement for when the user clicks the correct button
  if (correctAnswer === this.value && indexQ < questionsArray.length - 1) {
    console.log("it was clicked");
    indexQ++;
    questions();
  }
}

// event listener to start quiz
startBtnEl.addEventListener("click", startQuiz);

// event listener to all buttons
choicesEl.addEventListener("click", questionClicker);
