class Job {
  private id: number;
  private name: string;
  private skills: Array<Skill>;
  private description: string;
  private toChooseSkills: Array<Skill>;

  constructor(init?: Partial<Job>) {
    Object.assign(this, init);
  }
}
