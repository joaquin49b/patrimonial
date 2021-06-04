import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  private patrimonial: FormGroup;

  categories = ['Banco', 'Criptomonedas'];
  title = "Añadir patrimonio";

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.patrimonial = this.formBuilder.group({
      category: ['', Validators.required],
      patrimonialValue: ["", Validators.required],
      date: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log('Mostramos resultados antes de guardar');
    console.log(this.patrimonial.value);

    const recoveredData = localStorage.getItem('patrimonial');
    ;


    if (recoveredData == null) {
      localStorage.setItem('patrimonial', JSON.stringify([this.patrimonial.value]));

    } else {
      let data = JSON.parse(recoveredData);
      data.push(this.patrimonial.value);
      localStorage.setItem('patrimonial', JSON.stringify(data));

    }

    console.log(localStorage.getItem('patrimonial'));
  }
}
