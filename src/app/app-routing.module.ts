import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_URL } from './app.url';

const routes: Routes = [
  { path: '', redirectTo: APP_URL.AUTH, pathMatch: 'full' },
  { 
    path: APP_URL.USER,
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  },
  { 
    path: APP_URL.AUTH,
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  { path: APP_URL.ADMIN, 
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
