import { Component, OnInit } from '@angular/core';
import { Booking } from '../../models/booking';
import { NGXLogger } from 'ngx-logger';
import { BookFlightService } from "../../services/book-flight.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../_helpers/must-match.validator';
import { JsonpClientBackend } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {


  //define model
  bookingmodel = new Booking(
    0,0,0,'','','','','',0,'','',[],''
  );

  searchFlag = true;
  flightDetailFlag = false;
  checkoutFlag = false;

  searchFlightForm!: FormGroup;
  submitted = false;
  error = false;
  getFlightData:any;
  flightFoundFlag=false;



  checkoutForm!: FormGroup;
  submittedCheckout = false;

  constructor(private _httpService:BookFlightService, private logger: NGXLogger,private formBuilder: FormBuilder,private router: Router) { 

  }

  ngOnInit(): void {
    
    this.searchFlight(0);
    this.searchFlightForm = this.formBuilder.group({
      oneway: ['', Validators.required],
      travellers: ['', Validators.required],
      flightclass: ['', Validators.required],
      flightfrom: ['', Validators.required],
      flightto: ['', Validators.required],
      departure: ['', Validators.required],
      return: ['', Validators.required]
    });

    this.checkoutForm = this.formBuilder.group({
      personFirstName: ['', Validators.required],
      personLastName: ['', Validators.required],
      personMobile: ['', Validators.required],
      personEmail: ['', [Validators.required, Validators.email]],
      personGender: ['', Validators.required],
      personAge: ['', Validators.required],
      paymentDetail: ['', Validators.required],
    });
  }
  
  numSequence(n: number): Array<number> { 
    return Array(n); 
  } 

  // convenience getter for easy access to form fields
  get bookf() { return this.searchFlightForm.controls; }

  get cf() { return this.checkoutForm.controls; }

  onSubmit() {

    this.submitted = true;

      // stop here if form is invalid
      if (this.searchFlightForm.invalid) {
          return;
      }
    
    this.bookingmodel.trip = this.bookf.oneway.value
    this.bookingmodel.flightfrom = this.bookf.flightfrom.value
    this.bookingmodel.flightto = this.bookf.flightto.value
    this.bookingmodel.departuredate = this.bookf.departure.value
    this.bookingmodel.returndate = this.bookf.return.value
    this.bookingmodel.travellers = Number(this.bookf.travellers.value)
    this.bookingmodel.flightclass = this.bookf.flightclass.value
    console.log("this.bookingmodel"+JSON.stringify(this.bookingmodel))
    this.searchFlight(1);

  }

  loadFlightData() {
    this._httpService.getFlightDetail().subscribe((res:any)=>{
      console.log(res);
      let flightDetail:any=[];
      res.forEach((data:any) => {
         if((data.origin===this.bookingmodel.flightfrom) && (data.destination===this.bookingmodel.flightto))
         flightDetail.push(data)
      })
     
      this.getFlightData = [...flightDetail]
      console.log("this.getFlightData.length"+this.getFlightData.length);
      if(this.getFlightData.length > 0){
        this.flightFoundFlag = true;
      }
    })
  }

  searchFlight(count:number,flightId:number=1){
    if(count==0) {
      this.searchFlag = true;
      this.flightDetailFlag = false
      this.checkoutFlag = false
    }
    else if(count==1) {
      this.searchFlag = false;
      this.flightDetailFlag = true
      this.loadFlightData();
    }
    else {
      this.bookingmodel.flightid = flightId;
      console.log("this.bookingmodel"+JSON.stringify(this.bookingmodel))
      this.searchFlag = false;
      this.flightDetailFlag = false
      this.checkoutFlag = true

    }
  }

  //////Click on checkout////////////////
  onCheckoutSubmit() {
    this.submittedCheckout = true;
      // stop here if form is invalid
      if (this.checkoutForm.invalid) {
          return;
      }
      this.bookingmodel.userid = Number(localStorage.getItem('session_id'))
      this.bookingmodel.persondetail = [this.checkoutForm.value];
      this.bookingmodel.paymentType = this.cf.paymentDetail.value;
      this.bookingmodel.ticketno = "TN-"+Number(new Date())
      this.bookingmodel.id = Number(new Date())
      console.log("this.bookingmodel"+JSON.stringify(this.bookingmodel))

  
      try{
        this._httpService.addBooking(this.bookingmodel);
        this.logger.info("Record added");
        this.router.navigate(['/booking-detail/'+this.bookingmodel.id]);
      } catch(err){
        this.logger.error("error to create the customer-->"+err);
      }
  }

}
