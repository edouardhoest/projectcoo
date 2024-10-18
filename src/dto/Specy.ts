import { Language } from "../entity/Language";

export class Specy {
  private id: number;
  private height: number;
  private skills: Array<Skill>;
  private toChooseSkills: Array<Skill>;
  private name: string;
  private language: Array<Language>;
  private toChooseLanguages: Array<Language>;
  private traits: string;
  private bonusCharacteristic: Map<string, number>;
}
