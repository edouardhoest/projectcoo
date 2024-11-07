export class Skill {
  private id: number;
  private name: string;
  private description: string;

  constructor(init?: Partial<Skill>) {
    Object.assign(this, init);
  }
}
