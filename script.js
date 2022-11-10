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


const quiz = document.getElementById('quiz');
const answerELs = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers()
  // to print out the quiz questions
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

  // currentQuiz += 1;
}

function getSelected(){
  let answer = undefined;

  answerELs.forEach((answerEl) => {
    if(answerEl.checked) {
      answer = answerEl.id;
    }
  });

  // console.log(answer);
  return answer;
}

function deselectAnswers(){
  answerELs.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
    const answer = getSelected();

    // console.log(quizData[currentQuiz])
        if(answer){
          if(answer === quizData[currentQuiz].correct){
            score++;
          }
          currentQuiz++;
          if(currentQuiz < quizData.length) {
            loadQuiz();
          } else {
            //TODO: Show results
            quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload Quiz!</button>`;
          }
        }
  });
