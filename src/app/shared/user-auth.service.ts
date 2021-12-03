import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin, UserRegister } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  constructor(private http: HttpClient) {}

  login(user: UserLogin) {
    return this.http.post(
      'http://localhost/lostandfoundbackend/api/user/login.php',
      user
    );
  }
  register(user: UserRegister) {
    return this.http.post(
      'http://localhost/lostandfoundbackend/api/user/create.php',
      user
    );
  }
}
