export class UserLogin {
  public email: string;
  public password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
export class UserRegister {
  public email: string;
  public password: string;
  public username: string;
  constructor(email: string, password: string, username: string) {
    this.email = email;
    this.password = password;
    this.username = username;
  }
}
export class User {
  public email: string;
  public password: string;
  public username: string;
  public id: number;
  constructor(email: string, password: string, username: string, id: number) {
    this.email = email;
    this.password = password;
    this.username = username;
    this.id = id;
  }
}
