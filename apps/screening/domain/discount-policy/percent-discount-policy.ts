import { Money } from '@libs/common/money';
import { DiscountCondition } from '../discount-condition';
import { Screening } from '../screening';
import { DefaultDiscountPolicy } from './discount-policy.interface';

export class PercentDiscountPolicy extends DefaultDiscountPolicy {
  private _percent: number;

  constructor(percent: number, conditions: DiscountCondition[]) {
    super(conditions);
    this._percent = percent;
  }

  protected override getDiscountAmount(screening: Screening): Money {
    return screening.getMovieFee().times(this._percent);
  }
}
