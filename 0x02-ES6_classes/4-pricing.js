import Currency from './3-currency';

export default class extends Currency {
  constructor(amount, currency) {
    super(currency.name, currency.code);
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(value) {
    this._amount = value;
  }

  set currency(value) {
    this._currency = value;
  }

  displayFullPrice() {
    const currency = this._currency;
    return `${this.amount} ${currency.name} (${currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
