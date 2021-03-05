import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { BookFlightService } from "../../services/book-flight.service";
import { JsonpClientBackend } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {

  constructor(private _httpService:BookFlightService, private logger: NGXLogger,private router: Router) { }

  bookingdetailData:any;
  bookingArray:any=[];

  ngOnInit(): void {
    this._httpService.getAllBookingData().subscribe((res:any)=>{
      this.bookingdetailData = res;
      this._httpService.getFlightName(res.flightid).subscribe((res1:any)=>{
      

        this.bookingdetailData.forEach((data:any) => {
          data.flightName = res1.company;
         if(data.userid===localStorage.getItem('session_id'))
         this.bookingArray.push(data)
        })

        this.bookingdetailData = [...this.bookingArray];

      })
    })
  }

}
