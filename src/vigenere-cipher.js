const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(param = true) {
    this.isReversed = param === false;
  }
  getCipher(str, key) {
    let cipher = '';
    key = String(key).toUpperCase();
    if (key.length >= str.length) {
      cipher = key.slice(0, str.length);
    } else {
      for (let i = 0; i < str.length; i++) {
        cipher += key[i % key.length];
      }
    }
    return cipher;
  }
  checkKey(str, key) {
    if (!str || !key) throw new Error('Incorrect arguments!');
  }
  encrypt(str, key) {
    this.checkKey(str, key);
    const cipher = this.getCipher(str, key);
    let i = 0;
    let result = str.toUpperCase().split('').map((el, index) => {
      if (el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90) {
        i = i === 0 && index !== 0 ? index : i;
        el = String.fromCharCode(65 + (el.charCodeAt(0) + cipher.charCodeAt(i)) % 26);
        i++;
      } 
      return el;
    });
    return this.isReversed ? result.reverse().join('') : result.join('');
  }
  decrypt(str, key) {      
    this.checkKey(str, key);
    const cipher = this.getCipher(str, key);
    let i = 0;
    let result = str.toUpperCase().split('').map((el, index) => {
      if (el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90) {
        i = i === 0 && index !== 0 ? index : i;
        el = String.fromCharCode(65 + (el.charCodeAt(0) + 26 - cipher.charCodeAt(i)) % 26);
        i++;
      } 
      return el;
    });
    return this.isReversed ? result.reverse().join('') : result.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
