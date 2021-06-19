import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ReciverService } from '../../services/last-item/reciver.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  private patrimonial: FormGroup;

  categories = ['Banco', 'Criptomonedas'];
  title = "Añadir patrimonio";

  constructor(private formBuilder: FormBuilder, private reciverService: ReciverService) { }

  ngOnInit() {
    this.patrimonial = this.formBuilder.group({
      category: ['', Validators.required],
      initPatrimonialValue: ['', Validators.required],
      endPatrimonialValue: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log('Mostramos resultados antes de guardar');
    console.log(this.patrimonial.value);

    let dateformat = this.patrimonial.value.date.split('-');
    dateformat = `${dateformat[0]}-${dateformat[1]}`;

    this.patrimonial.value.date = dateformat;

    const recoveredData = this.reciverService.theItems;

    if (recoveredData == null) {
      this.reciverService.theItems = JSON.stringify([this.patrimonial.value]);

      // localStorage.setItem('patrimonial', JSON.stringify([this.patrimonial.value]));

    } else {


      let data = JSON.parse(recoveredData);

      const data_filter = data.filter(this.duplicate, this);

      data_filter.push(this.patrimonial.value)
      // localStorage.setItem('patrimonial', JSON.stringify(data_filter));

      this.reciverService.theItems = JSON.stringify(data_filter);

    }

  }

  private duplicate(element): boolean {
    if (element.date == this.patrimonial.value.date && element.category == this.patrimonial.value.category) {
      return false
    }
    return true;
  }


}

