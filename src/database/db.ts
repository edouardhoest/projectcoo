import { JsonDB, Config } from "node-json-db";
import { Alignment } from "../dto/Alignment";
import * as console from "node:console";
import { Character } from "../entity/Character";

let db = new JsonDB(new Config("database", true, false, "/"));

function addCharacter(name: string, idUser: number, picture: string, idCharacter: number, alignment: Alignment): void {
  const character = {
    name: name,
    idUser: idUser,
    picture: picture,
    idCharacter: idCharacter,
    alignment: {
      moral: alignment.getMoral().toString(),
      order: alignment.getOrder().toString(),
    },
  };
  try {
    db.push(`/character/${idCharacter}`, character);
    console.log(200);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

function getCharacter(idCharacter: number): Character {
  try {
    const character = db.getData(`/character/${idCharacter}`);
    console.log(200);
    return character as Character;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
