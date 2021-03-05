import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { BookFlightService } from "../../services/book-flight.service";
import { JsonpClientBackend } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.css']
})
export class FlightDetailComponent implements OnInit {

  constructor(private _httpService:BookFlightService, private logger: NGXLogger,private router: Router) { }

  flightdetailData:any;

  ngOnInit(): void {
    this._httpService.getFlightDetail().subscribe((res:any)=>{
      this.flightdetailData = res;
    })
  }

}
