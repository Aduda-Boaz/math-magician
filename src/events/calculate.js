import Big from 'big-js';

const calculate = (numOne, numTwo, calculation) => {
  const one = Big(numOne);
  const two = Big(numTwo);
  if (calculation === '+') {
    return one.plus(two).toString();
  }
  if (calculation === '-') {
    return one.minus(two).toString();
  }
  if (calculation === '*') {
    return one.times(two).toString();
  }
  if (calculation === '/') {
    try {
      return one.divide(two).toString();
    } catch (error) {
      return 'Not divisible by 0.';
    }
  }
  if (calculation === '%') {
    try {
      return one.mod(two).toString;
    } catch (error) {
      return 'Module not found, not divisible by 0.';
    }
  }
  throw Error(`Unknown calculation '${calculation}'`);
};

export default calculate;
