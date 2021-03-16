// variables
var startBtnEl = document.querySelector("#start-btn");
var homePageEl = document.querySelector("#home-page");
var choicesEl = document.querySelector(".buttons");
var questionPEl = document.querySelector("#questionsP");
var indexQ = 0;
var isCorrect = "Correct Answer";
var isWrong = "Wrong Answer. 10 seconds have been deducted from your timer";

// console.log(questionsEl);
// console.log(questionsArray[0].correct);

var startQuiz = function () {
  document.getElementById("home-page").innerHTML = "";

  homePageEl.style.margin = "5px 35%";

  // timer();
  questions();
};

var count = 75;
var interval = setInterval(function () {
  document.getElementById("countdown").innerHTML = count;
  count--;
  if (count === 0) {
    clearInterval(interval);
    document.getElementById("countdown").innerHTML = "Done";
    // or...
    alert("You're out of time!");
  }
}, 1000);

var questions = function () {
  var currentQuestion = questionsArray[indexQ];
  var titleEl = document.getElementById("questionTitle");
  titleEl.textContent = currentQuestion.question;
  titleEl.setAttribute("style", "margin-bottom: 25px");

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
  // if statement for when the user clicks the correct button

  if (correctAnswer === this.value && indexQ < questionsArray.length - 1) {
    alert(isCorrect);
  } else {
    alert(isWrong);
    count -= 10;
  }
  indexQ++;
  questions();
}

// event listener to start quiz
startBtnEl.addEventListener("click", startQuiz);

// event listener to all buttons
// choicesEl.addEventListener("click", questionClicker);
