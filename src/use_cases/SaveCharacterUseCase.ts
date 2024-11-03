import { UseCase } from "./UseCase";
import { Character } from "../entity/Character";
import { CharacterRepositoryImpl } from "../database/CharacterRepositoryImpl";

export default class SaveCharacterUseCase implements UseCase<void, string> {
  execute(requestBody: string): void {
    const character = new Character(requestBody);
    const database: CharacterRepositoryImpl = new CharacterRepositoryImpl();
    database.save(character);
    return;
  }
}
