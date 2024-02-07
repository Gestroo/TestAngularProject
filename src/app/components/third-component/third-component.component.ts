import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';


@Component({
  selector: 'app-third-component',
  templateUrl: './third-component.component.html',
  styleUrls: ['./third-component.component.css'],
})
export class ThirdComponentComponent implements OnInit{

  item:Item|null = null;
  newItem:Item|null = null;
  router:Router;
  route:ActivatedRoute;
  itemService: ItemService;
  selectedColor:string|undefined;

  colors:Colors[] = [
    {value:'black',viewValue:"Черный"},
    {value:'white',viewValue:"Белый"},
    {value:'blue',viewValue:"Синий"},
    {value:'red',viewValue:"Красный"},
    ]

    constructor(@Inject(Router) router:Router,@Inject(ActivatedRoute) route:ActivatedRoute, private service: ItemService){
      this.itemService = service;
      this.router = router;
      this.route = route;
      this.route.params.subscribe(params=>{
        this.item = JSON.parse(params["data"])
      });
      this.newItem = this.item;
    }

    ngOnInit(){
      for (const item of this.colors){
        if(item.viewValue===this.newItem!.color)
        this.selectedColor=item.value
      }
    }

    editItem(){
      let newColor =""
      for (const item of this.colors){
        if(item.value===this.selectedColor)
        newColor=item.viewValue
      }
      let newItem:Item = {
        name:this.newItem!.name,
        year:this.newItem!.year,
        color:newColor,
      }
      this.itemService.setData(newItem)
      console.log("ghfgj")
      this.router.navigate(["item"])
    }
}
export interface Colors {
  value: string;
  viewValue: string;
}
