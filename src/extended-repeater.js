const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const createStr = (s, n, sep) => {
    return Array(n).fill(s).join(sep);
  }
  const addStr = String(options.addition) !== 'undefined' ? createStr(String(options.addition), options.additionRepeatTimes || 1, options.additionSeparator || '|') : '';
  return createStr(String(str) + addStr, options.repeatTimes || 1, options.separator || '+');
}

module.exports = {
  repeater
};
