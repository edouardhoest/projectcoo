import { ExternalApiSpecy } from "./ExternalApiSpecy";
import { SpecyService } from "../services/SpecyService";

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

  static async fromJson(json: any): Promise<ExternalApiRace> {
    const count = json.count;
    const results: ExternalApiSpecy[] = json.results;
    return new ExternalApiRace(count, results);
  }

  static async specyFromJson(json: any): Promise<ExternalApiRace> {
    const count = json.count;
    const results: ExternalApiSpecy[] = json.results;
    for (const result of results) {
      const specyDetails = (await SpecyService.fetchSpecyDetails(result.index)).json();
      result.subSpecy = this.subSpeciesFromResponse(await specyDetails);
    }
    return new ExternalApiRace(count, results);
  }

  static subSpeciesFromResponse(json: any): string[] {
    const results: string[] = [];
    if (json.subraces.length > 0) {
      json.subraces.forEach((result: { index: string }) => {
        results.push(result.index);
      });
    }
    return results;
  }

  resultsNames(): string[] {
    return this.results.map((result) => result.name);
  }

  specyResultsNames(): string[] {
    return this.results.map((result) =>
      result.subSpecy.length > 0 ? `${result.name} - ${result.subSpecy}` : result.name,
    );
  }
}
