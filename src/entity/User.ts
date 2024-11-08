import { AnonymousUser } from "../dto/AnonymousUser";

export class User extends AnonymousUser {
  constructor(name: string, email: string, idUser: string, password: string) {
    super();
    this._name = name;
    this._email = email;
    this._idUser = idUser;
    this._password = password;
  }

  private readonly _name: string;
  private readonly _email: string;
  private readonly _idUser: string;
  private readonly _password: string;

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  get idUser(): string {
    return this._idUser;
  }

  get password(): string {
    return this._password;
  }
}
