import inquirer from 'inquirer';

// Define the quiz questions and answers
const quizQuestions = [
  {
    question: 'What is the capital of France?',
    choices: ['London', 'Berlin', 'Paris', 'Madrid'],
    answer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    choices: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
    answer: 'Mars',
  },
  {
    question: 'How many continents are there on Earth?',
    choices: ['5', '6', '7', '8'],
    answer: '7',
  },
];

interface QuizResult {
  correct: number;
  total: number;
}

async function main() {
  console.log('Welcome to the Quiz App!\n');

  const quizResult: QuizResult = {
    correct: 0,
    total: quizQuestions.length,
  };

  for (const question of quizQuestions) {
    const answer = await inquirer.prompt({
      type: 'list',
      name: 'answer',
      message: question.question,
      choices: question.choices,
    });

    if (answer.answer === question.answer) {
      console.log('Correct!\n');
      quizResult.correct++;
    } else {
      console.log(`Wrong! The correct answer is: ${question.answer}\n`);
    }
  }

  console.log(`Quiz completed! You answered ${quizResult.correct} out of ${quizResult.total} questions correctly.`);
}

main();
