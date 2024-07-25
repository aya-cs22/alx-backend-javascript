export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(value) {
    this._name = value;
  }

  set code(value) {
    this._code = value;
  }

  get displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
