import { Audience } from './audience';
import { TicketSeller } from './ticket-seller';

export class Theater {
  private _ticketSeller: TicketSeller;

  constructor(ticketSeller: TicketSeller) {
    this._ticketSeller = ticketSeller;
  }

  enter(audience: Audience) {
    if (audience.bag.hasInvitation()) {
      const ticket = this._ticketSeller.ticketOffice.issueTicket();
      audience.bag.ticket = ticket;
    } else {
      const ticket = this._ticketSeller.ticketOffice.issueTicket();
      audience.bag.minusAmount(ticket.fee);
      this._ticketSeller.ticketOffice.plusAmount(ticket.fee);
      audience.bag.ticket = ticket;
    }
  }
}
