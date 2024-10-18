import { UseCase } from "./UseCase";
import { Character } from "../entity/Character";

export default class CreateCharacterUseCase implements UseCase<Character, string> {
  execute(requestBody: string): Character {
    return new Character(requestBody);
  }
}
