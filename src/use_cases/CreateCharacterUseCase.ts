import { UseCase } from "./UseCase";
import { Character } from "../entity/Character";
import { CharacterRepositoryImpl } from "../database/CharacterRepositoryImpl";

export default class CreateCharacterUseCase implements UseCase<Promise<Character>, string> {
  async execute(requestBody: string): Promise<Character> {
    const idCharacter = requestBody;
    const database: CharacterRepositoryImpl = new CharacterRepositoryImpl();
    return await database.findById(idCharacter);
  }
}
