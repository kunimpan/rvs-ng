import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { MaterialModule } from 'src/app/material-module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BackgroundComponent } from './background/background.component';

@NgModule({
  declarations: [
    ContentComponent,
    SidebarComponent,
    BackgroundComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    
  ],
  exports: [
    ContentComponent,
    MaterialModule,
    SidebarComponent,
    BackgroundComponent,
  ]
})
export class SharedModule { }
