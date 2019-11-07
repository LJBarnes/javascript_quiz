// setEventListener for start button
// when you click it, it starts the for loop with questions
var startBtn = document.querySelector(".startButton");
var startDiv = document.querySelector(".quizStart");
var highScore = document.querySelector(".highScoreView");
var timer = document.querySelector(".timer");
var timeText = document.querySelector(".timeText");
var rightOrWrong = document.querySelector(".answerDisplay");
var questionDisplay = document.querySelector("#questionh2");

var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
      title: "Which of the following functions converts a string to all lowercase letters?",
      choices: ["toLocateLowerCase()", "toLowerCase()", "toString()", "makeLowercase()"],
      answer: "toLowerCase()"
  },
  {
      title: "What is the HTML tag that allows you to write JavaScript? ",
      choices: ["<scripted>","<script>", "<js>", "<javascript>"],
      answer: "<javascript>"
  },
  {
      title: "Which syntax is correct for displaying an alert that says hello?",
      choices: ["alert(&#34hello&#34);", "displayMessage(U+0022helloU+0022)", "alert(hello)", "popup(U+0022helloU+0022)"],
      answer: "alert(&#34helloU+&#34)"
  },
];


// Landing Page/Start Quiz:
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    var timeLeft = 75;
  
    var timeInterval = setInterval(function() {
      timer.textContent =("Time: ") + timeLeft;
      timeLeft--;
      timeText.textContent = "";
  
      if (timeLeft === 0) {
        timer.textContent = "Time: 0";
        clearInterval(timeInterval);
      }
      for ( var i = 0; i <questions.length; i++) {
         questionDisplay.innerHTML = questions[i].title; 
      }
    }, 1000);
    displayChoices(questions[0].choices, questions[0].answer);
  }

  // function that looks at array of answers 
  function displayChoices(choices, answer) {
    for (var i = 0; i < choices.length; i++) {
     var createButton = document.createElement("Button");
     document.getElementById("popUpBody").appendChild(createButton);
     createButton.setAttribute("class", "answerBtn"); 
     
    }

    // function that compares array of answers and correct answer--for loop + if statements
  

  }

//   MODAL for questions:
// var closeBtn = document.querySelector(".xOut");
var modal = document.querySelector(".modal");

// closeBtn.addEventListener("click", close);
startBtn.addEventListener("click", displayModal);

function displayModal() {
    modal.style.display = "block";  
}
// function close() {
//     modal.style.display = "none";
//     clearTimeout(timeInterval);
//   }


    // Need to add an event listener for answer buttons. Not sure how to determine what happens if the answer is wrong or right. Do I have to write out for each button what happens if clicked? Seems like it might need a loop of some sort, since it's an array. 



console.log("working!");

console.log (questions);


