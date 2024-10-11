export interface CharacterRepository {
  getCharacterById(id: string): Character;

  saveCharacter(): void;

  deleteCharacter(): void;

  updateCharacter(): void;
}
