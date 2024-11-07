import { User } from "../entity/User";

export interface LanguageRepository {
  getLanguageById(id: string): User;

  saveLanguage(): void;

  deleteLanguage(): void;

  updateLanguage(): void;
}
