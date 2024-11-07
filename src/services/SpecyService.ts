import { Specy } from "../dto/Specy";
import { TraitService } from "./TraitService";
import { SubSpecyService } from "./SubSpecyService";

export class SpecyService {
  static async fetchSpecyDetails(specyIndex: string): Promise<Response> {
    return await fetch(`https://www.dnd5eapi.co/api/races/${specyIndex}`);
  }

  static async createSpecyDetails(specyIndex: string): Promise<Specy> {
    const indexes: string[] = specyIndex.toString().split(" - ");
    const response: Response = await this.fetchSpecyDetails(indexes[0]);
    const jsonData = await response.json();
    const specy = Specy.fromJson(jsonData);
    const traitsIndexes: string[] = this.indexFromJson(jsonData);

    for (const trait of traitsIndexes) {
      specy.traits.push(await TraitService.fetchTraitFromExternalApi(trait));
    }
    if (indexes[1]) {
      specy.subSpecy = await SubSpecyService.fetchSubSpecy(indexes[1]);
    }
    return specy;
  }

  static indexFromJson(response: any): string[] {
    const traitsIndexes = new Array<string>();
    response.traits.forEach((trait: any) => {
      traitsIndexes.push(trait.index);
    });
    return traitsIndexes;
  }
}
