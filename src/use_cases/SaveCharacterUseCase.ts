import { UseCase } from "./UseCase";
import { Character } from "../entity/Character";
import { CharacterRepositoryImpl } from "../repositories/CharacterRepositoryImpl";

export default class SaveCharacterUseCase implements UseCase<void, string> {
  execute(requestBody: string): void {
    const character = new Character(requestBody);
    const characterRepository: CharacterRepositoryImpl = new CharacterRepositoryImpl();
    characterRepository.save(character);
    return;
  }
}
