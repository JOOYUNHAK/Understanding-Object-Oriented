import { Money } from '@libs/common/money';
import { Screening } from '../screening';
import { DiscountPolicy } from './discount-policy.interface';

export class NoneDiscountPolicy extends DiscountPolicy {
  protected override getDiscountAmount(_screening: Screening): Money {
    return Money.ZERO;
  }
}
