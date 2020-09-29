const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const highscoreButtonsElement = document.getElementById('highscores');

let shuffledQuestions, currentQuestionIndex;

var score

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        setNextQuestion();
})


function startGame() {
        console.log('Started');
        startButton.classList.add('hide');
        shuffledQuestions = questions.sort(() => Math.random() - .5);
        currentQuestionIndex = 0;
        questionContainerElement.classList.remove('hide');
        setNextQuestion();
}

function setNextQuestion() {
        resetState();
        showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
        questionElement.innerText = question.question;
        question.answers.forEach(answer => {
                const button = document.createElement('button');
                button.innerText = answer.text;
                button.classList.add('btn');
                if (answer.correct) {
                        button.dataset.correct = answer.correct;
                }
                button.addEventListener('click', selectAnswer);
                answerButtonsElement.appendChild(button);
        })
}

function resetState() {
        clearStatusClass(document.body);
        nextButton.classList.add('hide');
        while (answerButtonsElement.firstChild) {
                answerButtonsElement.removeChild(answerButtonsElement.firstChild)
        }
}

function selectAnswer(e) {
        const selectedButton = e.target
        const correct = selectedButton.dataset.correct;
        setStatusClass(document.body, correct);
        Array.from(answerButtonsElement.children).forEach(button => {
                setStatusClass(button, button.dataset.correct);
        })
        if (shuffledQuestions.length > currentQuestionIndex + 1) {
                nextButton.classList.remove('hide');
        } else {
                startButton.innerText = 'Restart';
                startButton.classList.remove('hide');
        }
        
}

function setStatusClass(element, correct) {
        clearStatusClass(element);
        if (correct) {
                element.classList.add('correct')
        } else {
                element.classList.add('wrong')
        }
}

function clearStatusClass(element) {
        element.classList.remove('correct');
        element.classList.remove('wrong');
}

const questions = [
        {
                question: 'What is the correct HTML syntax to link an external JavaScript file?',
                answers: [
                        { text: '<script.js></script>', correct: false },
                        { text: '<script src="xyz.js"></script>', correct: true },
                        { text: '<script href="xyz.js"></script>', correct: false },
                        { text: '<script link="xyz.js"></script>', correct: false },
                ]
        },
        {
                question: 'How do you call a function name "functionName"?',
                answers: [
                        { text: 'functionName();', correct: true },
                        { text: 'call functionName();', correct: false },
                        { text: 'call.functionName;"></script>', correct: false },
                        { text: 'functionName = call();', correct: false },
                ]
        },
        {
                question: 'How do you declare a JavaScript variable?',
                answers: [
                        { text: 'createVariable = variableName;', correct: false },
                        { text: 'v variableName;', correct: false },
                        { text: 'declare.variableName;', correct: false },
                        { text: 'var variableName;', correct: true },
                ]
        },
        {
                question: 'How do you write an "if" statement in JavaScript?',
                answers: [
                        { text: 'if (i == 5)', correct: true },
                        { text: 'if i = 5', correct: false },
                        { text: 'if (i = 5) then', correct: false },
                        { text: 'if i === 5 then', correct: false },
                ]
        },
        {
                question: 'JavaScript is the same as Java.',
                answers: [
                        { text: 'True', correct: false },
                        { text: 'False', correct: true },
                ]
        }
]