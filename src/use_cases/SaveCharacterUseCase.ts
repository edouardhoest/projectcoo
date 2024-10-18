import { UseCase } from "./UseCase";
import { Character } from "../entity/Character";

export default class SaveCharacterUseCase implements UseCase<void, string> {
  execute(requestBody: string): void {
    const character = new Character(requestBody);
    db.save(character);
    return;
  }
}
