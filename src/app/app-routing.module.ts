import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResturantsListComponent } from './resturants-list/resturants-list.component';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const route: Route[] = [
  { path: 'restaurants', component: ResturantsListComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }]

@NgModule({
  imports: [
    CommonModule,
     RouterModule.forRoot(route)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
