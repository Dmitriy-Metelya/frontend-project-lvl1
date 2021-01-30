import random from '../libs/random.js';
import playBrainGame from '../index.js';

const question = 'What is the result of the expression?';

const calculate = (firstNum, secondNum, operationIndex) => {
  const operations = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b];

  return operations[operationIndex](firstNum, secondNum);
};

const generateRound = () => {
  const round = {};
  const operationIndex = random(0, 2);
  const operationTypes = ['+', '-', '*'];
  const firstNum = random();
  const secondNum = random();

  round.question = `${firstNum} ${operationTypes[operationIndex]} ${secondNum}`;
  round.correctAnswer = calculate(firstNum, secondNum, operationIndex).toString();

  return round;
};

export default () => playBrainGame(question, generateRound);
