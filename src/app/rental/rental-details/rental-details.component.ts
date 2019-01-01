import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RentalService} from '../shared/rental.service';
import {Rental} from '../shared/rental.model';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.component.html',
  styleUrls: ['./rental-details.component.scss']
})
export class RentalDetailsComponent implements OnInit {

  currentId: string;
  rental: Rental = new Rental();

  constructor(private route: ActivatedRoute,
              private rentalService: RentalService) {
  }

  ngOnInit() {

    this.route.params.subscribe((params) => {

      console.log(params);
      // this.currentId = params['rentalId'];
      // console.log(this.currentId);
      this.getRentalDetails(params['rentalId']);
    });
  }

  getRentalDetails(rentalId: string): void {
    this.rentalService.getRentalById(rentalId).subscribe((rental: Rental) => {
      this.rental = rental;
    });


  }

}
