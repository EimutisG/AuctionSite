import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers: [AuthService, AngularFireAuth]
})
export class NavBarComponent implements OnInit {
  public userLogedIn: boolean = false;
  constructor(private auth: AuthService) {
    this.userLogedIn = auth.isLoggedIn();
   }

   logout() {
     this.auth.logout();
     this.userLogedIn = false;
   }

  ngOnInit() {
  }

}
