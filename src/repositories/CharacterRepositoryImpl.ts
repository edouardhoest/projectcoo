import { Config, JsonDB } from "node-json-db";
import { Character } from "../entity/Character";
import { CharacterRepository } from "./CharacterRepository";

export class CharacterRepositoryImpl implements CharacterRepository {
  private db = new JsonDB(new Config("database", true, false, "/"));

  save(character: Character): void {
    const idCharacter = 1;
    const characterData = {
      name: character.name,
      idUser: character.idUser || 1,
      picture: character.picture,
      idCharacter: idCharacter,
      alignment: {
        moral: character.alignment.getMoral(),
        order: character.alignment.getOrder()
      },
      job: character.jobs.name,
      specy: character.specy.name,
    };
    this.db.push(`/character/${idCharacter}`, characterData);
  }

  async findById(idCharacter: string): Promise<Character> {
    const character = this.db.getData(`/character/${idCharacter}`);
    return await character;
  }
}
