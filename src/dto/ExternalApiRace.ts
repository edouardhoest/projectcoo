import { ExternalApiSpecy } from "./externalApiSpecy";

export class ExternalApiRace {
  constructor(count: number, results: ExternalApiSpecy[]) {
    this._count = count;
    this._results = results;
  }

  private _count: number;

  get count(): number {
    return this._count;
  }

  private _results: ExternalApiSpecy[];

  get results(): ExternalApiSpecy[] {
    return this._results;
  }

  static fromJson(json: any): ExternalApiRace {
    const count = json.count;
    const results: ExternalApiSpecy[] = json.results;
    return new ExternalApiRace(count, results);
  }

  resultsNames(): string[] {
    return this.results.map((result) => result.name);
  }
}
