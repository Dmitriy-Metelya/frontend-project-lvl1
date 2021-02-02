import random from '../libs/random.js';
import playBrainGame from '../index.js';

const question = 'What is the result of the expression?';
const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};
const calculate = (
  firstNum,
  secondNum,
  operationType,
) => operations[operationType](firstNum, secondNum);

const generateRound = () => {
  const round = {};
  const firstNum = random(0, 100);
  const secondNum = random(0, 100);
  const operationTypes = ['+', '-', '*'];
  const operationIndex = random(0, operationTypes.length - 1);

  round.question = `${firstNum} ${operationTypes[operationIndex]} ${secondNum}`;
  round.correctAnswer = calculate(firstNum, secondNum, operationTypes[operationIndex]).toString();

  return round;
};

export default () => playBrainGame(question, generateRound);
