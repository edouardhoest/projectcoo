import { Trait } from "../dto/Trait";

export class TraitService {
  static async fetchTraitFromExternalApi(traitIndex: string): Promise<Trait> {
    const res = await fetch(`https://www.dnd5eapi.co/api/traits/${traitIndex}`);
    return Trait.fromJson(await res.json());
  }
}
