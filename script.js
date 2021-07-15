var questions = [
    {
        question: 'which represents True or False',
        answersQuiz: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswerIndex: 1

    },

    {
        question: 'which is used to style the website',
        answersQuiz: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswerIndex: 4
        
    },
    {
        question: 'which is used for data values that are made up of ordered sequences of characters',
        answersQuiz: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswerIndex: 3
        
    }
];

var startButton = document.getElementById('start-button')
var questionElement = document.getElementById('question')
var buttonsAnswer = document.getElementById('answer-buttons')
var questionContainer= document.getElementById('question-container')
var questionsQuiz, currentQuestionIndex 

startButton.addEventListener('click', quizStart)

function quizStart(){
    console.log('started')
    startButton.classList.add('hide')
    questionsQuiz = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainer.classList.remove('hide')
    nextQuestion()

}

function nextQuestion(){
    questionNext(questionsQuiz[currentQuestionIndex])

}

function showContent(){
    questionElement.innerText = question.question
}


function chooseAnswer(){

}
