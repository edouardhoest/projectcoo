import { UseCase } from "./UseCase";
import { Character } from "../entity/Character";
import { SpecyService } from "../services/SpecyService";
import { CharacterRepositoryImpl } from "../repositories/CharacterRepositoryImpl";
import { JobService } from "../services/JobService";
import { Alignment } from "../dto/Alignment";
import { moralAlignmentFromString } from "../enums/Moral";
import { orderAlignmentFromString } from "../enums/Order";

export default class SaveCharacterUseCase implements UseCase<void, object> {
  async execute(requestBody: { [x: string]: any }): Promise<Character> {
    const character = new Character(requestBody._name, requestBody._picture);
    character.specy = await SpecyService.createSpecyDetails(requestBody._specy);

    character.job = await JobService.createJobDetails(requestBody._job);
    const splitAlignment: string[] = requestBody._alignment.split(" ");
    character.alignment = new Alignment(
      moralAlignmentFromString(splitAlignment[1]),
      orderAlignmentFromString(splitAlignment[0]),
    );

    const characterRepository: CharacterRepositoryImpl = new CharacterRepositoryImpl();
    characterRepository.save(character);
    return character;
  }
}
