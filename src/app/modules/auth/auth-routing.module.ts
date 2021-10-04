import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AUTH_URL } from './auth.url';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: AUTH_URL.LOGIN, pathMatch: 'full' },
  { path: AUTH_URL.LOGIN, component:LoginComponent },
  { path: AUTH_URL.REGISTER, component:RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
