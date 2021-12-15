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
import { ManageFirstDoseComponent } from './pages/manage-first-dose/manage-first-dose.component';
import { ManageSecondDoseComponent } from './pages/manage-second-dose/manage-second-dose.component';
import { ManageOrdersFirstDoseComponent } from './components/manage-orders-first-dose/manage-orders-first-dose.component';
import { ManageOrdersSecondDoseComponent } from './components/manage-orders-second-dose/manage-orders-second-dose.component'; 


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
    ScanQrcodeComponent,
    ManageFirstDoseComponent,
    ManageSecondDoseComponent,
    ManageOrdersFirstDoseComponent,
    ManageOrdersSecondDoseComponent
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
