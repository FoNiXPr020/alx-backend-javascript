export default class Currency {
  constructor(code, name) {
    Currency._validateCode(code);
    Currency._validateName(name);
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    Currency._validateCode(code);
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    Currency._validateName(name);
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  static _validateCode(code) {
    if (typeof code !== 'string' || code.trim() === '' || !/^[A-Z$]+$/.test(code)) {
      throw new TypeError('Code must be a non-empty string containing uppercase letters or $ symbol');
    }
  }

  static _validateName(name) {
    if (typeof name !== 'string' || name.trim() === '') {
      throw new TypeError('Name must be a non-empty string');
    }
  }
}
