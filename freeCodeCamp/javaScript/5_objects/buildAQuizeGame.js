const questions = [
  {
    category: 'Many',
    question: 'How many?',
    choices: ['Little', 'Middle', 'Big'],
    answer: 'Big',
  },
  {
    category: 'People',
    question: 'How many people?',
    choices: ['a lot', 'esy', 'right'],
    answer: 'a lot',
  },
  {
    category: 'Do',
    question: 'How do you do?',
    choices: ['all ok', 'bad', 'sad'],
    answer: 'sad',
  },
  {
    category: 'How',
    question: 'How are you?',
    choices: ['sad', 'bad', 'bug'],
    answer: 'bug',
  },
  {
    category: 'Name',
    question: 'Thats your name?',
    choices: ['Maks', 'Incvisitor', 'Terminator'],
    answer: 'Maks',
  }
];

function getRandomQuestion(listQuestions) {
  let randomNumber = Math.floor(Math.random() * listQuestions.length);

  return listQuestions[randomNumber];
}

function getRandomComputerChoice(listAnswers) {
  let randomNumber = Math.floor(Math.random() * listAnswers.length);

  return listAnswers[randomNumber];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}