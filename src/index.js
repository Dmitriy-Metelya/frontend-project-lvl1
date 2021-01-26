import promptly from 'promptly';

const getName = async () => {
  const userName = await promptly.prompt('May I have your name? ', { default: 'Incognito' });

  return userName;
};

export default async (question, generateRound) => {
  console.log('Welcome to the Brain Games!');

  const userName = await getName();

  console.log(`Hello, ${userName}!`);
  console.log(question);

  for (let i = 0; i < 3; i += 1) {
    const round = generateRound();

    console.log(`Question: ${round.question}`);

    const answer = await promptly.prompt('Your answer: ');

    if (answer === round.correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${round.correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
