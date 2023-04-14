const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const index = arr.reduce((acc, el, idx) => {
    if (el === -1) acc.push(idx);
    return acc;
  }, []);
  let res = arr.filter(el => el !== -1).sort((a, b) => a - b);
  index.forEach(ind => res.splice(ind, 0, -1));
  return res;
}

module.exports = {
  sortByHeight
};
