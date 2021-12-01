import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  constructor(private http: HttpClient) {}

  login(user: User) {
    return this.http.post(
      'http://localhost/lostandfoundbackend/api/user/login.php',
      user
    );
  }
}
