import { TicketOffice } from './ticket-office';

export class TicketSeller {
  private _ticketOffice: TicketOffice;

  constructor(ticketOffice: TicketOffice) {
    this._ticketOffice = ticketOffice;
  }

  get ticketOffice(): TicketOffice {
    return this._ticketOffice;
  }
}
