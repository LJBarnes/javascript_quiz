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
var timeInterval
var timeLeft = questions.length *15;
var gameOverDiv = document.querySelector("#gameOverDiv");
var gameend = false;
var inputBox = document.querySelector("#initials");
var saveScoresDiv = document.querySelector("#saveScoresDiv");
var scoreHere = document.querySelector("#scoreHere");

// var names = []
// var times = []
// var saveButton = document.querySelector(".saveButton");
// var initialInput = document.querySelector(".initialInput");
// var highScoresDiv = document.querySelector("#highScoresDiv");

// Landing Page/Start Quiz:
startBtn.addEventListener("click", startQuiz);

function startQuiz() {

gameend = false;
  var timeInterval = setInterval(function () {
    timer.textContent = ("Time: ") + timeLeft;
    timeLeft--;
    timeText.textContent = "";

    if (timeLeft === 0) {
      timer.textContent = "Time: 0";
      clearInterval(timeInterval);
    }
    if (gameend === true){
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
  
  questionIndex++;
  if (questionIndex >= questions.length) {
       gameend =true;
      endOfGame();
    return;
  }

  if (selectedAnswer.innerHTML === answer) {
    // display "Right :)" in question/answer Div
    rightOrWrong.textContent = "Right :)";
  }
 
  else {
    // display "Wrong :(" in question/answer Div
    timeLeft = timeLeft - 5;
    rightOrWrong.textContent = "Wrong :(";
  }
  
  console.log(event.target);
  console.log("correct answer: " + answer);

  displayQuestion();
  // endOfGame();
}

function endOfGame() {
  questionh2.style.display="none";
  popUpBody.style.display="none";
  answerDisplay.style.display="none";
  gameOverDiv.style.display="block";
  scoreHere.textContent = "Your Score is: " + timeLeft;
  
  // var initialInput = document.createElement("INPUT");
  // initialInput.setAttribute("type", "text");
  // initialInput.placeholder = "Type your initials here!";
  // document.getElementById("gameOverDisplay").appendChild(initialInput);
//   var saveButton = document.createElement("Button");
//   document.getElementById("gameOverDiv").appendChild(saveButton);
//   saveButton.setAttribute("class", "saveButton");
//   saveButton.innerHTML = "Save Score";
  // createButton.addEventListener('click', saveScore);
}

// function saveScore() {
//       // Stringify and save score in localStorage
//     localStorage.setItem("times", JSON.stringify(times));
//   }

//   function saveName(){
//     localStorage.setItem("names",JSON.stringify(names));
//   }

//   // When save button is clicked
//   saveButton.addEventListener("submit", function(event) {
//     event.preventDefault();
  
//     var initialText = initialInput.value.trim();

//     // return if submitted text is blank
//     if (initialText === "") {
//       return;
//     }

//     names.push(initialText);
//     initialInput.value = "";
//     times.push(secondsLeft);
//     saveName();
//     saveScore();
//     gameOverDiv.style.display = "none";

    // displayHighScores();

  // })

//   function displayHighScores() {
//     scores.innerHTML = "";
//     times.innerHTML = "";
//     resultsBox.style.display = "inline";
//     resultsBox.style.visibility = "visible"
//     for (var i = 0; i < names.length; i++) {
//         var name = names[i];
//         var time = times[i];
//         var lin = document.createElement("li");
//         var liT = document.createElement("li");
//         lin.textContent = "NAME: " + name;
//         liT.textContent = " TIME: " + time;

//         scores.appendChild(lin);
//         plTime.appendChild(liT);
//     }


// }

  






//DONE-set an event listener on the buttons to check for the correct answer
// DONE-if the answer is incorrect display incorrect and subtract 5 seconds
// DONE -if the answer is correct display correct
// DONE-but no matter what, go to the next question
// DONE-- if there is no other question, or if the time has run out, then stop timer the game is over
// DONE-when game is over display score and input box for user to put name and display go back button. 
    // DONE-create a new div(#gaveOverDiv),
    // DONE-grab new div in JS
        // DONE-questionh2.style.display="none";
        // DONE-popUpBody.style.display="none";
        // DONE- gameOverDiv.style.display="block";
        // in endOfGame ()---
            // DONEdisplay score (timeLeft)
              //  DONEand store it in local
            //DONE create an input field for initials
            // DONE create a submit button
            // DONE when SUBMIT store user's initials in local

// DONE--I think--Store input and score in local storage
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


