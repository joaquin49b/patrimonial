import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReciverService {

  private items = new BehaviorSubject(this.theItems);
  private lastItem = new BehaviorSubject<{}>({});


  $getLastItem = this.lastItem.asObservable();
  $getItems = this.items.asObservable();


  constructor() { }

  sendLastItem(item) {
    this.lastItem.next(item);
  }

  set theItems(items) {
    this.items.next(items);
    localStorage.setItem('patrimonial', items);
  }
 
  get theItems() {
    return localStorage.getItem('patrimonial');
  }


}
