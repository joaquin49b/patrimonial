import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MatTableModule } from '@angular/material/table';

import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    MatTableModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class ComponentsModule { }
