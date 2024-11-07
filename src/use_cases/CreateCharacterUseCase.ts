import { UseCase } from "./UseCase";
import { Character } from "../entity/Character";
import { CharacterRepositoryImpl } from "../repositories/CharacterRepositoryImpl";
import * as console from "node:console";

export default class CreateCharacterUseCase implements UseCase<object, string> {
  async execute(): Promise<object> {
    const character = new Character();
    const characterRepository: CharacterRepositoryImpl = new CharacterRepositoryImpl();
    const species = await characterRepository.retrieveRacesInformation();
    const jobs = await characterRepository.retrieveClassInformation();
    const alignments = await characterRepository.retrieveAlignmentsInformation();

    const characterKeys = Object.keys(character).reduce(
      (acc, key) => {
        acc[key] = key;
        return acc;
      },
      {} as { [key: string]: any },
    );

    this.deleteUselessKeys(characterKeys);
    characterKeys["_name"] = "YOUR NAME";

    this.modifyCharacterKeysValues(characterKeys, alignments, jobs, species);
    console.log(characterKeys);
    return characterKeys;
  }

  modifyCharacterKeysValues(
    characterKeys: {
      [x: string]: any;
    },
    alignments: string[],
    jobs: string[],
    races: string[],
  ) {
    characterKeys["_alignment"] = alignments;
    characterKeys["_jobs"] = jobs;
    characterKeys["_specy"] = races;
  }

  deleteUselessKeys(characterKeys: { [x: string]: any }) {
    const toDeleteKeys = ["_idUser", "_picture", "_idCharacter"];
    toDeleteKeys.forEach((key) => {
      delete characterKeys[key];
    });
  }
}
