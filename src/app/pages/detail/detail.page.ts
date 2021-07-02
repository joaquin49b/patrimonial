import { Component, OnInit } from '@angular/core';
import { ReciverService } from '../../services/last-item/reciver.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  item: any;
  progress: number;
  progressText = "Ahorro";
  _outerStrokeColor = "#9dff00"
  _innerStrokeColor = "#bdf06a"

  constructor(private reciverService: ReciverService) { }

  ngOnInit() {
    this.reciverService.$getLastItem.subscribe((data: any) => {
      this.item = data
      this.progress = ((data.endPatrimonialValue - data.initPatrimonialValue) / data.initPatrimonialValue) * 100;
      
      if (this.progress < 0) {
        this.progress = -this.progress;
        this._outerStrokeColor = "#ff0000";
        this._innerStrokeColor = "#f06a6a";
        this.progressText = "Perdidas";
      }




    }).unsubscribe();

  }

}
