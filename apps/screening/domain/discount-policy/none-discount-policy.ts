import { Money } from '@libs/common/money';
import { Screening } from '../screening';
import { DiscountPolicy } from './discount-policy.interface';

export class NoneDiscountPolicy implements DiscountPolicy {
  calculateDiscountAmount(_screening: Screening): Money {
    return Money.ZERO;
  }
}
