import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private patrimonial: FormGroup;

  categories = [
    'Banco',
    'Criptomonedas'
  ]

  constructor(private formBuilder: FormBuilder) {

    this.patrimonial = this.formBuilder.group({
      category: ['', Validators.required],
      patrimonialValue: ['', Validators.required],
      date: ['', Validators.required]

    })

  }


  onSubmit() {
    console.log(this.patrimonial.value)
  }

}
