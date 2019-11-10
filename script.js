var startBtn = document.querySelector(".startButton");
var startDiv = document.querySelector(".quizStart");
var highScore = document.querySelector(".highScoreView");
var timer = document.querySelector(".timer");
var timeText = document.querySelector(".timeText");
var rightOrWrong = document.querySelector("#answerDisplay");
var questionDisplay = document.querySelector("#questionh2");
var questionIndex = 0;
var timeInterval
var timeLeft = questions.length * 15;
var gameOverDiv = document.querySelector("#gameOverDiv");
var gameend = false;
var inputBox = document.querySelector("#initials");
var saveScoresDiv = document.querySelector("#saveScoresDiv");
var scoreHere = document.querySelector("#scoreHere");
var names = [];
// var times = []


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
        if (gameend === true) {
            clearInterval(timeInterval);
        }

    }, 1000);

    displayQuestion();
    
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
        gameend = true;
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
}

function endOfGame() {
    questionh2.style.display = "none";
    popUpBody.style.display = "none";
    answerDisplay.style.display = "none";
    gameOverDiv.style.display = "block";
    scoreHere.textContent = "Your Score is: " + timeLeft;
   
}


function storeInitials() {
    //stringify and set "names" in localStorage
    localStorage.setItem("names", JSON.stringify(names));
}
    inputBox.addEventListener("submit", function (event) {
        event.preventDefault();
        var initialText = inputBox.value.trim();
    
            //  add new initialText to names array, clear input...
        names.push(initialText);
        // inputBox.value = "";
    
        storeInitials();
        renderInitials();
    });




function renderInitals() {
    var storedNames = JSON.parse(localStorage.getItem("names"));
    var newScore = localStorage.getItem("newScore")
    savedHighScores.textContent = newScore;

    }

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
var modal = document.querySelector(".modal");

// closeBtn.addEventListener("click", close);
startBtn.addEventListener("click", displayModal);

function displayModal() {
    modal.style.display = "block";
}


console.log("working!");

console.log(questions);


