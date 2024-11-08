import { Skill } from "./Skill";
import { Trait } from "./Trait";
import { SubSpecies } from "./SubSpecies";
import { Language } from "../entity/Language";

export class Species {
  private _height: string;
  private readonly _id: string;
  private _traits: Array<Trait>;
  private readonly _name: string;
  private _language: Array<Language>;
  private readonly _toChooseLanguages: Array<Language>;
  private readonly _skills: Array<Skill>;
  private readonly _toChooseSkills: Array<Skill>;
  private _bonusCharacteristic: Map<string, number>;

  constructor(
    id?: string,
    subSpecies?: SubSpecies,
    height?: string,
    skills?: Array<Skill>,
    toChooseSkills?: Array<Skill>,
    name?: string,
    language?: Array<Language>,
    toChooseLanguages?: Array<Language>,
    traits?: Array<Trait>,
    bonusCharacteristic?: Map<string, number>,
    init?: Partial<Species>,
  ) {
    this._id = id || "";
    this._name = name || "";
    this._height = height || "";
    this._traits = traits || [];
    this._skills = skills || [];
    this._language = language || [];
    this._toChooseSkills = toChooseSkills || [];
    this._toChooseLanguages = toChooseLanguages || [];
    this._subSpecies = subSpecies || new SubSpecies();
    this._bonusCharacteristic = bonusCharacteristic || new Map();

    if (init) {
      Object.assign(this, init);
    }
  }

  private _subSpecies: SubSpecies;

  get height(): string {
    return this._height;
  }

  set height(height: string) {
    this._height = height;
  }

  get subSpecies(): SubSpecies {
    return this._subSpecies;
  }

  set subSpecies(subSpecies: SubSpecies) {
    this._subSpecies = subSpecies;
  }

  get skills(): Array<Skill> {
    return this._skills;
  }

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

  static fromJson(json: any): Species {
    return new Species(
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
