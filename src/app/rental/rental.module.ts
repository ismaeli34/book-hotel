import {NgModule} from '@angular/core';
import {RentalComponent} from './rental.component';
import {RentalListComponent} from './rental-list/rental-list.component';
import {RentalListItemComponent} from './rental-list-item/rental-list-item.component';
import {CommonModule} from '@angular/common';
import {RentalService} from './shared/rental.service';
import {RouterModule, Routes} from '@angular/router';
import {RentalDetailsComponent} from './rental-details/rental-details.component';
import {HttpClientModule} from '@angular/common/http';
import {NgPipesModule} from 'ngx-pipes';
import {UpperCasePipe} from '../common/pipes/upper-case.pipe';
import {MapModule} from '../common/map/map.module';

const rentalRoutes: Routes = [
  {
    path: 'rentals',
    component: RentalComponent,
    children: [
      {path: '', component: RentalListComponent},
      {path: ':rentalId', component: RentalDetailsComponent}
    ]
  }
];


@NgModule({
  declarations: [
    RentalComponent,
    RentalListComponent,
    RentalListItemComponent,
    RentalDetailsComponent,
    UpperCasePipe,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgPipesModule,
    MapModule,
    RouterModule.forChild(rentalRoutes)],
  providers: [RentalService],
  bootstrap: []
})
export class RentalModule {
}
