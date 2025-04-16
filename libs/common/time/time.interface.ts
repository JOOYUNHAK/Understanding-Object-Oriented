export interface Time {
  getDayOfWeek(): number;
}

export class LocalTime implements Time {
  private _date: Date;

  constructor(date: Date) {
    this._date = date;
  }

  static now(): Date {
    return new Date();
  }

  getDayOfWeek(): number {
    return this._date.getDay();
  }
}
