import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './MyComponents/header/header.component';
import { SideNavComponent } from './MyComponents/side-nav/side-nav.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { ContactComponent } from './MyComponents/contact/contact.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'header', component: HeaderComponent },
  { path: 'side-nav', component: SideNavComponent},
  { path: 'home', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }