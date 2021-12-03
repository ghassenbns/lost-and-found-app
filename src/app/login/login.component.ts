import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ErrorService } from '../shared/error.service';
import { ToastService } from '../shared/toast.service';
import { UserAuthService } from '../shared/user-auth.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private toastService: ToastService,
    private router: Router,
    private userService: UserAuthService,
    private errorService: ErrorService
  ) {}

  ngOnInit() {}
  onRegister() {
    this.router.navigate(['register']);
  }
  onLogin(loginForm: NgForm) {
    if (loginForm.valid) {
      const user = new User(loginForm.value.email, loginForm.value.password);
      this.userService.login(user).subscribe(
        (response) => localStorage.setItem('user', JSON.stringify(response)),
        (error) => {
          this.toastService.openToast(
            this.errorService.loginErrors(error),
            'danger'
          );
        },
        () => {
          this.router.navigate(['home']);
        }
      );
    }
  }
}
