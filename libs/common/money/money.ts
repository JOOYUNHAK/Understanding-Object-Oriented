export class Money {
  static ZERO = Money.wons(0);

  private _amount: number;

  constructor(amount: number) {
    this._amount = amount;
  }

  get amount(): number {
    return this._amount;
  }

  static wons(amount: number): Money {
    return new Money(amount);
  }

  plus(amount: Money) {
    return new Money(this._amount + amount.amount);
  }

  minus(amount: Money) {
    return new Money(this._amount - amount.amount);
  }

  times(percent: number) {
    return new Money(this._amount * percent);
  }

  isLessThan(other: Money) {
    return this._amount < other.amount;
  }

  isGreaterThanOrEqual(other: Money) {
    return this._amount >= other._amount;
  }
}
