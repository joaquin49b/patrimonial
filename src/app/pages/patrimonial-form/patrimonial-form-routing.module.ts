import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatrimonialForm } from './patrimonial-form.page';

const routes: Routes = [
  {
    path: '',
    component: PatrimonialForm,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatrimonialFormRoutingModule {}
