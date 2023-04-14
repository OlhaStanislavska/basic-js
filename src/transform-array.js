const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * ['--discard-prev', 1, 2, 3],
*  ['--double-prev', 1, 2, 3],
*  [1, 2, 3, '--double-next'],
*  [1, 2, 3, '--discard-next']
*  input: [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5], output: [1, 2, 3, 4, 5]
*  input: [1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5], output: [1, 2, 3, 1337, 1337, 1337, 4, 5]
*  input: [1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5], output: [1, 2, 3, 4, 5]
*  input: [1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5], output: [1, 2, 3, 1337, 4, 5]
 */

function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  const res = [];  
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      if (arr[i + 1] === '--double-prev') {
        res.push(arr[i]);
        res.push(arr[i]);
      } else if (arr[i + 1] === '--discard-prev') {
        continue;
      } else {
        res.push(arr[i]);
      }
    } else if (arr[i] === '--double-next' && (i + 1) < arr.length) {
      res.push(arr[i + 1]);
    } else if (arr[i] === '--double-next' && i === (arr.length - 1)) {
      continue;
    } else if (arr[i] === '--discard-prev') {
      continue;
    } else if (arr[i] === '--double-prev') {
      continue;
    } else if (arr[i] === '--discard-next') {
      i++;
    } else if (isNaN(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
}

module.exports = {
  transform
};
