import { AnonymousUser } from "../dto/AnonymousUser";

export class User extends AnonymousUser {
  private name: string;
  private email: string;
  private idUser: string;
  private password: string;
}
