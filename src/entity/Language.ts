export class Language {
  private id: number;
  private name: string;

  constructor(init?: Partial<Language>) {
    Object.assign(this, init);
  }
}
