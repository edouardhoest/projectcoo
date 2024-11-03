import { User } from "../entity/User";

export interface UserRepository {
  getUserById(id: string): User;

  saveUser(): void;

  deleteUser(): void;

  updateUser(): void;
}
