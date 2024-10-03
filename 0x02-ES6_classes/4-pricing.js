import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount === 'number') this._amount = amount;
    else throw new TypeError('Amount must be a number');

    if (currency instanceof Currency) this._currency = currency;
    else throw new TypeError('Currency must be a Currency');
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(newAmount) {
    if (typeof newAmount === 'number') this._amount = newAmount;
    else throw new TypeError('Amount must be a number');
  }

  set currency(newCurrency) {
    if (newCurrency instanceof Currency) this._currency = newCurrency;
    else throw new TypeError('Currency must be a Currency');
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number') {
      if (typeof conversionRate === 'number') return amount * conversionRate;
      throw new TypeError('Conversion rate must be a number');
    } else throw new TypeError('Amount must be a number');
  }
}
