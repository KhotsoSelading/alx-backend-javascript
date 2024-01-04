export default class Pricing {
  // Pricing class attributes
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // get and set methods for amount
  get amount() {
    return this._amount;
  }

  set amount(n) {
    this._amount = n;
  }

  // get and set methods for currency
  get currency() {
    return this._currency;
  }

  set currency(n) {
    this._currency = n;
  }

  // displayFullPrice method
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // convertPrice method
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
