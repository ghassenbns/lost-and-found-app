import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirection',
  templateUrl: './redirection.component.html',
  styleUrls: ['./redirection.component.scss'],
})
export class RedirectionComponent implements OnInit {
  constructor(private router: Router) {}
  checkLocalStorage() {
    if (localStorage.getItem('user') === null) {
      return true;
    } else {
      return false;
    }
  }
  ngOnInit() {
    if (this.checkLocalStorage()) {
      this.router.navigate(['login']);
    } else {
      this.router.navigate(['home']);
    }
  }
}
