import { Time } from '@libs/common';
import { Money } from '@libs/common/money';
import { Movie } from './movie';

export class Screening {
  private _movie: Movie;
  private _sequence: number;
  private _whenScreened: Time;

  constructor(movie: any, sequence: number, whenScreened: Time) {
    this._movie = movie;
    this._sequence = sequence;
    this._whenScreened = whenScreened;
  }

  get startTime(): Time {
    return this._whenScreened;
  }

  isSequence(sequence: number): boolean {
    return this._sequence === sequence;
  }

  getMovieFee(): Money {
    return this._movie.fee;
  }
}
