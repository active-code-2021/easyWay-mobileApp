import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
// import * as firebase from '@angular/fire/compat';
import { GoogleAuthProvider } from "firebase/auth";


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user = null;
  constructor(private router: Router, public fireAuth: AngularFireAuth) {
    this.fireAuth.authState.subscribe((user) => {
      this.user = user ? user : null;

    });
  }

  login() {
    this.fireAuth.signInWithPopup(new GoogleAuthProvider());
  }

  logout() {
    this.fireAuth.signOut();
  }

  ngOnInit() {
  }
  displayOrdersForToday() {
    this.router.navigate(['/delivery-list', {}])
  }
}
