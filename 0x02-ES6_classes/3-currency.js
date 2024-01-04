export default class Currency {
  constructor(code, name) {
    // Currency class attributes
    this._code = code;
    this._name = name;
  }

  // get and set method for code
  get code() {
    return this._code;
  }

  set code(n) {
    this._code = n;
  }

  // get and set method for name
  get name() {
    return this._name;
  }

  set name(n) {
    this._name = n;
  }

  // displayFullCurrency method
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
