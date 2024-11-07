import { Config, JsonDB } from "node-json-db";
import { Character } from "../entity/Character";
import { CharacterRepository } from "./CharacterRepository";

export class CharacterRepositoryImpl implements CharacterRepository {
  private db = new JsonDB(new Config("src/database/database", true, true, "/"));

  save(character: Character): void {
    try{
      this.db.push(`/character/`, character);
    }
    catch(error){
      console.log(error);
    }
  }

  async findById(idCharacter: string): Promise<Character> {
    const character = this.db.getData(`/character/${idCharacter}`);
    return await character;
  }
}
