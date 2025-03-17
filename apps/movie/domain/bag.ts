import { Invitation } from './invitation';
import { Ticket } from './ticket';

export class Bag {
  private _amount: number;
  private _invitation: Invitation;
  private _ticket: Ticket;

  // 생성 시점에 제약을 강제해보자
  constructor(amount: number, invitation?: Invitation) {
    this._amount = amount;
    this._invitation = invitation;
  }

  set ticket(ticket: Ticket) {
    this._ticket = ticket;
  }

  minusAmount(amount: number) {
    this._amount -= amount;
  }

  plusAmount(amount: number) {
    this._amount += amount;
  }

  hasInvitation(): boolean {
    return !!this._invitation;
  }

  hasTicket(): boolean {
    return !!this._ticket;
  }
}
