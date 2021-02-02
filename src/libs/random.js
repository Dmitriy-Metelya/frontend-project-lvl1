/* this function returns integers in the range from includedBegin (included)
to includedEnd (included) */

const getRandomInt = (includedBegin, includedEnd) => {
  const range = includedEnd - includedBegin + 1;

  return Math.floor(Math.random() * range) + includedBegin;
};

export default getRandomInt;
