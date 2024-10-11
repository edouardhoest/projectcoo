import { UseCase } from "./UseCase";

class CreateCharacterUseCase implements UseCase<Character> {
  execute(): Character {
    return new Character();
  }
}
