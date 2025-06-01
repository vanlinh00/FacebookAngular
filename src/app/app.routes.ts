import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },// 4200 nó ddieuf hướng đến login luôn
  { path: 'signup', component: SignupComponent },

];

