/*
*
*
PSUEDOCODE~
1. PAGE THAT EXPLAINS QUIZ AND OFFERS A START BUTTON
        a. VIEW HIGHSCORES LINK IS SOMEWHERE IN A CORNER ON THE PAGE
2. WHEN BUTTON IS CLICKED, FIRST QUESTION APPEARS
        a. TIMER BEGINS AT 60 SECONDS IN A CORNER.
3. USER CHOOSES ANSWER.
        a. IF CORRECT, SMALL MESSAGE APPEARS THAT TELLS USER THEY CHOSE CORRECTLY AND POINT ADDED TO TOTAL SCORE..
        b. IF INCORRECT, SMALL MESSAGE APPEARS THAT TELLS USER THEY CHOSE INCORRECTLY AND 3 SECONDS IS DEDUCTED FROM TIMER.
        c. NEXT QUESTION IS REVEALED.
        d. REPEAT.
4. WHEN ALL QUESTIONS ARE ANSWERED **OR** TIMER RUNS OUT, USER IS PRESENTED THEIR TOTAL SCORE.
        a. USER CAN INPUT THEIR INITIALS TO TRACK WITH HIGHSCORE.
        b. SCORE IS STORED ON HIGHSCORE PAGE.
        c. USER IS PRESENTED OPTION TO RETAKE QUIZ OR CLEAR HIGHSCORES.
*
*
*/

var startButton = document.getElementsByClassName("start-btn");
var timerText = document.getElementsByClassName("timer-text");
var quizMain = document.getElementsByClassName("quizbody");

var secondsLeft = 60;

startButton.addEventListener("click", function () {
    timerText.textContent = secondsLeft;

    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerText.textContent = secondsLeft + "s";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000)
})