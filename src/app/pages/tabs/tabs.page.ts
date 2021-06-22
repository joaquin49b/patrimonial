import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { ReciverService } from '../../services/last-item/reciver.service';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  selectedPath = '';

  constructor(private reciverService: ReciverService, private router: Router) {

    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });

  }
}
