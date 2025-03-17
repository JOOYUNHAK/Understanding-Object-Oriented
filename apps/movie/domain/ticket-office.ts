import { Audience } from './audience';
import { Ticket } from './ticket';

export class TicketOffice {
  private _amount: number;
  private _tickets: Ticket[];

  constructor(amount: number, tickets: Ticket[]) {
    this._amount = amount;
    this._tickets = tickets;
  }

  minusAmount(amount: number) {
    this._amount -= amount;
  }

  sellTicketTo(audience: Audience) {
    this.plusAmount(audience.buy(this.issueTicket()));
  }

  private issueTicket(): Ticket {
    return this._tickets.shift();
  }

  private plusAmount(amount: number) {
    this._amount += amount;
  }
}
