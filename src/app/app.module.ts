import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdListComponent } from './ad-list/ad-list.component';
import { FooterComponent } from './footer/footer.component';
import { AdDetailsComponent } from './ad-details/ad-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AdListComponent,
    FooterComponent,
    AdDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
