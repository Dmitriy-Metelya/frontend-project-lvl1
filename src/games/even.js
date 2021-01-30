import random from '../libs/random.js';
import playBrainGame from '../index.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => !(num % 2);

const generateRound = () => {
  const round = {};

  round.question = random();
  round.correctAnswer = isEven(round.question) ? 'yes' : 'no';

  return round;
};

export default () => playBrainGame(question, generateRound);
