import { Money } from '@libs/common/money';
import { DiscountCondition } from '../discount-condition';
import { Screening } from '../screening';

export abstract class DiscountPolicy {
  private _conditions: DiscountCondition[];

  constructor(conditions: DiscountCondition[]) {
    this._conditions = conditions;
  }

  calculateDiscountAmount(screening: Screening): Money {
    for (const condition of this._conditions) {
      if (condition.isSatisfiedBy(screening)) {
        return this.getDiscountAmount(screening);
      }
    }
  }

  protected abstract getDiscountAmount(screening: Screening): Money;
}
