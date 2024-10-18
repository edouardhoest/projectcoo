import { UseCase } from "./UseCase";
import { Character } from "../entity/Character";

class CreateCharacterUseCase implements UseCase<Character> {
  execute(): Character {
    return new Character();
  }
}
