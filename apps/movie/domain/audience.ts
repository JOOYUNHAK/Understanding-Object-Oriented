import { Bag } from './bag';
import { Ticket } from './ticket';

export class Audience {
  private _bag: Bag;

  constructor(bag: Bag) {
    this._bag = bag;
  }

  buy(ticket: Ticket) {
    return this._bag.hold(ticket);
  }
}
