import { AnonymousUser } from "../dto/AnonymousUser";

class User extends AnonymousUser {
  private name: string;
  private email: string;
  private idUser: string;
  private password: string;
}
