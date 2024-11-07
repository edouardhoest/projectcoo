import { Alignment } from "../dto/Alignment";
import { Specy } from "../dto/Specy";
import { Job } from "../dto/Job";

export class Character {
  private _specy: Specy;
  private _idUser: number;
  private _picture: string;
  private _name: string;
  private _idCharacter: number;
  private _alignment: Alignment;

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
    this._job = jobs || new Job();
    this._specy = specy || new Specy();

    if (init) {
      Object.assign(this, init);
    }
  }

  private _job: Job;

  get name(): string {
    return this._name;
  }

  set job(job: Job) {
    this._job = job;
  }

  set specy(specy: Specy) {
    this._specy = specy;
  }

  set picture(picture: string) {
    this._picture = picture;
  }

  set alignment(alignment: Alignment) {
    this._alignment = alignment;
  }

  get idUser(): number {
    return this._idUser;
  }

  get picture(): string {
    return this._picture;
  }

  get idCharacter(): number {
    return this._idCharacter;
  }

  get alignment(): Alignment {
    return this._alignment;
  }

  get jobs(): Job {
    return this._job;
  }

  get specy(): Specy {
    return this._specy;
  }
}
