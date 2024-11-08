import { UseCase } from "./UseCase";
import { JobService } from "../services/JobService";
import { SpeciesService } from "../services/SpeciesService";
import { CharacterService } from "../services/CharacterService";
import { AlignmentService } from "../services/AlignmentService";

export default class CreateCharacterUseCase implements UseCase<object, string> {
  private jobService: JobService = new JobService();
  private speciesService: SpeciesService = new SpeciesService();
  private characterService: CharacterService = new CharacterService();
  private alignmentService: AlignmentService = new AlignmentService();

  async execute(): Promise<object> {
    const jobs = await this.jobService.retrieveClassInformation();
    const species = await this.speciesService.retrieveRacesInformation();
    const alignments = await this.alignmentService.retrieveAlignmentsInformation();

    return this.characterService.retrieveCharacterKeys(jobs, species, alignments);
  }
}
