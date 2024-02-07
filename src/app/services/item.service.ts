import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {


  dataNotChangedFlag:boolean = false
  item:Item={name:"Mazda",year:2011,color:"Белый"}
  getData():Observable<Item>{
    console.log("Отправка запроса")
    const observable = new Observable<Item>((subscriber)=>{
      subscriber.next(this.item)
    })
    return observable;
  }
  setData(newItem:Item){
    if (newItem === this.item) {
      this.dataNotChangedFlag =true;
      return this.item}
      this.item = newItem;
      this.dataNotChangedFlag =false
      return this.item;
  }
  getFlag(){
    return this.dataNotChangedFlag;
  }

  constructor() { }
}
