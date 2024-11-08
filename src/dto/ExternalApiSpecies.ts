export class ExternalApiSpecies {
  private readonly _url: string;
  private readonly _name: string;
  private readonly _index: string;

  constructor(index: string, name: string, subSpecies: string[], url: string) {
    this._url = url;
    this._name = name;
    this._index = index;
    this._subSpecies = subSpecies;
  }

  private _subSpecies: string[];

  get index(): string {
    return this._index;
  }

  get name(): string {
    return this._name;
  }

  get url(): string {
    return this._url;
  }

  get subSpecies(): string[] {
    return this._subSpecies;
  }

  set subSpecies(subSpecies: string[]) {
    this._subSpecies = subSpecies;
  }
}
