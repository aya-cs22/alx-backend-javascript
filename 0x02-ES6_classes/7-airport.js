export default class  Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    this.name;
  }

  get code() {
    this.code;
  }

  set name(value) {
    this._name = value;
  }

  set code(value) {
    this._code = value;
  }
  toString() {
    return `[object ${this._code}]`;
  }
}
