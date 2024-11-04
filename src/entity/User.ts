import { AnonymousUser } from "../dto/AnonymousUser";

export class User extends AnonymousUser {
  constructor(name: string, email: string, idUser: string, password: string) {
    super();
    this._name = name;
    this._email = email;
    this._idUser = idUser;
    this._password = password;
  }

  private _name: string;

  get name(): string {
    return this._name;
  }

  private _email: string;

  get email(): string {
    return this._email;
  }

  private _idUser: string;

  get idUser(): string {
    return this._idUser;
  }

  private _password: string;

  get password(): string {
    return this._password;
  }
}
