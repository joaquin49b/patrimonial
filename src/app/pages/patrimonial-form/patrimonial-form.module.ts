import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatrimonialForm } from './patrimonial-form.page';
import { PatrimonialFormRoutingModule } from './patrimonial-form-routing.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PatrimonialFormRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [PatrimonialForm]
})
export class PatrimonialFormModule {}
