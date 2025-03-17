import { Bag } from './bag';
import { Ticket } from './ticket';

export class Audience {
  private _bag: Bag;

  constructor(bag: Bag) {
    this._bag = bag;
  }

  get bag(): Bag {
    return this._bag;
  }

  buy(ticket: Ticket) {
    if (this._bag.hasInvitation()) {
      this._bag.ticket = ticket;
      return 0;
    } else {
      this._bag.ticket = ticket;
      this._bag.minusAmount(ticket.fee);
      return ticket.fee;
    }
  }
}
