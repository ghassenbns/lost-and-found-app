import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorService } from '../shared/error.service';
import { ToastService } from '../shared/toast.service';
import { UserAuthService } from '../shared/user-auth.service';
import { UserRegister } from '../shared/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserAuthService,
    private toastService: ToastService,
    private errorService: ErrorService
  ) {}

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
        () => this.toastService.openToast('Utilisateur crée', 'success'),
        () => {
          this.toastService.openToast('Email existe déja', 'danger');
        },
        () => {
          this.router.navigate(['login']);
        }
      );
    } else if (
      registerForm.valid &&
      registerForm.value.password !== registerForm.value.verif
    ) {
      this.toastService.openToast(
        'Les mots de passe ne sont pas identiques',
        'danger'
      );
    } else {
      this.toastService.openToast(
        'Veillez remplir les champs avec des valeurs valides',
        'danger'
      );
    }
  }
  onReturn() {
    this.router.navigate(['login']);
  }
}
