import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }

  // Get method to fecth the details 
  checkLogin() {
    return this.http.get
    ('http://localhost:7000/users');         
  }

}
