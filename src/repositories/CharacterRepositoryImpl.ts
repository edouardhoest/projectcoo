import { Config, JsonDB } from "node-json-db";
import { Character } from "../entity/Character";
import { CharacterRepository } from "./CharacterRepository";
import { ExternalApiRace } from "../dto/ExternalApiRace";

export class CharacterRepositoryImpl implements CharacterRepository {
  private db = new JsonDB(new Config("database", true, false, "/"));

  save(character: Character): void {
    const idCharacter = 1; // should be auto increment when added to database
    this.db.push(`/character/${idCharacter}`, character);
  }

  async findById(idCharacter: string): Promise<Character> {
    const character = this.db.getData(`/character/${idCharacter}`);
    return await character;
  }

  async retrieveRacesInformation(): Promise<string[]> {
    const res = await fetch("https://www.dnd5eapi.co/api/races");
    return ExternalApiRace.fromJson(await res.json()).resultsNames();
  }

  async retrieveClassInformation(): Promise<string[]> {
    const res = await fetch("https://www.dnd5eapi.co/api/classes");
    return ExternalApiRace.fromJson(await res.json()).resultsNames();
  }

  async retrieveAlignmentsInformation(): Promise<string[]> {
    const res = await fetch("https://www.dnd5eapi.co/api/alignments");
    return ExternalApiRace.fromJson(await res.json()).resultsNames();
  }
}
