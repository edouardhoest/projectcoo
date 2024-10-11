class Campaign {
  private id: number;
  private name: string;
  private picture: string;
  private characters: Array<Character>;

  constructor(id: number, name: string, picture: string) {
    this.id = id;
    this.name = name;
    this.picture = picture;
    this.characters = new Array<Character>();
  }
}
