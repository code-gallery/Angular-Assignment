import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http:HttpClient) { }


  // Get method to fecth the details 
  getUserDetails() {
    return this.http.get
    ('http://localhost:7000/users/list');         
  }

   // Post method to fecth the details 
   addUserDetails(data:any) {
    const headers = { 'Content-Type': 'application/json'};
    this.http.post
    ('http://localhost:7000/users/create',data, { headers }).subscribe({
        next: res => {
          console.error('Data added!', res);
        },
        error: error => {
            console.error('There was an error!', error);
        }
    })         
  }

// Post // put // Implementation 

}
