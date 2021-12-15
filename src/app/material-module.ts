import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ChartModule } from 'angular2-chartjs';
import { IonicModule } from '@ionic/angular';
import 'chart.piecelabel.js';

@NgModule({
    imports: [
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatListModule,
        ChartModule
    ],
    exports: [
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatListModule,
        ChartModule,
        IonicModule
    ],
})
export class MaterialModule { }