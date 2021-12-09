import { Post } from './post.model';

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
  public location: string;
  public phoneNumber: string;

  constructor(
    email: string,
    password: string,
    username: string,
    location: string,
    phoneNumber: string
  ) {
    this.email = email;
    this.password = password;
    this.username = username;
    this.location = location;
    this.phoneNumber = phoneNumber;
  }
}
export class User {
  public email: string;
  public password: string;
  public username: string;
  public id: number;
  public phoneNumber: number;
  public location: string;
  public posts: Post[];
  constructor(
    email: string,
    password: string,
    username: string,
    id: number,
    phoneNumber: number,
    location: string
  ) {
    this.email = email;
    this.password = password;
    this.username = username;
    this.id = id;
    this.phoneNumber = phoneNumber;
    this.location = location;
  }
}
