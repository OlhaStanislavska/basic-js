const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const length = n.toString().split('').length;
  let max = 0;
  for (let i = 0; i < length; i++) {
    const curArr = n.toString().split('');
    curArr.splice(i, 1);
    const curMax = Number(curArr.join(''));
    if (curMax > max) max = curMax;
  }
  return max;
}

module.exports = {
  deleteDigit
};
