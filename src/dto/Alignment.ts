import { Order } from "../enums/Order";
import { Moral } from "../enums/Moral";

export class Alignment {
  private moral: Moral;
  private order: Order;

  constructor(moral?: Moral, order?: Order, init?: Partial<Alignment>) {
    this.moral = moral || Moral.NEUTRAL;
    this.order = order || Order.NEUTRAL;
    if (init) {
      Object.assign(this, init);
    }
  }

  public getMoral(): Moral {
    return this.moral;
  }

  public getOrder(): Order {
    return this.order;
  }
}
