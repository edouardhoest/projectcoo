import { Species } from "./Species";

export class SubSpecies {
  private readonly _name: string;

  constructor(name?: string, init?: Partial<Species>) {
    Object.assign(this, init);
    this._name = name || "";
  }

  get name(): string {
    return this._name;
  }

  static fromJson(json: any): SubSpecies {
    return new SubSpecies(json.name);
  }
}
