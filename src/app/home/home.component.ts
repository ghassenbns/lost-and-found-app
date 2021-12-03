import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  retrievedUser: string = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.retrievedUser = JSON.parse(localStorage.getItem('user'));
    console.log('retrievedObject: ', this.retrievedUser);
  }
  onLogout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
