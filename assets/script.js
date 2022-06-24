//to do: timer func, time penalty func, finish next question func 
const startButtonEl = document.getElementById('start-btn'); 
const startDivEl = document.getElementById('start'); 
const questionContainerEl = document.getElementById('question-container'); 
const questionElement = document.getElementById('question'); 
const answerButtonsElement = document.getElementById('answer-buttons'); 
const resultEl = document.getElementById('result');
const formEl = document.getElementById('highscore'); 
const timer = document.getElementById('timer'); 

let timeSecond = 60; 
let countingDown = true; 

 
 

function countdown() { 
    const countdown = setInterval(() => { 
        if (countingDown) { 
            timeSecond--; 
        } 
        timer.innerHTML = timeSecond 
        if (timeSecond <= 0) { 
            clearInterval(countdown) 
        } 
    }, 1000) 
} 

let currentQuestionIndex = 0 

startButtonEl.addEventListener('click', startGame); 

//hide start button, show first question, start timer 

function startGame() { 
    countdown(); 
    startDivEl.style.display = 'none'; 
    questionContainerEl.classList.remove('hide') 
    showQuestion(currentQuestionIndex) 
} 

 
 

//getting question and answer from array 

function showQuestion(questionIndex) { 
    while (answerButtonsElement.firstChild) { 
        answerButtonsElement.removeChild(answerButtonsElement.firstChild) 
    } 

    questionElement.innerText = questions[questionIndex].question 
    questionElement.id = questionIndex; 
    let currentQuestion = questions[questionIndex] 

    currentQuestion.answers.forEach(answer => { 
        const button = document.createElement('button') 
        button.innerText = answer.text 
        button.classList.add('btn') 
        button.classList.add('btn-primary') 
        button.classList.add('btn-lg') 
        button.dataset.correct = answer.correct 
        button.addEventListener('click', selectAnswer) 
        answerButtonsElement.appendChild(button) 

    }) 

} 

 
 

//Clicking the button to see if correct and changing the class
//Create and if statement,if right move to next question, if wrong call time penalty move to next question  

function selectAnswer(e) { 
    const selectedButton = e.target 
    const correct = JSON.parse(selectedButton.dataset.correct) 
    setStatusClass(selectedButton, correct) 
    currentQuestionIndex++ 
    if (currentQuestionIndex === questions.length || timeSecond === 0) { 
        //end timer go to results 
        endQuiz() 
    } 

    else { 
        showQuestion(currentQuestionIndex) 
    } 

} 

 
 

//Setting the class if the question is correct or incorrect 

function setStatusClass(element, correct) { 
    clearStatusClass(element) 
    if (correct){ 
        resultEl.classList.remove('hide') 
        resultEl.innerHTML = "Correct" 
    } 

    else{ 
        resultEl.classList.remove('hide') 
        resultEl.innerHTML = "Wrong" 
        timeSecond = timeSecond - 10 
    } 
} 

 
 

//remove right and wrong class 

function clearStatusClass(element) { 
    element.classList.remove('correct') 
    element.classList.remove('wrong') 
} 

 
 

function endQuiz() { 
    questionContainerEl.classList.add('hide') 
    resultEl.classList.add('hide') 
    formEl.classList.remove('hide') 
    countingDown = false 
} 

 
 

//Quiz questions 

const questions = [ 
    { 
        question: 'What is commenly used as placeholder text?', 
        answers: [ 
            { text: "lorem Ipsum", correct: true }, 
            { text: "Book titles", correct: false }, 
            { text: "Random numerics", correct: false }, 
            { text: "Random letters", correct: false }, 
        ] 
    },  
    { 
        question: 'What is a shortcut for creating boiler plate HTML?', 
        answers: [ 
            { text: '@ and Enter', correct: false }, 
            { text: '! and Enter', correct: true }, 
            { text: '$ and Enter', correct: false }, 
            { text: '# and Enter', correct: false }, 
        ], 
    },   
    { 
        question: 'How does localStorage store data?', 
        answers: [ 
            { text: 'as an array', correct: false }, 
            { text: 'as a blob', correct: false }, 
            { text: 'as a string', correct: true }, 
            { text: 'it does not', correct: false }, 
        ] 
    },   
    { 
        question: 'In css how do you call an id?', 
        answers: [ 
            { text: 'the name', correct: false }, 
            { text: '.', correct: false }, 
            { text: '/', correct: false }, 
            { text: '#', correct: true }, 
        ] 
    }, 
    { 
        question: 'What does API stand for?', 
        answers: [ 
            { text: 'Web Programming Interface', correct: true }, 
            { text: 'Web Protocol Inquiry', correct: false}, 
            { text: 'Web Prerequisite Information', correct: false}, 
            { text: 'Wash Produce Immediately', correct: false}, 
        ] 
    }, 
    { 
        question: 'What is an Event?', 
        answers: [ 
            { text: 'A response to a button click', correct: false}, 
            { text: 'A user generated behaviour', correct: true}, 
            { text: 'A button or selector', correct: false}, 
            { text: 'A Circus', correct: false}, 
        ], 
    },  
];

submitButton.onclick = function() {
    const initials = initialsInput.value;
    const score = remainingTime.value;

    localStorage.setItem(initials, score);
};