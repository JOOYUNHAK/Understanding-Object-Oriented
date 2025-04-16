import { DiscountCondition } from './discount-condition.interface';

export class SequenceCondition implements DiscountCondition {
  private _sequence: number;

  constructor(sequence: number) {
    this._sequence = sequence;
  }

  isSatisfiedBy(screening: any): boolean {
    return screening.isSequence(this._sequence);
  }
}
