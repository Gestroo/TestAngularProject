import { Component, Input, OnInit,Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css'],
})
export class SecondComponentComponent implements OnInit {

  colors:string[];
  @Input()
  item:Item|null = null;
  @Output() 
  newItemEvent = new EventEmitter<Item|null>();
  @Input()
  preloader:boolean = true;

  itemEvent(value: Item|null) {
    this.newItemEvent.emit(value);
  }

  constructor(){
    this.colors = ['Черный','Красный','Синий','Белый']
  }

  ngOnInit() {
  }
}
