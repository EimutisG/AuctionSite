import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-register-page',
  templateUrl: './login-register-page.component.html',
  styleUrls: ['./login-register-page.component.css']
})
export class LoginRegisterPageComponent implements OnInit {
  public showRegister: boolean = false;

  public RegisterToggle() {
    this.showRegister = !this.showRegister;
  }

  constructor() { }

  ngOnInit() {
  }

}
