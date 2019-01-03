import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Rental} from './rental.model';
// import {rentals} from '../../app.constants';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RentalService {
  // rentalDetails = rentals;
  rental: Rental[] = [];


  constructor(private httpClient: HttpClient) {
  }

  public getRentalById(rentalId: string): Observable<any> {
    console.log(this.httpClient.get('/api/v1/rentals/' + rentalId));
    return this.httpClient.get('/api/v1/rentals/' + rentalId);

  }

  public getRentals(): Observable<any> {
console.log(this.httpClient.get('/api/v1/rentals'));
    return this.httpClient.get('/api/v1/rentals');


  }
}
