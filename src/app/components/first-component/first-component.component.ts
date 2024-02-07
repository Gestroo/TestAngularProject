import { Item } from './../../models/item';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit,OnDestroy {

  subscription: Subscription|undefined;
  preloader:boolean = true;
  item:Item|null = null;
  itemService: ItemService;
  router:Router

  goToEdit(item:Item|null){
    this.router.navigate(["item/edit",{data:JSON.stringify(item)}])
  }

  constructor(@Inject(Router) router:Router, private service: ItemService){
    this.itemService = service;
    this.router = router;
  }

  ngOnInit(){
    let flag = this.itemService.getFlag();
    if (!flag)
    {
      let tmpItem:Item;
      setTimeout(() => {
        let observable: Observable<Item> = this.itemService.getData();
       this.subscription = observable.subscribe({
          next(_){
            tmpItem=_;
          }
        })
        this.item=tmpItem;
        this.preloader=false},500)
    }
    
  }
  ngOnDestroy(){
    this.subscription!.unsubscribe()
  }
}
