import { ExternalApiSpecies } from "./ExternalApiSpecies";
import { SpeciesService } from "../services/SpeciesService";

export class ExternalApiRace {
  private readonly _count: number;
  private readonly _results: ExternalApiSpecies[];

  constructor(count: number, results: ExternalApiSpecies[]) {
    this._count = count;
    this._results = results;
  }

  get count(): number {
    return this._count;
  }

  get results(): ExternalApiSpecies[] {
    return this._results;
  }

  static async fromJson(json: any): Promise<ExternalApiRace> {
    const count = json.count;
    const results: ExternalApiSpecies[] = json.results;
    return new ExternalApiRace(count, results);
  }

  static async speciesFromJson(json: any): Promise<ExternalApiRace> {
    const count = json.count;
    const results: ExternalApiSpecies[] = json.results;
    for (const result of results) {
      const speciesDetails = (await SpeciesService.fetchSpeciesDetails(result.index)).json();
      result.subSpecies = this.subSpeciesFromResponse(await speciesDetails);
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

  speciesResultsNames(): string[] {
    return this.results.map((result) =>
      result.subSpecies.length > 0 ? `${result.name} - ${result.subSpecies}` : result.name,
    );
  }
}
