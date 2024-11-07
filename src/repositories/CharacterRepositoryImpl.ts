import { Config, JsonDB } from "node-json-db";
import { Character } from "../entity/Character";
import { CharacterRepository } from "./CharacterRepository";

export class CharacterRepositoryImpl implements CharacterRepository {
  private db = new JsonDB(new Config("database", true, false, "/"));

  save(character: Character): void {
    const idCharacter = 1; // should be auto increment when added to database
    const characterData = JSON.parse(
      JSON.stringify(character, (_key, value) => {
        if (value instanceof Map) {
          return Array.from(value.entries());
        }
        return value;
      }),
    );
    this.db.push(`/character/${idCharacter}`, characterData);
  }

  async findById(idCharacter: string): Promise<Character> {
    const character = this.db.getData(`/character/${idCharacter}`);
    return await character;
  }
}
