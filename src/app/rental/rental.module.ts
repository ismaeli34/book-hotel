import {NgModule} from '@angular/core';
import {RentalComponent} from './rental.component';
import {RentalListComponent} from './rental-list/rental-list.component';
import {RentalListItemComponent} from './rental-list-item/rental-list-item.component';
import {CommonModule} from '@angular/common';
import {RentalService} from './shared/rental.service';
import {RouterModule, Routes} from '@angular/router';
import {RentalDetailsComponent} from './rental-details/rental-details.component';

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
    RentalDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(rentalRoutes)],
  providers: [RentalService],
  bootstrap: []
})
export class RentalModule {
}
