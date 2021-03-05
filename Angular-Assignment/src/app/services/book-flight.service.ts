import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookFlightService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http:HttpClient) { }

  getFlightDetail() {
    return this.http.get
    ('http://localhost:7001/flights');         
  }

  addBooking(data:any) {
    console.log(data)
    return this.http.post('http://localhost:7002/booking',data)
    .toPromise().then(() => 
       {
            ​​console.log("data successfully added")
       }​​).catch(error => ​​error​​)
  }

  getBookingDetailData(bookingId:any) {
    return this.http.get
    ('http://localhost:7002/booking/'+bookingId);         
  }

  getAllBookingData() {
    return this.http.get
    ('http://localhost:7002/booking/');         
  }

  getFlightName(flightId:any) {
    return this.http.get
    ('http://localhost:7001/flights/'+flightId);         
  }

}
