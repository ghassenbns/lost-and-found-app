import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../shared/toast.service';
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
    private userAuthService: UserAuthService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.userAuthService.retrievedUser = JSON.parse(
      localStorage.getItem('user')
    );
    this.userAuthService.getAllPosts().subscribe(
      (response) => localStorage.setItem('posts', JSON.stringify(response)),
      (error) => {
        this.toastService.openToast(
          'Erreur de connection au serveur',
          'danger'
        );
      }
    );
  }
  onLogout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
