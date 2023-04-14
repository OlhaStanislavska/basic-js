const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let temp = '';
  for (let i = 0; i < str.length; i++) {
    if (i === 0) temp = str[i];
    else {
      if (str[i] === str[i - 1]) {
        temp += str[i];
      } else {
        if (temp.length === 1) {
          result += temp;
          temp = str[i];
        } else {
          result += `${temp.length}${temp[0]}`;
          temp = str[i];
        }
      }
    }
    if (i === (str.length - 1)) {
      if (temp.length === 1) {
          result += temp;
          temp = str[i];
        } else {
          result += `${temp.length}${temp[0]}`;
          temp = str[i];
        }
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
