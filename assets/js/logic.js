// variables
var startBtnEl = document.querySelector("#start-btn");
var homePageEl = document.querySelector("#home-page");
var choicesEl = document.querySelector(".buttons");
var questionPEl = document.querySelector("#questionsP");

var highScoreEl = document.querySelector("#high-score");

var indexQ = 0;
var isCorrect = "Correct Answer";
var isWrong = "Incorrect Answer. 10 seconds have been deducted from your timer";

var score = 0;

// console.log(questionsEl);
// console.log(questionsArray[0].correct);

var count = 75;
var startTimer = function () {
  // coundown timer
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
};

var startQuiz = function () {
  document.getElementById("home-page").innerHTML = "";

  homePageEl.style.margin = "5px 35%";

  startTimer();
  questions();
};

var questions = function () {
  var currentQuestion = questionsArray[indexQ];
  var titleEl = document.getElementById("questionTitle");
  console.log(titleEl);
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

  var feedbackEl = document.getElementById("feedback");
  console.log(feedbackEl);
  if (correctAnswer === this.value && indexQ < questionsArray.length - 1) {
    feedbackEl.textContent = isCorrect;
    score++;
    console.log(score);
  } else {
    feedbackEl.textContent = isWrong;
    count -= 10;
  }

  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function () {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);

  indexQ++;
  questions();
}

function highScore() {
  document.getElementById("home-page").innerHTML = "";
  var highScoreEl = document.getElementById("high-score");
  // highScoreEl.textContent = "test";
  console.log("it was clicked");
}

// event listener to start quiz
startBtnEl.addEventListener("click", startQuiz);

// event listener to all buttons
highScoreEl.addEventListener("click", highScore);
