export class ExternalApiSpecy {
  constructor(index: string, name: string, subSpecy: string[], url: string) {
    this._index = index;
    this._name = name;
    this._subSpecy = subSpecy;
    this._url = url;
  }

  private _index: string;

  get index(): string {
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

  private _subSpecy: string[];

  get subSpecy(): string[] {
    return this._subSpecy;
  }

  set subSpecy(subSpecy: string[]) {
    this._subSpecy = subSpecy;
  }
}
