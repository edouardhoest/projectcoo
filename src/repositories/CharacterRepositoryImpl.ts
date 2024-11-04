import { Config, JsonDB } from "node-json-db";
import { Character } from "../entity/Character";
import { CharacterRepository } from "./CharacterRepository";
import * as https from "node:https";

export class CharacterRepositoryImpl implements CharacterRepository {
  private db = new JsonDB(new Config("database", true, false, "/"));

  save(character: Character): void {
    const idCharacter = 1; // should be auto increment when added to database
    this.db.push(`/character/${idCharacter}`, character);
  }

  async findById(idCharacter: string): Promise<Character> {
    const character = this.db.getData(`/character/${idCharacter}`);
    return await character;
  }

  async retrieveClassInformation(): Promise<object> {
    const url = "https://www.dnd5eapi.co/api/races";

    return new Promise((resolve, reject) => {
      const req = https.get(url, (res) => {
        let data = "";

        if (res.statusCode !== 200) {
          reject(new Error(`Failed to get informations : ${res.statusCode}`));
          res.resume();
          return;
        }

        res.on("data", (chunk) => {
          data += chunk;
        });

        res.on("end", () => {
          try {
            const jsonData = JSON.parse(data);
            resolve(jsonData);
          } catch (error) {
            reject(new Error(`Error when parsing json`));
          }
        });
      });

      req.on("error", (error) => {
        reject(new Error(`Erreur lors de la requête : ${error.message}`));
      });
    });
  }
}
