export class ExternalApiSpecy {
  constructor(index: number, name: string, url: string) {
    this._index = index;
    this._name = name;
    this._url = url;
  }

  private _index: number;

  get index(): number {
    return this._index;
  }

  private _name: string;

  get name(): string {
    return this._name;
  }

  private _url: string;

  get url(): string {
    return this._url;
  }
}
