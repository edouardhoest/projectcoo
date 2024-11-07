import { UseCase } from "./UseCase";
import { Character } from "../entity/Character";
import { CharacterService } from "../services/CharacterService";

export default class CreateCharacterUseCase implements UseCase<object, string> {
  async execute(): Promise<object> {
    const character = new Character();
    const characterService: CharacterService = new CharacterService();
    const species = await characterService.retrieveRacesInformation();
    const jobs = await characterService.retrieveClassInformation();
    const alignments = await characterService.retrieveAlignmentsInformation();

    const characterKeys = Object.keys(character).reduce(
      (acc, key) => {
        acc[key] = key;
        return acc;
      },
      {} as { [key: string]: any },
    );

    this.deleteUselessKeys(characterKeys);
    characterKeys["_name"] = "YOUR NAME";
    characterKeys["_picture"] = "YOUR PICTURE URL";

    this.modifyCharacterKeysValues(characterKeys, alignments, jobs, species);
    return characterKeys;
  }

  modifyCharacterKeysValues(
    characterKeys: {
      [x: string]: any;
    },
    alignments: string[],
    jobs: string[],
    species: string[],
  ) {
    characterKeys["_alignment"] = alignments;
    characterKeys["_job"] = jobs;
    characterKeys["_specy"] = species;
  }

  deleteUselessKeys(characterKeys: { [x: string]: any }) {
    const toDeleteKeys = ["_idUser", "_idCharacter"];
    toDeleteKeys.forEach((key) => {
      delete characterKeys[key];
    });
  }
}
