import { UseCase } from "./UseCase";
//import { Character } from "../entity/Character";
import { CharacterRepositoryImpl } from "../repositories/CharacterRepositoryImpl";
import * as console from "node:console";

export default class CreateCharacterUseCase implements UseCase<object, string> {
  execute(): object {
    //const character = new Character();
    const characterRepository: CharacterRepositoryImpl = new CharacterRepositoryImpl();
    const test = characterRepository.retrieveClassInformation();
    console.log(test);
    return test;
    //return this.getJsonRecursively(character);
  }

  /*private getJsonRecursively(obj: any): object {
    const result: { [key: string]: any } = {};

    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
          result[key] = this.getJsonRecursively(obj[key]);
        } else {
          result[key] = obj[key];
        }
      }
    }

    return result;
  }*/
}
