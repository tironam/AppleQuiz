const questions = [
    {
        question: 'What time is always listed on all the iPhones and iPads on Apple\'s website?',
        answers: [
            { text: '9:42', correct: false },
            { text: '10:00',  correct: false },
            { text: '10:01', correct: false },
            {  text: '9:41', correct: true }
        ]
    },
    {
        question: 'What was the first iPhone to not have the headphone jack?'
        answers: [
            {  text: 'iPhone SE', correct: false },
            {  text: 'iPhone 7', correct: true },
            { text: 'iPhone 6s', correct: false },
            { text: 'iPhone X', correct: false}
        ]
    },
    {
        question: 'Both generations of Apple Pencil have a double-tap gesture control'
        answers: [
            { text: 'True', correct: false },
            { text: 'False', correct: true }
        ]
    },
    {
        question: 'What\'s the name of the programming language Apple created to simplify coding that it uses for apps?'
        answers: [
            { text: 'Objective-C', correct: false },
            {  text: 'Swot', correct: false },
            {  text: 'Python', correct: false },
            { text: 'Swift', correct: true }
        ]
    },
    {
        question: 'What was the first major generation iPhone to move from a summer to fall launch?'
        answers: [
            { text: 'iPhone 5', correct: false },
            { text: 'iPhone 3GS', correct: false },
            { text: 'iPhone 4s', correct: true },
            { text: 'iPhone 6', correct: false }
        ]
    },
    {
        question: 'Were iPod Socks a real thing, and how many came in a pack?'
        answers: [
            { text: 'No, that\'s fake', correct: false },
            { text: 'Yes, a 3-pack', correct: false },
            { text: 'Yes, a 6-pack', correct: true },
            { text: 'Did you really think those were real?', correct: false }
        ]
    },
    {
        question: 'Which port lasted longer on the iPhone?'
         answers: [
            { text: 'The classic 30-pin dock connector', correct: false },
            { text: 'The Lightning Port', correct: true }
        ]
    },
    {
        question: 'True or False, the third generation iPad was replaced with a slightly updated model within the same calendar year?'
        answers: [
            { text: 'True', correct: true },
            { text: 'False', correct: false }
        ]
    },
    {
        question: 'Where did Steve Jobs hide the original MacBook Air during his presentation announcing the product?'
        answers: [
            { text: 'On the podium on the stage in plain view', correct: false },
            { text: 'Under the seat of a guest in the front row', correct: false },
            { text: 'Nowhere, it was brought out to him uncovered', correct: false },
            { text: 'A manilla envelope', correct: true }
        ]
    },
    {
        question: 'Which Apple product was popular for abandoning Adobe Flash, and therefore shifted the internet more towards HTML5?'
        answers: [
            { text: 'MacBook Air', correct: false },
            { text: 'iPhone 3GS', correct: false },
            { text: 'iPad', correct: true },
            { text: 'iPod Socks', correct: false}
        ]
    },
]

const nextButton = document.getElementById('next-btn')
// const questionContainerElement = document.getElementById('question-container')
const questionElem = document.getElementById('question')
const answerButtonsElem = document.getElementById('answer-buttons')
const startText = document.getElementById('start-message')
let right = 0

let shuffledQs, currentQIndex