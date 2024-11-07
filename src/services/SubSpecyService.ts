import { SubSpecy } from "../dto/SubSpecy";

export class SubSpecyService {
  static async fetchSubSpecy(subSpecyIndex: string): Promise<SubSpecy> {
    const response = await fetch(`https://www.dnd5eapi.co/api/subraces/${subSpecyIndex}`);
    return SubSpecy.fromJson(response.json());
  }
}
