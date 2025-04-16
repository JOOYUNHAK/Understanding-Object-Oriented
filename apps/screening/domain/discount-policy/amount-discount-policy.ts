import { Money } from '@libs/common/money';
import { DefaultDiscountPolicy } from './discount-policy.interface';
import { DiscountCondition } from '../discount-condition';
import { Screening } from '../screening';

export class AmountDiscountPolicy extends DefaultDiscountPolicy {
  private _discountAmount: Money;

  constructor(discountAmount: Money, conditions: DiscountCondition[]) {
    super(conditions);
    this._discountAmount = discountAmount;
  }

  protected override getDiscountAmount(_screening: Screening): Money {
    return this._discountAmount;
  }
}
