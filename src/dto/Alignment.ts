import { Order } from "../enums/Order";
import { Moral } from "../enums/Moral";

export class Alignment {
  private moral: Moral;
  private order: Order;

  public getMoral() : Moral{
    return this.moral;
  }

  public getOrder() : Order {
    return this.order;
  }
}
