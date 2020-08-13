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
        'question': 'CSS1?',
        'answer_1': 'CSS1a',
        'answer_2': 'w',
        'answer_3': 'Trr',
        'answer_4': 'rt',
        'right-answer': 1
    },
    {   //question#5
        'question': 'CSS1?',
        'answer_1': 'CSS1a',
        'answer_2': 'w',
        'answer_3': 'Trr',
        'answer_4': 'rt',
        'right-answer': 1
    },
    {   //question#6
        'question': 'CSS1?',
        'answer_1': 'CSS1a',
        'answer_2': 'w',
        'answer_3': 'Trr',
        'answer_4': 'rt',
        'right-answer': 1
    },
    {   //question#7
        'question': 'CSS1?',
        'answer_1': 'CSS1a',
        'answer_2': 'w',
        'answer_3': 'Trr',
        'answer_4': 'rt',
        'right-answer': 1
    },
    {   //question#8
        'question': 'CSS1?',
        'answer_1': 'CSS1a',
        'answer_2': 'w',
        'answer_3': 'Trr',
        'answer_4': 'rt',
        'right-answer': 1
    },
    {   //question#9
        'question': 'CSS1?',
        'answer_1': 'CSS1a',
        'answer_2': 'w',
        'answer_3': 'Trr',
        'answer_4': 'rt',
        'right-answer': 1
    },
    {   //question#10
        'question': 'CSS1?',
        'answer_1': 'CSS1a',
        'answer_2': 'w',
        'answer_3': 'Trr',
        'answer_4': 'rt',
        'right-answer': 1
    }
];

let right_answer;
let question_number = 0;
let progress = 0;

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

function loadQuestion() {
    document.getElementById('question').innerHTML = allQuestions[question_number]['question'];
    document.getElementById('answer1').innerHTML = allQuestions[question_number]['answer_1'];
    document.getElementById('answer2').innerHTML = allQuestions[question_number]['answer_2'];
    document.getElementById('answer3').innerHTML = allQuestions[question_number]['answer_3'];
    document.getElementById('answer4').innerHTML = allQuestions[question_number]['answer_4'];
    right_answer = allQuestions[question_number]['right-answer'];
}

function nextQuestion() {

    if (question_number == allQuestions.length) {
        finishQuiz();
    } else {
        progress = Math.round((question_number / allQuestions.length) * 100);
        question_number = question_number + 1;
        //document.getElementById('progress-bar').innerHTML = progress + '%';
        //document.getElementById('progress-bar').style.width = progress + '%';
        loadQuestion();
    }
}

function finishQuiz() {

    if (question_number == allQuestions.length) {
        document.getElementById('quizcontainer').classList.add('d-none');
        document.getElementById('quizdone').classList.remove('d-none');
    } else {
        document.getElementById('quizdone').classList.add('d-none');
    }
}

function answer(a) {

    if (a == right_answer) { //right answer
        document.getElementById('answer-container').classList.add('answer-correct');
        //show next button 
        document.getElementById('next').classList.remove('d-none');


    } else {

        document.getElementById('answer-container').classList.add('answer-wrong');
    }
}

function backQuestion() {
    if (question_number > 1) {
        document.getElementById('back').classList.remove('d-none');
    } else {
        document.getElementById('back').classList.add('d-none');
    }
}