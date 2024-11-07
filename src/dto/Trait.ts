export class Trait {
  private readonly _id: string;
  private readonly _name: string;
  private readonly _description: string;

  constructor(id: string, name: string, description: string) {
    this._id = id;
    this._name = name;
    this._description = description;
  }

  get id(): string {
    return this._id;
  }

  get description(): string {
    return this._description;
  }

  get name(): string {
    return this._name;
  }

  static fromJson(json: any): Trait {
    return new Trait(json.index, json.name, json.desc);
  }
}
