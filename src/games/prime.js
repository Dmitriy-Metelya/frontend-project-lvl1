import random from '../libs/random.js';
import playBrainGame from '../index.js';

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const generateRound = () => {
  const round = {};
  const number = random(0, 100);

  round.question = number;
  round.correctAnswer = isPrime(number) ? 'yes' : 'no';

  return round;
};

export default () => playBrainGame(question, generateRound);
