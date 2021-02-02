import random from '../libs/random.js';
import playBrainGame from '../index.js';

const question = 'What is the result of the expression?';

const calculate = (firstNum, secondNum, operationType) => {
  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };

  return operations[operationType](firstNum, secondNum);
};

const generateRound = () => {
  const round = {};
  const firstNum = random();
  const secondNum = random();
  const operationTypes = ['+', '-', '*'];
  const operationIndex = random(0, 2);

  round.question = `${firstNum} ${operationTypes[operationIndex]} ${secondNum}`;
  round.correctAnswer = calculate(firstNum, secondNum, operationTypes[operationIndex]).toString();

  return round;
};

export default () => playBrainGame(question, generateRound);
