import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  onRegister(registerForm: Form) {
    console.log(registerForm);
  }
  onReturn() {
    this.router.navigate(['login']);
  }
}
