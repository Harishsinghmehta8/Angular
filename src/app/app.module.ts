import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ResturantsListComponent } from './resturants-list/resturants-list.component';
import { charDashString } from "./customFilter/charDashString.pipe";
import { RestaurantFilterPipe } from './shared/restaurant-filter.pipe';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { RestaurantService } from "./shared/restaurant.service";
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { AppRoutingModule } from "./app-routing.module";





@NgModule({
  declarations: [
    AppComponent,
    ResturantsListComponent,
    charDashString,
    RestaurantFilterPipe,
    StarRatingComponent,   
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule   ,
    AppRoutingModule
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
