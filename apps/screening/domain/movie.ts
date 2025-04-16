import { Money } from '@libs/common/money';
import { Screening } from './screening';
import { DiscountPolicy } from './discount-policy';

export class Movie {
  private _title: string;
  private _runningTime: number;
  private _fee: Money;
  private _discountPolicy: DiscountPolicy;

  constructor(title: string, runningTime: number, fee: Money, discountPolicy: DiscountPolicy) {
    this._title = title;
    this._runningTime = runningTime;
    this._fee = fee;
    this._discountPolicy = discountPolicy;
  }

  get fee(): Money {
    return this._fee;
  }

  calculateMovieFee(screening: Screening): Money {
    return this._fee.minus(this._discountPolicy.calculateDiscountAmount(screening));
  }
}
