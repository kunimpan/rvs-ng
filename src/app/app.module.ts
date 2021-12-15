import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from './modules/user/user.module';
import { SharedModule } from './modules/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from './modules/auth/auth.module';
import { IonicModule } from '@ionic/angular';
import { AdminModule } from './modules/admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // SharedModule,
    // UserModule,
    // AdminModule,
    AuthModule,
    NgbModule,
    IonicModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
