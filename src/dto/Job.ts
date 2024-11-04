import { Skill } from "./Skill";

export class Job {
  constructor(
    id?: number,
    name?: string,
    skills?: Array<Skill>,
    description?: string,
    toChooseSkills?: Array<Skill>,
    init?: Partial<Job>,
  ) {
    this._id = id || 0;
    this._name = name || "";
    this._skills = skills || [];
    this._description = description || "";
    this._toChooseSkills = toChooseSkills || [];

    if (init) {
      Object.assign(this, init);
    }
  }

  private _id: number;

  get id(): number {
    return this._id;
  }

  private _name: string;

  get name(): string {
    return this._name;
  }

  private _skills: Array<Skill>;

  get skills(): Array<Skill> {
    return this._skills;
  }

  private _description: string;

  get description(): string {
    return this._description;
  }

  private _toChooseSkills: Array<Skill>;

  get toChooseSkills(): Array<Skill> {
    return this._toChooseSkills;
  }
}
