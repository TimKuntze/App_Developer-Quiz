//questions
let allQuestions = [
    {   //question#1
        'question': 'Who invented HTML?',
        'answer_1': 'Tim Berners-Lee',
        'answer_2': 'Bill Gates',
        'answer_3': 'Tim Cook',
        'answer_4': 'Steve Wozniak',
        'right-answer': 1
    },
    {   //question#2
        'question': 'What does HTML stand for?',
        'answer_1': 'Hypertext Markup Language',
        'answer_2': 'Homepage Tool Markup Language',
        'answer_3': 'Hyperlink and Text Markup Language',
        'answer_4': 'Hyper Technical Mashup Language ',
        'right-answer': 1
    },
    {   //question#3
        'question': 'Who is making the Web standards?',
        'answer_1': 'Microsoft',
        'answer_2': 'Mozilla',
        'answer_3': 'The World Wide Web Consortium',
        'answer_4': 'Google',
        'right-answer': 3
    },
    {   //question#4
        'question': 'What does CSS stand for?',
        'answer_1': 'Colorful Style Sheets',
        'answer_2': 'Cascading Style Sheets',
        'answer_3': 'Creative Style Sheets',
        'answer_4': 'Computer Style Sheets',
        'right-answer': 2
    },
    {   //question#5
        'question': 'Where to refer to an external style sheet?',
        'answer_1': 'Body Section',
        'answer_2': 'Head Section',
        'answer_3': 'At the very beginning',
        'answer_4': 'At the very end',
        'right-answer': 2
    },
    {   //question#6
        'question': 'Which CSS property controls the text size?',
        'answer_1': 'text-style',
        'answer_2': 'font-style',
        'answer_3': 'text-size',
        'answer_4': 'font-size',
        'right-answer': 4
    },
    {   //question#7
        'question': 'How do you write "Hello World" in an alert box?',
        'answer_1': 'msg("Hello World")',
        'answer_2': 'alert("Hello World")',
        'answer_3': 'alertBox("Hello World")',
        'answer_4': 'msgBox("Hello World")',
        'right-answer': 2
    },
    {   //question#8
        'question': 'What occurs when the user clicks on an HTML element?',
        'answer_1': 'onmouseover',
        'answer_2': 'onchange',
        'answer_3': 'onclick',
        'answer_4': 'onmouseclick',
        'right-answer': 3
    },
    {   //question#9
        'question': 'Which data type is used for a variable to store text?',
        'answer_1': 'myString',
        'answer_2': 'Txt',
        'answer_3': 'String',
        'answer_4': 'txtString',
        'right-answer': 3
    }
];

let right_answer;
let question_number = 0;
let progress = 0;
let blockSelection = false;

function hideElements() {
    document.getElementById('text').style.display = 'none';
    document.getElementById('main-image').style.display = 'none';
    document.getElementById('start-btn-container').style.display = 'none';
    document.getElementById('nav-bar').classList.add('d-none');
}

function startQuiz() {
    hideElements();
    document.getElementById('question').classList.remove('d-none');
    document.getElementById('instruction').classList.remove('d-none');
    document.getElementById('nav-bar-html').classList.remove('d-none');
    loadQuestion();
}

function navbarSelection() {
    if (question_number > 0) {
        document.getElementById('back').classList.remove('d-none'); 
    }
    if (question_number > 2) {
        document.getElementById('nav-bar-html').classList.add('d-none');
        document.getElementById('nav-bar-css').classList.remove('d-none');
    }
    if (question_number > 5) {
        document.getElementById('nav-bar-html').classList.add('d-none');
        document.getElementById('nav-bar-css').classList.add('d-none');
        document.getElementById('nav-bar-js').classList.remove('d-none');
    } 
    if (question_number > 7) {
        document.getElementById('nav-bar-html').classList.add('d-none');
        document.getElementById('nav-bar-css').classList.add('d-none');
        document.getElementById('nav-bar-js').classList.add('d-none');
        document.getElementById('nav-bar-java').classList.remove('d-none');
    } 
}

function loadQuestion() {
    progressBar();
    document.getElementById('question').innerHTML = allQuestions[question_number]['question'];
    document.getElementById('answer1').innerHTML = allQuestions[question_number]['answer_1'];
    document.getElementById('answer2').innerHTML = allQuestions[question_number]['answer_2'];
    document.getElementById('answer3').innerHTML = allQuestions[question_number]['answer_3'];
    document.getElementById('answer4').innerHTML = allQuestions[question_number]['answer_4'];
    right_answer = allQuestions[question_number]['right-answer'];
    
}

function nextQuestion() {
    blockSelection = false;
    if (question_number == allQuestions.length) {
        finishQuiz();
    } else {
        question_number = question_number + 1;
        loadQuestion();
        navbarSelection();
    }
}

function backQuestion() {
    blockSelection = false;
    if (question_number > 0) {
        question_number = question_number - 1;
        loadQuestion();
    } 
    if (question_number == 0) {
        document.getElementById('back').classList.add('d-none');
        loadQuestion();
    } 
}

function progressBar() {
    progress = Math.round((question_number / allQuestions.length) * 100);
    //document.getElementById('progress-bar').innerHTML = progress + '%';
    document.getElementById('progress-bar').style.width = progress + '%';
}

function finishQuiz() {
    document.getElementById('resultpage').classList.remove('d-none'); 
    document.getElementById('question').classList.add('d-none');
    document.getElementById('instruction').classList.add('d-none');
    document.getElementById('nav-bar-html').classList.add('d-none');
    document.getElementById('nav-bar-java').classList.add('d-none');
    document.getElementById('nav-bar').classList.remove('d-none');
    document.getElementById('answer-buttons').classList.add('d-none');
    document.getElementById('back').classList.add('d-none');

}

function repeatQuiz() {
    document.getElementById('answer-buttons').classList.remove('d-none');
    document.getElementById('resultpage').classList.add('d-none'); 
    hideElements();
    document.getElementById('question').classList.remove('d-none');
    document.getElementById('instruction').classList.remove('d-none');
    document.getElementById('nav-bar-html').classList.remove('d-none');
    question_number = 0; 
    document.getElementById('back').classList.add('d-none');
    loadQuestion();

}

function answer(a) {
    if (blockSelection == false) {
        blockSelection = true;
        if (a == right_answer) { //right answer
            document.getElementById('answer-container').classList.add('answer-correct');
            //show next button 
            document.getElementById('next').classList.remove('d-none');
        } else {
            document.getElementById('answer-container').classList.add('answer-wrong');
        }
    }
}



