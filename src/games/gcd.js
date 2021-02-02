import random from '../libs/random.js';
import playBrainGame from '../index.js';

const question = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (firstNum, secondNum) => {
  let a = Math.max(firstNum, secondNum);
  let b = Math.min(firstNum, secondNum);
  let remainder = a % b;

  while (remainder !== 0) {
    a = b;
    b = remainder;
    remainder = a % b;
  }

  return b;
};

const generateRound = () => {
  const round = {};
  const firstNum = random(1, 100);
  const secondNum = random(1, 100);

  round.question = `${firstNum} ${secondNum}`;
  round.correctAnswer = getGreatestCommonDivisor(firstNum, secondNum).toString();

  return round;
};

export default () => playBrainGame(question, generateRound);
