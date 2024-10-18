import { Specy } from "./Specy";

class SubSpecy extends Specy {
  constructor(init?: Partial<SubSpecy>) {
    super(init);
    Object.assign(this, init);
  }
}
