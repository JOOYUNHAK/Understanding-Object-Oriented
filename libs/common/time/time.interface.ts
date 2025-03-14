export interface Time {
  now(): Date;
}

export class LocalTime implements Time {
  now(): Date {
    return new Date();
  }
}
