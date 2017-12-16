import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { NotificationService } from '../services/notification.service';
import { AuthService } from '../services/auth.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-login-register-page',
  templateUrl: './login-register-page.component.html',
  styleUrls: ['./login-register-page.component.css'],
  providers: [AuthService, AngularFireAuth, NotificationService]
})
export class LoginRegisterPageComponent implements OnInit {
  public showRegister: boolean = false;

  emailReg: string;
  pwdReg: string;
  name: string;
  emailLogin: string;
  pwdLogin: string;

  // Method for switching between the Login and SignUp forms
  public RegisterToggle() {
    this.showRegister = !this.showRegister;
  }

  constructor(public auth: AuthService, private router: Router) {
    if (auth.isLoggedIn()) {
    }
  }

  ngOnInit() {
  }

  // Method for registering user on Firebase
  register(e: string, p: string, n: string) {
    this.auth.signup(e, p, n);
    this.router.navigate(['home']);
  }

  // Method for logging user on Firebase
  login(e: string, p: string) {
    this.auth.login(e, p);
    this.router.navigate(['home']);
    location.reload();
  }
}
