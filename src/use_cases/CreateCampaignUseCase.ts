import { UseCase } from "./UseCase";

class CreateCampaignUseCase implements UseCase<Campaign> {
  execute(): Campaign {
    return new Campaign();
  }
}
