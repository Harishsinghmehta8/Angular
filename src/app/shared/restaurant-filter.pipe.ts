import { Pipe, PipeTransform } from '@angular/core';
import {Irestaurant} from './irestaurant'

@Pipe({
  name: 'restaurantFilter',
  pure:false
})
export class RestaurantFilterPipe implements PipeTransform {

  transform(value: Irestaurant[], filterBy:string): Irestaurant[] {
    filterBy=(filterBy)?filterBy.toLowerCase():null;
    
    return filterBy? value.filter(
      (restaurant:Irestaurant)=> restaurant.restaurantTitle.toLowerCase().indexOf(filterBy)!==-1 
      || restaurant.restaurantState.toLowerCase().startsWith(filterBy)
      || restaurant.starRating.toString().indexOf(filterBy)!==-1
    ) :value;
    
  }

}
