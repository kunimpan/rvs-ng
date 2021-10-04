import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageFormComponent } from './components/manage-form/manage-form.component';
import { ManageOrdersComponent } from './components/manage-orders/manage-orders.component';
import { BanksComponent } from './pages/banks/banks.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HospitalSettingComponent } from './pages/hospital-setting/hospital-setting.component';
import { ManageBookingComponent } from './pages/manage-booking/manage-booking.component';
import { ScanQrcodeComponent } from './pages/scan-qrcode/scan-qrcode.component';
import { VaccineComponent } from './pages/vaccine/vaccine.component';
import { USER_URL } from './user.url';

const routes: Routes = [
  { path: '', redirectTo: USER_URL.DASHBOARD, pathMatch: 'full' },
  { path: USER_URL.HOSPITAL_SETTING, component: HospitalSettingComponent },
  { path: USER_URL.BANKS, component: BanksComponent },
  { path: USER_URL.MANAGE_BOOKING, component: ManageBookingComponent },
  {
    path: USER_URL.MANAGE_ORDERS, children: [
      { path: '', component: ManageOrdersComponent },
      { path: ':id', component: ManageOrdersComponent }
    ]
  },
  {
    path: USER_URL.MANAGE_FORM, children: [
      { path: '', component: ManageFormComponent },
      { path: ':id', component: ManageFormComponent }
    ]
  },
  { path: USER_URL.VACCINE, component: VaccineComponent },
  { path: USER_URL.DASHBOARD, component: DashboardComponent },
  { path: USER_URL.SCAN_QRCODE, component: ScanQrcodeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {  }
