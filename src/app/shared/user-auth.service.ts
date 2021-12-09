import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserLogin, UserRegister } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  retrievedUser: User = null;
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
  signaler(post: any) {
    console.log(post);
    return this.http.post(
      'http://localhost/lostandfoundbackend/api/post/create.php',
      post
    );
  }
  getAllPosts() {
    return this.http.get(
      'http://localhost/lostandfoundbackend/api/post/read.php'
    );
  }
}
