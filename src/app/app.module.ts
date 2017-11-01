import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdListComponent } from './ad-list/ad-list.component';
import { FooterComponent } from './footer/footer.component';
import { AdDetailsComponent } from './ad-details/ad-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { LoginRegisterPageComponent } from './login-register-page/login-register-page.component';
import { PlaceAdPageComponent } from './place-ad-page/place-ad-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AdListComponent,
    FooterComponent,
    AdDetailsComponent,
    MovieListComponent,
    MovieItemComponent,
    LoginRegisterPageComponent,
    PlaceAdPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
