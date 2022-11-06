const quizData = [
  {
    question: 'Who was the first president of the United States',
    a: 'Hamed Aljamry',
    b: 'George Washington',
    c: 'John Adams',
    d: 'James Madison',
    correct: 'b'
  }, {
    question: 'Who invented the "Ruby" programming language?',
    a: 'Yukihiro Matsumoto',
    b: 'Lukas Musilek',
    c: 'Tim Berners-Lee',
    d: 'James Gosling',
    correct: 'a'
  }, {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Helicopters Terminals Motorboats Lambourghinis',
    c: 'Hightext Markup Lines',
    d: 'Hamburger Touches Mustard Love',
    correct: 'a'
  }, {
    question: 'Who won the 2010 World Cup?',
    a: 'Brazil🇧🇷',
    b: 'Germany🇩🇪',
    c: 'Sweden🇸🇪',
    d: 'España🇪🇸',
    correct: 'd'
  }, {
    question: 'What year was Javascript launched?',
    a: '1993',
    b: '1997',
    c: '2003',
    d: 'None of the above',
    correct: 'd'
  }
]

const questionEl = document.getElementById('question');


const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
  // to print out the quiz questions
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

  currentQuiz += 1;
}
