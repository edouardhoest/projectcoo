import { Species } from "../dto/Species";
import { TraitService } from "./TraitService";
import { SubSpeciesService } from "./SubSpeciesService";
import { ExternalApiRace } from "../dto/ExternalApiRace";

export class SpeciesService {
  static async fetchSpeciesDetails(speciesIndex: string): Promise<Response> {
    return await fetch(`https://www.dnd5eapi.co/api/races/${speciesIndex}`);
  }

  static async createSpeciesDetails(speciesIndex: string): Promise<Species> {
    const indexes: string[] = speciesIndex.toString().split(" - ");
    const response: Response = await this.fetchSpeciesDetails(indexes[0]);
    const jsonData = await response.json();
    const species = Species.fromJson(jsonData);
    const traitsIndexes: string[] = this.indexFromJson(jsonData);

    for (const trait of traitsIndexes) {
      species.traits.push(await TraitService.fetchTraitFromExternalApi(trait));
    }
    if (indexes[1]) {
      species.subSpecies = await SubSpeciesService.fetchSubSpecies(indexes[1]);
    }
    return species;
  }

  async retrieveRacesInformation(): Promise<string[]> {
    const res = await fetch("https://www.dnd5eapi.co/api/races");
    return (await ExternalApiRace.speciesFromJson(await res.json())).speciesResultsNames();
  }

  static indexFromJson(response: any): string[] {
    const traitsIndexes = new Array<string>();
    response.traits.forEach((trait: any) => {
      traitsIndexes.push(trait.index);
    });
    return traitsIndexes;
  }
}
