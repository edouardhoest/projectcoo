import { Skill } from "./Skill";

export class Job {
  private readonly _id: number;
  private readonly _name: string;
  private readonly _skills: Array<Skill>;
  private readonly _toChooseSkills: Array<Skill[]>;

  constructor(id?: number, name?: string, skills?: Array<Skill>, toChooseSkills?: Array<Skill[]>, init?: Partial<Job>) {
    this._id = id || 0;
    this._name = name || "";
    this._skills = skills || [];
    this._toChooseSkills = toChooseSkills || [[]];

    if (init) {
      Object.assign(this, init);
    }
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get skills(): Array<Skill> {
    return this._skills;
  }

  get toChooseSkills(): Array<Skill[]> {
    return this._toChooseSkills;
  }

  static fromJson(json: any): Job {
    return new Job(
      json.id,
      json.name,
      Skill.fromJson(json.proficiencies),
      Skill.toChoosefromJson(json.proficiency_choices),
    );
  }
}
