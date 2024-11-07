import { ExternalApiRace } from "../dto/ExternalApiRace";

export class CharacterService {
  async retrieveRacesInformation(): Promise<string[]> {
    const res = await fetch("https://www.dnd5eapi.co/api/races");
    return (await ExternalApiRace.specyFromJson(await res.json())).specyResultsNames();
  }

  async retrieveClassInformation(): Promise<string[]> {
    const res = await fetch("https://www.dnd5eapi.co/api/classes");
    return (await ExternalApiRace.fromJson(await res.json())).resultsNames();
  }

  async retrieveAlignmentsInformation(): Promise<string[]> {
    const res = await fetch("https://www.dnd5eapi.co/api/alignments");
    return (await ExternalApiRace.fromJson(await res.json())).resultsNames();
  }
}
