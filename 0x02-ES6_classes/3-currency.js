export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof (newName) === 'string') this._name = newName;
    else throw new TypeError('Name must be a string');
  }

  set code(newCode) {
    if (typeof (newCode) === 'string') this._code = newCode;
    else throw new TypeError('Code must be a string');
  }
}
