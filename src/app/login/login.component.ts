import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorService } from '../shared/error.service';
import { ToastService } from '../shared/toast.service';
import { UserAuthService } from '../shared/user-auth.service';
import { User, UserLogin } from '../shared/user.model';

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
      const user = new UserLogin(
        loginForm.value.email,
        loginForm.value.password
      );
      this.userService.login(user).subscribe(
        (response: User) => {
          this.userService.retrievedUser = response;
        },
        (error) => {
          this.toastService.openToast(
            this.errorService.loginErrors(error),
            'danger'
          );
        },
        () => {
          this.router.navigate(['home/publications']);
        }
      );
    }
  }
}
