export interface LanguageRepository {
  getLanguageById(id: string): User;

  saveLanguage(): void;

  deleteLanguage(): void;

  updateLanguage(): void;
}
