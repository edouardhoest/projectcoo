import { JsonDB, Config } from "node-json-db";
import { Alignment } from "../dto/Alignment";
import * as console from "node:console";
import { Character } from "../entity/Character";

let db = new JsonDB(new Config("database", true, false, "/"));

async function addCharacter(name: string, idUser: number, picture: string, idCharacter: number, alignment: Alignment) : Promise<void> {
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
    await db.push("/character", character);
    console.log(200);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getCharacter(idCharacter: number) : Promise<Character> {
  try {
    const character = await db.getData("/character/idCharacter/"+idCharacter);
    console.log(200);
    return character;
  } catch (error) {
    console.log(error);
    throw error;
  }
}