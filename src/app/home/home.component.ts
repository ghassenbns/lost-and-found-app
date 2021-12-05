import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../shared/user-auth.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private userAuthService: UserAuthService
  ) {}

  ngOnInit() {
    this.userAuthService.retrievedUser = JSON.parse(
      localStorage.getItem('user')
    );
  }
  onLogout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
