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
import { SetPriceComponent } from './set-price/set-price.component';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AdListComponent },
  { path: 'placead', component: PlaceAdPageComponent },
  { path: 'loginregister', component: LoginRegisterPageComponent },
  { path: 'setprice', component: SetPriceComponent},
  { path: 'register', redirectTo: 'loginregister' },  
  { path: 'login', redirectTo: 'loginregister' }

]

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
    PlaceAdPageComponent,
    SetPriceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
