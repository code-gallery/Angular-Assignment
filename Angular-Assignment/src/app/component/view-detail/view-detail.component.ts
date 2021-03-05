import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { BookFlightService } from "../../services/book-flight.service";
import { JsonpClientBackend } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {

  constructor(private _httpService:BookFlightService, private logger: NGXLogger,private router: Router, private _Activatedroute:ActivatedRoute) { }

  bookingdetailData:any;
  bookingId:any;

  ngOnInit(): void {

    this.bookingId = this._Activatedroute.snapshot.paramMap.get("id");
    this._httpService.getBookingDetailData(this.bookingId).subscribe((res:any)=>{
      this.bookingdetailData = res;
      this._httpService.getFlightName(res.flightid).subscribe((res1:any)=>{
        this.bookingdetailData.flightName = res1.company;
      })
    })
  }

}
