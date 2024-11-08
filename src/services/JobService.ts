import { Job } from "../dto/Job";
import { ExternalApiRace } from "../dto/ExternalApiRace";

export class JobService {
  static async fetchJobDetails(speciesIndex: string): Promise<Job> {
    const res = await fetch(`https://www.dnd5eapi.co/api/classes/${speciesIndex}`);
    return Job.fromJson(await res.json());
  }

  async retrieveClassInformation(): Promise<string[]> {
    const res = await fetch("https://www.dnd5eapi.co/api/classes");
    return (await ExternalApiRace.fromJson(await res.json())).resultsNames();
  }

  static async createJobDetails(jobIndex: string): Promise<Job> {
    return await this.fetchJobDetails(jobIndex);
  }
}
