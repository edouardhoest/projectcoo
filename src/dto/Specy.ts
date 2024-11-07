import { Language } from "../entity/Language";
import { Skill } from "./Skill";
import { Trait } from "./Trait";
import { SubSpecy } from "./SubSpecy";

export class Specy {
  private readonly _id: string;
  private readonly _name: string;
  private readonly _skills: Array<Skill>;
  private _language: Array<Language>;
  private readonly _toChooseSkills: Array<Skill>;
  private readonly _toChooseLanguages: Array<Language>;
  private _bonusCharacteristic: Map<string, number>;

  constructor(
    id?: string,
    subSpecy?: SubSpecy,
    height?: string,
    skills?: Array<Skill>,
    toChooseSkills?: Array<Skill>,
    name?: string,
    language?: Array<Language>,
    toChooseLanguages?: Array<Language>,
    traits?: Array<Trait>,
    bonusCharacteristic?: Map<string, number>,
    init?: Partial<Specy>,
  ) {
    this._id = id || "";
    this._name = name || "";
    this._height = height || "";
    this._traits = traits || [];
    this._skills = skills || [];
    this._language = language || [];
    this._subSpecy = subSpecy || new SubSpecy();
    this._toChooseSkills = toChooseSkills || [];
    this._toChooseLanguages = toChooseLanguages || [];
    this._bonusCharacteristic = bonusCharacteristic || new Map();

    if (init) {
      Object.assign(this, init);
    }
  }

  private _height: string;

  get height(): string {
    return this._height;
  }

  set height(height: string) {
    this._height = height;
  }

  private _subSpecy: SubSpecy;

  get subSpecy(): SubSpecy {
    return this._subSpecy;
  }

  set subSpecy(subSpecy: SubSpecy) {
    this._subSpecy = subSpecy;
  }

  get skills(): Array<Skill> {
    return this._skills;
  }

  private _traits: Array<Trait>;

  get traits(): Array<Trait> {
    return this._traits;
  }

  get toChooseSkills(): Array<Skill> {
    return this._toChooseSkills;
  }

  get name(): string {
    return this._name;
  }

  get language(): Array<Language> {
    return this._language;
  }

  set traits(traits: Trait[]) {
    this._traits = traits;
  }

  get toChooseLanguages(): Array<Language> {
    return this._toChooseLanguages;
  }

  get id(): string {
    return this._id;
  }

  set language(languages: Array<Language>) {
    this._language = languages;
  }

  get bonusCharacteristic(): Map<string, number> {
    return this._bonusCharacteristic;
  }

  set bonusCharacteristic(bonuses: Map<string, number>) {
    this._bonusCharacteristic = bonuses;
  }

  static fromJson(json: any): Specy {
    return new Specy(
      json.index,
      undefined,
      json.size,
      undefined,
      undefined,
      json.name,
      json.languages,
      undefined,
      undefined,
      undefined,
    );
  }
}
