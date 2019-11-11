# javascript_quiz

I created this quiz application using HTML, CSS, and JavaScript. 

The purpose of this quiz is to test knowledge of JavaScript in a fun, fast paced environment. 

When a user reaches the landing page, there is a brief introduction to the quiz, a link to view high scores and a timer that starts when the quiz begins. When the start button is clicked, the timer kicks off and the user is given 15 seconds per question. After an answer is chosen, text will appear telling the user whether they got the question right or wrong. If the answer is wrong, 5 seconds are subtracted from the timer. At the end of the quiz, the timer stops and the score is displayed along with an input box for users to save their initials and score to high scores. Once submitted, this information is stored in local storage and then retrieved when a user clicks "view high scores" in the upper right corner. 

I achieved this by attaching a click event listener to the start button. This triggers functions for hiding the landing page, starting the timer and stopping it at zero or when all questions are finished, displaying the question and answers, using a for loop and an variable set to increment by one as each question is displayed to iterate through questions and answers until the end of the quiz is reached. I also used conditionals and targeted buttons that contain the correct answer to display "right" or "wrong" when answers are selected and to subtract seconds off the timer if the answer was incorrect. Another event listener was used for submitting initials. This event listener stores the user's input into an array that is set to local storage and then displays the high scores, giving the option of returning to the start of the quiz or clearing out the high scores. Event listeners are attached to each of those buttons, triggering the appropriate event when clicked. Another event listener is attached to the "view high scores" text that retrieves the stored initials and scores from local storage, hides the landing page, and displays the high scores, return to start and clear scores button. 

![start](https://user-images.githubusercontent.com/53705501/68629465-00a93380-04b2-11ea-885c-cd02144efb0b.jpg)
![quiz1](https://user-images.githubusercontent.com/53705501/68629560-4e25a080-04b2-11ea-9934-62518c85a960.jpg)
![score](https://user-images.githubusercontent.com/53705501/68629575-58e03580-04b2-11ea-800c-02a39fb2c225.jpg)
