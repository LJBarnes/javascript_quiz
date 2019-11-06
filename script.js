// setEventListener for start button
// when you click it, it starts the for loop with questions
var startBtn = document.querySelector(".startButton");
var startDiv = document.querySelector(".quizStart");
var highScore = document.querySelector(".highScoreView");
var timer = document.querySelector(".timer");
var timeText = document.querySelector(".timeText");
var rightOrWrong = document.querySelector(".answerDisplay");


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
  
    }, 1000);
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


