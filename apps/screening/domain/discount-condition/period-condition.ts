import { Time } from '@libs/common';
import { DiscountCondition } from './discount-condition.interface';
import { Screening } from '../screening';

export class PeriodCondition implements DiscountCondition {
  private _dayOfWeek: number;
  private _startTime: Time;
  private _endTime: Time;

  constructor(dayOfWeek: number, startTime: Time, endTime: Time) {
    this._dayOfWeek = dayOfWeek;
    this._startTime = startTime;
    this._endTime = endTime;
  }

  isSatisfiedBy(screening: Screening): boolean {
    return (
      screening.startTime.getDayOfWeek() === this._dayOfWeek &&
      this._startTime <= screening.startTime &&
      this._endTime >= screening.startTime
    );
  }
}
