import { JobService } from "./JobService";
import { Alignment } from "../dto/Alignment";
import { Character } from "../entity/Character";
import { SpeciesService } from "./SpeciesService";
import { moralAlignmentFromString } from "../enums/Moral";
import { orderAlignmentFromString } from "../enums/Order";

export class CharacterService {
  async createFromBody(requestBody: { [p: string]: any }): Promise<Character> {
    const character = new Character(requestBody._name, requestBody._picture);
    character.species = await SpeciesService.createSpeciesDetails(requestBody._species);
    character.job = await JobService.createJobDetails(requestBody._job);

    const splitAlignment: string[] = requestBody._alignment.split(" ");
    character.alignment = new Alignment(
      moralAlignmentFromString(splitAlignment[1]),
      orderAlignmentFromString(splitAlignment[0]),
    );
    return character;
  }

  retrieveCharacterKeys(jobs: string[], species: string[], alignments: string[]): { [p: string]: any } {
    const characterKeys = this.getCharacterKeys();
    this.deleteUselessKeys(characterKeys);
    characterKeys["_name"] = "YOUR NAME";
    characterKeys["_picture"] = "YOUR PICTURE URL";

    this.modifyCharacterKeysValues(characterKeys, alignments, jobs, species);
    return characterKeys;
  }

  getCharacterKeys(): { [p: string]: any } {
    return Object.keys(Character).reduce(
      (acc, key) => {
        acc[key] = key;
        return acc;
      },
      {} as { [key: string]: any },
    );
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
    characterKeys["_species"] = species;
  }

  deleteUselessKeys(characterKeys: { [x: string]: any }) {
    const toDeleteKeys = ["_idUser", "_idCharacter"];
    toDeleteKeys.forEach((key) => {
      delete characterKeys[key];
    });
  }
}
