import { ExternalApiRace } from "../dto/ExternalApiRace";

export class AlignmentService {
  async retrieveAlignmentsInformation(): Promise<string[]> {
    const res = await fetch("https://www.dnd5eapi.co/api/alignments");
    return (await ExternalApiRace.fromJson(await res.json())).resultsNames();
  }
}
