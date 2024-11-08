import { Character } from "../entity/Character";

export interface CharacterRepository {
  findById(idCharacter: string): Promise<Character>;

  save(character: Character): void;
}
