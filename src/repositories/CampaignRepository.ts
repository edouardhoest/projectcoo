export interface CampaignRepository {
  getCampaignById(id: string): Campaign;

  saveCampaign(): void;

  deleteCampaign(): void;

  updateCampaign(): void;
}
