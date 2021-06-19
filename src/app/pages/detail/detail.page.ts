import { Component, OnInit } from '@angular/core';
import { ReciverService } from '../../services/last-item/reciver.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  item: Object;

  constructor(private reciverService: ReciverService) { }

  ngOnInit() {
    this.reciverService.$getLastItem.subscribe(data => this.item = data).unsubscribe();
  }

}
