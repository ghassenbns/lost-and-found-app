import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../shared/user-auth.service';
import { UserRegister } from '../shared/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router, private userService: UserAuthService) {}

  ngOnInit() {}
  onRegister(registerForm: NgForm) {
    if (
      registerForm.valid &&
      registerForm.value.password === registerForm.value.verif
    ) {
      const user = new UserRegister(
        registerForm.value.email,
        registerForm.value.password,
        registerForm.value.username
      );
      this.userService.register(user).subscribe(
        (response) => console.log(response),
        (error) => {
          console.log(error);
        },
        () => {
          this.router.navigate(['login']);
        }
      );
    }
  }
  onReturn() {
    this.router.navigate(['login']);
  }
}
