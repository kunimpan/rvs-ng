import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageFormComponent } from './components/manage-form/manage-form.component';
import { ManageOrdersFirstDoseComponent } from './components/manage-orders-first-dose/manage-orders-first-dose.component';
import { ManageOrdersSecondDoseComponent } from './components/manage-orders-second-dose/manage-orders-second-dose.component';
import { ManageOrdersComponent } from './components/manage-orders/manage-orders.component';
import { BanksComponent } from './pages/banks/banks.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HospitalSettingComponent } from './pages/hospital-setting/hospital-setting.component';
import { ManageBookingComponent } from './pages/manage-booking/manage-booking.component';
import { ManageFirstDoseComponent } from './pages/manage-first-dose/manage-first-dose.component';
import { ManageSecondDoseComponent } from './pages/manage-second-dose/manage-second-dose.component';
import { ScanQrcodeComponent } from './pages/scan-qrcode/scan-qrcode.component';
import { VaccineComponent } from './pages/vaccine/vaccine.component';
import { USER_URL } from './user.url';

const routes: Routes = [
  { path: '', redirectTo: USER_URL.DASHBOARD, pathMatch: 'full' },
  { path: USER_URL.HOSPITAL_SETTING, component: HospitalSettingComponent },
  { path: USER_URL.BANKS, component: BanksComponent },
  { path: USER_URL.MANAGE_BOOKING, component: ManageBookingComponent },
  { path: USER_URL.MANAGE_FIRST_DOSE, component: ManageFirstDoseComponent },
  { path: USER_URL.MANAGE_SECOND_DOSE, component: ManageSecondDoseComponent },
  { path: USER_URL.MANAGE_ORDERS_FISRT_DOSE, component: ManageOrdersFirstDoseComponent },
  { path: USER_URL.MANAGE_ORDERS_SECOND_DOSE, component: ManageOrdersSecondDoseComponent },
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
