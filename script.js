// setEventListener for start button
// when you click it, it starts the for loop with questions
var startBtn = document.querySelector(".startButton");
var startDiv = document.querySelector(".quizStart");
var highScore = document.querySelector(".highScoreView");
var timer = document.querySelector(".timer");
var timeText = document.querySelector(".timeText");
var rightOrWrong = document.querySelector("#answerDisplay");
var questionDisplay = document.querySelector("#questionh2");
var questionIndex = 0;
var timeLeft = 75;
var lastQuestion = 0;
var timeInterval

// Landing Page/Start Quiz:
startBtn.addEventListener("click", startQuiz);

function startQuiz() {


  var timeInterval = setInterval(function () {
    timer.textContent = ("Time: ") + timeLeft;
    timeLeft--;
    timeText.textContent = "";

    if (timeLeft === 0) {
      timer.textContent = "Time: 0";
      clearInterval(timeInterval);
    }

    

  }, 1000);

  displayQuestion();
  // choiceSelected();
}

function displayQuestion() {
  var question = questions[questionIndex];
  questionDisplay.textContent = question.title;
  document.getElementById("popUpBody").textContent = "";
  for (var i = 0; i < question.choices.length; i++) {
    var createButton = document.createElement("Button");
    document.getElementById("popUpBody").appendChild(createButton);
    createButton.setAttribute("class", "answerBtn");
    createButton.innerHTML = question.choices[i];
    // this runs choiceSelected() when a button is clicked--need to put in global scope?
    createButton.addEventListener('click', choiceSelected);
  }

}

function choiceSelected(event) {
  var question = questions[questionIndex];
  var answer = question.answer;
  var selectedAnswer = event.target;
  
  if (selectedAnswer.innerHTML === answer) {
    // display "Right :)" in question/answer Div
    rightOrWrong.textContent = "Right :)";
  }
 
  else {
    // display "Wrong :(" in question/answer Div
    timeLeft = timeLeft - 5;
    rightOrWrong.textContent = "Wrong :(";
  }
  
  questionIndex++;
  if (questionIndex === questions.length) {
        clearInterval(timeInterval);
        // endGame(); make a function for endgame that displays input form etc.
      }
  ;



  console.log(event.target);
  console.log("correct answer: " + answer);



  // lastQuestion++;
  
  displayQuestion();
  // endOfGame();


}

//DONE-set an event listener on the buttons to check for the correct answer
// DONE-if the answer is incorrect display incorrect and subtract 5 seconds
// DONE -if the answer is correct display correct
// DONE-but no matter what, go to the next question
// NOT SURE -- if there is no other question, or if the time has run out, then stop timer the game is over
// when game is over display score and input box for user to put name and display go back button. 
// Store input and score in local storage
// Display high score and initials when High Scores is clicked (get from local storage)
// Add "go back" button to high score view and 
// just notes: save global variable index start at the first one and end at the last one--somehow how do you tell computer that--tell it how to change index of 0 to 1 (matches???) done with question increment++
// event listeners need to be in global scope at the end of page/outside functions











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

console.log(questions);


