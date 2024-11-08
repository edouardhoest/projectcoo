export class Skill {
  private readonly _id: string;
  private readonly _name: string;

  constructor(id?: string, name?: string, init?: Partial<Skill>) {
    this._id = id || "";
    this._name = name || "";
    Object.assign(this, init);
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  static fromJson(json: any): Skill[] {
    const skills: Array<Skill> = [];
    json.forEach((item: { index: string | undefined; name: string | undefined }) => {
      skills.push(new Skill(item.index, item.name));
    });
    return skills;
  }

  static toChoosefromJson(json: any): Array<Skill[]> {
    const skills: Array<Skill[]> = [];
    json.forEach((item: { from: { [x: string]: any } }) => {
      const tempsSkills: Array<Skill> = new Array<Skill>();
      item.from.options.forEach((option: { [x: string]: any }) => {
        tempsSkills.push(new Skill(option.item.index, option.item.name));
      });
      skills.push(tempsSkills);
    });
    return skills;
  }
}
