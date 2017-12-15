import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { NotificationService } from '../services/notification.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-register-page',
  templateUrl: './login-register-page.component.html',
  styleUrls: ['./login-register-page.component.css'],
  providers: [AuthService, AngularFireAuth, NotificationService]
})
export class LoginRegisterPageComponent implements OnInit {

  emailReg: string;
  pwdReg: string;
  name: string;
  emailLogin: string;
  pwdLogin: string;

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
  }

  register(e: string, p: string, n: string) {
    console.log(e);
    // console.log(p);
    this.auth.signup(e, p, n);
    console.log(e);
    console.log(p);
    // this.authService.registerUser(this.registerData)
  }

  login(e: string, p: string) {
    this.auth.login(e, p);
    //this.router.navigate(['home']);
    console.log(e);
    console.log(p);
    // this.authService.registerUser(this.registerData)
  }
}
