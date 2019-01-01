import {Component, OnInit} from '@angular/core';
import {RentalService} from '../shared/rental.service';
import {Rental} from '../shared/rental.model';



@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  rentals: Rental[];

  constructor(private rentalService: RentalService) {
  }


  ngOnInit() {
    const rentalsObservable = this.rentalService.getRentals();
    rentalsObservable.subscribe((rentals: Rental[]) => {

      this.rentals = rentals;

      },
      (err) => {

      },
      () => {

      }
    );
  }

}
