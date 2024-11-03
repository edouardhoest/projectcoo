import { Config, JsonDB } from "node-json-db";
import * as console from "node:console";
import { Character } from "../entity/Character";
import { CharacterRepository } from "../repositories/CharacterRepository";

export class CharacterRepositoryImpl implements CharacterRepository {
  private db = new JsonDB(new Config("database", true, false, "/"));

  save(character: Character): void {
    const idCharacter = 1; // should be auto increment when added to database
    try {
      this.db.push(`/character/${idCharacter}`, character).then((r) => console.log(r));
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async findById(idCharacter: string): Promise<Character> {
    try {
      const character = this.db.getData(`/character/${idCharacter}`);
      console.log(200);
      return await character;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
