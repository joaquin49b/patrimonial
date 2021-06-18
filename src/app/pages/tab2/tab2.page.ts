import { Component } from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  displayedColumns: string[] = ['date', 'initPatrimonialValue', 'endPatrimonialValue', 'save'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: PeriodicElement[] = ELEMENT_DATA;

  // displayedColumns: Object[] = [
  //   {
  //     name: 'date',
  //     value: 'Fecha'
  //   },
  //   {
  //     name: 'initPatrimonialValue',
  //     value: 'Capital inicial'
  //   },
  //   {
  //     name: 'endPatrimonialValue',
  //     value: 'Capital final'
  //   },
  //   {
  //     name: 'save',
  //     value: 'Ahorro'
  //   }
  // ];

  // columnsToDisplay: Object[] = this.displayedColumns.slice();

  title = "Listado";
  // data: [];


  constructor() { }

  ngOnInit() {
    let data: [];

    const recoveredData = localStorage.getItem('patrimonial');

    if (recoveredData != null) {
      data = JSON.parse(recoveredData);
      data.sort(this.compare)

      console.log(data)

      this.data = data;
    console.log(this.columnsToDisplay)

    console.log(this.displayedColumns)
      
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