import { Language } from "../entity/Language";
import { Skill } from "./Skill";

export class Specy {
  constructor(
    id?: number,
    height?: number,
    skills?: Array<Skill>,
    toChooseSkills?: Array<Skill>,
    name?: string,
    language?: Array<Language>,
    toChooseLanguages?: Array<Language>,
    traits?: string,
    bonusCharacteristic?: Map<string, number>,
    init?: Partial<Specy>,
  ) {
    this._id = id || 0;
    this._height = height || 0;
    this._skills = skills || [];
    this._toChooseSkills = toChooseSkills || [];
    this._name = name || "";
    this._language = language || [];
    this._toChooseLanguages = toChooseLanguages || [];
    this._traits = traits || "";
    this._bonusCharacteristic = bonusCharacteristic || new Map();

    if (init) {
      Object.assign(this, init);
    }
  }

  private _id: number;

  get id(): number {
    return this._id;
  }

  private _height: number;

  get height(): number {
    return this._height;
  }

  private _skills: Array<Skill>;

  get skills(): Array<Skill> {
    return this._skills;
  }

  private _toChooseSkills: Array<Skill>;

  get toChooseSkills(): Array<Skill> {
    return this._toChooseSkills;
  }

  private _name: string;

  get name(): string {
    return this._name;
  }

  private _language: Array<Language>;

  get language(): Array<Language> {
    return this._language;
  }

  private _toChooseLanguages: Array<Language>;

  get toChooseLanguages(): Array<Language> {
    return this._toChooseLanguages;
  }

  private _traits: string;

  get traits(): string {
    return this._traits;
  }

  private _bonusCharacteristic: Map<string, number>;

  get bonusCharacteristic(): Map<string, number> {
    return this._bonusCharacteristic;
  }
}
