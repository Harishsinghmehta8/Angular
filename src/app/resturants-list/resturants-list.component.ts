import { Component,OnInit } from '@angular/core';
import { Irestaurant } from "../shared/irestaurant";
import {RestaurantService} from "../shared/restaurant.service"


@Component({ 
  templateUrl: './resturants-list.component.html',
  styleUrls: ['./resturants-list.component.css']
 
})
export class ResturantsListComponent implements OnInit {

 pageTitle:string="Restaurant Management System";
 
  showImage:boolean=false;
  imageWidth=50;
  col=4;
  listFilter:string;
  resturants:Irestaurant[];

   constructor(private _ser:RestaurantService) { 
     
  }

  ngOnInit() {
    this.resturants=this._ser.getRestaurants();
  }

  toggleImage():void{
    this.showImage=!this.showImage;
  }
  

  addRestaurants():void{
   this.resturants.push({
        "restaurantId": 4,
        "restaurantTitle": "Chowkidhani",
        "restaurantCity": "Jaipur",
        "restaurantState": "Rajesthan",
        "starRating":4,
        "imageUrl": ""        
    });
  }

}
