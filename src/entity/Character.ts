import { Alignment } from "../dto/Alignment";
import { Specy } from "../dto/Specy";
import { Job } from "../dto/Job";

export class Character {
  constructor(
    name?: string,
    idUser?: number,
    picture?: string,
    idCharacter?: number,
    alignment?: Alignment,
    jobs?: Job,
    specy?: Specy,
    init?: Partial<Character>,
  ) {
    this._name = name || "";
    this._idUser = idUser || 0;
    this._picture = picture || "";
    this._idCharacter = idCharacter || 0;
    this._alignment = alignment || new Alignment();
    this._jobs = jobs || new Job();
    this._specy = specy || new Specy();

    if (init) {
      Object.assign(this, init);
    }
  }

  private _name: string;

  get name(): string {
    return this._name;
  }

  private _idUser: number;

  get idUser(): number {
    return this._idUser;
  }

  private _picture: string;

  get picture(): string {
    return this._picture;
  }

  private _idCharacter: number;

  get idCharacter(): number {
    return this._idCharacter;
  }

  private _alignment: Alignment;

  get alignment(): Alignment {
    return this._alignment;
  }

  private _jobs: Job;

  get jobs(): Job {
    return this._jobs;
  }

  private _specy: Specy;

  get specy(): Specy {
    return this._specy;
  }
}
