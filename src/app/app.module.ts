import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './MyComponents/header/header.component'
import { SideNavComponent } from './MyComponents/side-nav/side-nav.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { ContactComponent } from './MyComponents/contact/contact.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    HomeComponent,
    ContactComponent,
],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
