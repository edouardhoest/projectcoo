import { Job } from "../dto/Job";

export class JobService {
  static async fetchJobDetails(specyIndex: string): Promise<Job> {
    const res = await fetch(`https://www.dnd5eapi.co/api/classes/${specyIndex}`);
    return Job.fromJson(await res.json());
  }

  static async createJobDetails(jobIndex: string): Promise<Job> {
    return await this.fetchJobDetails(jobIndex);
  }
}
