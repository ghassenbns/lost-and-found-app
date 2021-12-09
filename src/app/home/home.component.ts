import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../shared/toast.service';
import { UserAuthService } from '../shared/user-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  onLogout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
