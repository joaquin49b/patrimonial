import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ReciverService } from '../../services/last-item/reciver.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage {

  title: string;
  data: any[];
  displayedColumns: string[] = ['date', 'initPatrimonialValue', 'endPatrimonialValue', 'save'];
  observableTab: Subscription;
  observableItems: Subscription;
  tab: string;


  constructor(private reciverService: ReciverService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.tab = this.activatedRoute.snapshot.paramMap.get('id')
    this.title = `Listado ${this.tab}`;
  }

  
  ionViewWillEnter(): void {
    
    this.observableItems = this.subscribeItems();
    
  }

  ionViewWillLeave(): void {

    this.observableItems.unsubscribe();

  }
  
  clickedRow(row: Object): void {
    this.reciverService.theLastItem = row;

    row != null ? this.router.navigate(['/detail']) : alert('Ha ocurrido un error');
  }


  private subscribeItems(): Subscription {
    return this.reciverService.$getItems.subscribe((items) => {
      console.log('actualizo')

      if (items != null) {
        let data_filter = JSON.parse(items);
        let data = this.separeData(data_filter);
        this.data = this.obtainData(data);
      }

    })
  }

  private obtainData(data: any ): any {
    switch (this.tab) {
      case 'banco':
        return data.data_banco.sort(this.compare);
      case 'criptomonedas':
        return data.data_cripto.sort(this.compare);
      case 'general':
        return data.data_general.sort(this.compare);
      default:
        return null;
    }

  }


  private separeData(data_filter: any[]) {

    let data_cripto = [];
    let data_banco = [];
    let data_general = [];

    data_cripto = data_filter.filter((item) => item.category == 'Criptomonedas');
    data_banco = data_filter.filter((item) => item.category == 'Banco');

    if (data_cripto.length == 0) {
      data_general == data_banco;
    } else if (data_banco.length == 0) {
      data_general == data_cripto;
    } else {
      for (const db of data_banco) {
        let new_data = { ...db };

        for (const [i, dc] of data_cripto.entries()) {

          if (new_data.date == dc.date) {

            new_data.initPatrimonialValue = (new_data.initPatrimonialValue + dc.initPatrimonialValue);
            new_data.endPatrimonialValue = new_data.endPatrimonialValue + dc.endPatrimonialValue;

            data_cripto.splice(i, 1);

          }
        }
        data_general.push(new_data);

      }
    }
    data_general = data_general.concat(data_cripto);

    return {
      data_general,
      data_cripto,
      data_banco
    }

  }


  compare(a, b) {
    if (a.date < b.date) {
      return -1;
    }
    if (a.date > b.date) {
      return 1;
    }
    return 0;
  }

}
