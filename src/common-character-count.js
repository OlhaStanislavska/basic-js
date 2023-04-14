const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const obj1 = s1.split('').reduce((acc, el) => {
    acc[el] ? acc[el]++ : acc[el] = 1;
    return acc;}, {});
  const obj2 = s2.split('').reduce((acc, el) => {
    acc[el] ? acc[el]++ : acc[el] = 1;
    return acc;}, {});
  
  for (const key of Object.keys(obj1)) {
    if (obj2[key]) count += Math.min(obj1[key], obj2[key]);
  } 
  return count;
}

module.exports = {
  getCommonCharacterCount
};
