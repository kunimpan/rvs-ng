import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ManageBookingComponent } from './pages/manage-booking/manage-booking.component';
import { BanksComponent } from './pages/banks/banks.component';
import { HospitalSettingComponent } from './pages/hospital-setting/hospital-setting.component';
import { VaccineComponent } from './pages/vaccine/vaccine.component';
import { SharedModule } from '../shared/shared.module';
import { ManageOrdersComponent } from './components/manage-orders/manage-orders.component';
import { ManageFormComponent } from './components/manage-form/manage-form.component';
import { BsModalService } from 'ngx-bootstrap/modal';


// Scanner
import { ScanQrcodeComponent } from './pages/scan-qrcode/scan-qrcode.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HospitalSettingComponent,
    BanksComponent,
    VaccineComponent,
    ManageBookingComponent,
    ManageOrdersComponent,
    ManageFormComponent,
    ScanQrcodeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
  ],
  providers: [
    BsModalService
  ]
})
export class UserModule { }
