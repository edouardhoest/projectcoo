import { Job } from "../dto/Job";
import { Species } from "../dto/Species";
import { Alignment } from "../dto/Alignment";

export class Character {
  private _job: Job;
  private _picture: string;
  private readonly _name: string;
  private _alignment: Alignment;
  private readonly _idUser: number;
  private readonly _idCharacter: number;

  constructor(
    name?: string,
    idUser?: number,
    picture?: string,
    idCharacter?: number,
    alignment?: Alignment,
    jobs?: Job,
    species?: Species,
    init?: Partial<Character>,
  ) {
    this._name = name || "";
    this._idUser = idUser || 0;
    this._picture = picture || "";
    this._job = jobs || new Job();
    this._idCharacter = idCharacter || 0;
    this._species = species || new Species();
    this._alignment = alignment || new Alignment();

    if (init) {
      Object.assign(this, init);
    }
  }

  private _species: Species;

  get name(): string {
    return this._name;
  }

  set job(job: Job) {
    this._job = job;
  }

  get species(): Species {
    return this._species;
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

  set species(species: Species) {
    this._species = species;
  }
}
