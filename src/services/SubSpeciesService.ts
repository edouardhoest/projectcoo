import { SubSpecies } from "../dto/SubSpecies";

export class SubSpeciesService {
  static async fetchSubSpecies(subSpeciesIndex: string): Promise<SubSpecies> {
    const response = await fetch(`https://www.dnd5eapi.co/api/subraces/${subSpeciesIndex}`);
    return SubSpecies.fromJson(response.json());
  }
}
