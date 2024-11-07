import { Specy } from "./Specy";

export class SubSpecy {
  private readonly _name: string;

  constructor(name?: string, init?: Partial<Specy>) {
    Object.assign(this, init);
    this._name = name || "";
  }

  get name(): string {
    return this._name;
  }

  static fromJson(json: any): SubSpecy {
    return new SubSpecy(json.name);
  }
}
