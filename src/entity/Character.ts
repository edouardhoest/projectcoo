import { Alignment } from "../dto/Alignment";
import { Specy } from "../dto/Specy";

export class Character {
  private name: string;
  private idUser: number;
  private picture: string;
  private idCharacter: number;
  private alignment: Alignment;
  private jobs: Job;
  private specy: Specy;

  constructor(init?: Partial<Character>) {
    Object.assign(this, init);
  }
}
