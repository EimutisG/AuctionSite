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

  // Check if there is any user logged in when instantiating the component
  constructor(private auth: AuthService) {
    this.userLogedIn = auth.isLoggedIn();
   }

   // Method used for logging out the user
   logout() {
     this.auth.logout();
     this.userLogedIn = false;
   }

  ngOnInit() {
  }

}
