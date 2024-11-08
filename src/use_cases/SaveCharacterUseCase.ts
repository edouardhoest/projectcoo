import { UseCase } from "./UseCase";
import { Character } from "../entity/Character";
import { CharacterRepositoryImpl } from "../repositories/CharacterRepositoryImpl";
import { CharacterService } from "../services/CharacterService";

export default class SaveCharacterUseCase implements UseCase<void, object> {
  private characterService: CharacterService = new CharacterService();
  private characterRepository: CharacterRepositoryImpl = new CharacterRepositoryImpl();

  async execute(requestBody: { [x: string]: any }): Promise<Character> {
    const character: Character = await this.characterService.createFromBody(requestBody);
    this.characterRepository.save(character);
    return character;
  }
}
