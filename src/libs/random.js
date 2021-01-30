/* this function returns integers in the range from includedBegin (included)
to includedEnd (included) default range is [0, 100] */

const getRandomInt = (includedBegin = 0, includedEnd = 100) => {
  const range = includedEnd - includedBegin + 1;

  return Math.floor(Math.random() * range) + includedBegin;
};

export default getRandomInt;
