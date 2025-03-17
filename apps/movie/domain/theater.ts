import { Audience } from './audience';
import { TicketSeller } from './ticket-seller';

export class Theater {
  private _ticketSeller: TicketSeller;

  constructor(ticketSeller: TicketSeller) {
    this._ticketSeller = ticketSeller;
  }

  enter(audience: Audience) {
    this._ticketSeller.sellTo(audience);
  }
}
