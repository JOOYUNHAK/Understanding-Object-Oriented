import { Ticket } from './ticket';

export class TicketOffice {
  private _amount: number;
  private _tickets: Ticket[];

  constructor(amount: number, tickets: Ticket[]) {
    this._amount = amount;
    this._tickets = tickets;
  }

  issueTicket(): Ticket {
    return this._tickets.shift();
  }

  minusAmount(amount: number) {
    this._amount -= amount;
  }

  plusAmount(amount: number) {
    this._amount += amount;
  }
}
