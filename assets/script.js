var startBtn = document.getElementById("start-btn");
var introSectionEl = document.getElementById("intro-section");
var timerEl = document.getElementById("timer");
var questionSectionEl = document.getElementById("question-section");
var titleEl = document.getElementById("title");
var highscoreEl = document.getElementById("highscore-section");
var initialEl = document.getElementById("initial-section");
var scoreEl = document.getElementById("score");
var saveBtn = document.getElementById("save-btn");
var userInitial = document.getElementById("initial-input");


var questionIndex = 0;

var questionsArray = [
  {
    title: "Which of the following is used to create a website?",
    choices: ["JavaScript", "CSS", "HTML", "All of them"],
    answer: "All of them",
  },
  {
    title: "A function in JavaScript is always immediately followed by a",
    choices: ["<>", "()", "{}", "[]"],
    answer: "()",
  },
  {
    title: "How does one prevent a <form> from refreshing the page?",
    choices: ["stopDefault", "stopRefresh", "stopDefault", "preventDefault"],
    answer: "preventDefault",
  },
  {
    title: "Which of the following is used to link a class",
    choices: ["!", "$", "#", "."],
    answer: ".",
  },
  {
    title: "Which of the following is used to link an ID",
    choices: ["!", "$", "#", "."],
    answer: "#",
  },
];

function startQuiz() {
  introSectionEl.setAttribute("class", "hide");
  questionSectionEl.removeAttribute("class");
  setIntervalID = setInterval(countdown, 1000);
  showQuestions();
}

var setIntervalID = 0;
var timeLeft = questionsArray.length * 15;

function countdown() {
  timerEl.textContent = timeLeft--;
  if (timeLeft === 0) {
    clearInterval(setIntervalID);
  }
}

function showQuestions() {
  var choicesEl = document.querySelectorAll(".choices");
  if (questionIndex < questionsArray.length) {
    titleEl.textContent = questionsArray[questionIndex].title;

    for (let i = 0; i < choicesEl.length; i++) {
      choicesEl[i].textContent = questionsArray[questionIndex].choices[i];
    }
  }
}

function nextQuestion(event) {
  var currentElement = event.target;
  if (currentElement.matches("button")) {
    var selectedAnswer = currentElement.textContent;
    var correctAnswer = questionsArray[questionIndex].answer;

    if (selectedAnswer !== correctAnswer) {
      timeLeft -= 10;
      if (timeLeft < 0) {
        timeLeft = 0;
      }
    }

    questionIndex++;
    if (questionIndex >= questionsArray.length) {
      endQuiz();
    } else {
      showQuestions();
    }
  }
}

startBtn.addEventListener("click", startQuiz);
questionSectionEl.addEventListener("click", nextQuestion);

function endQuiz() {
  clearInterval(setIntervalID);
  questionSectionEl.setAttribute("class", "hide");
  initialEl.removeAttribute("class");
  scoreEl.textContent = timeLeft;
}


function saveScore(){
    userInitial = userInitial.value;
    localStorage.setItem("userInitial", userInitial);
    console.log(userInitial);
    initialEl.setAttribute("class", "hide");
    highscoreEl.removeAttribute("class")
    
    
}

saveBtn.addEventListener("click", saveScore)



