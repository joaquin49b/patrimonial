import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReciverService } from '../../services/last-item/reciver.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {


  displayedColumns: string[] = ['date', 'initPatrimonialValue', 'endPatrimonialValue', 'save'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  title = "Listado";
  data: [];


  constructor(private router: Router, private reciverService: ReciverService) { }

  ngOnInit() {

    this.uploadData();

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

  clickedRow(row: Object): void {
    this.reciverService.sendLastItem(row);

    row != null ? this.router.navigate(['/detail']) : alert('Ha ocurrido un error');
  }

  private uploadData() {
    let data: [];

    this.reciverService.$getItems.subscribe((recoveredData) => {
      if (recoveredData != null) {
        data = JSON.parse(recoveredData);
        data.sort(this.compare)
        this.data = data;
      }
    });
  }


}