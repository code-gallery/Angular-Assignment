import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { NGXLogger } from 'ngx-logger';
import { LoginServiceService } from "../../services/login-service.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../_helpers/must-match.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  //define model
  model = new User(0,'','','','','',0,'');

  loginForm!: FormGroup;
  submitted = false;
  error = false;

  constructor(private _httpService:LoginServiceService, private logger: NGXLogger,private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
      if(localStorage.getItem('session_id')){
        this.router.navigate(['/dashboard']);
      }
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {

    this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

    try{
          this._httpService.checkLogin().subscribe((res:any)=>{
              console.log("this.model.email"+this.model.email);
              if((res[0].email===this.f.email.value) && (res[0].password===this.f.password.value))
                {
                    localStorage.setItem("session_id",res[0].id);
                    console.log("login successfully");
                    //this.router.navigate(['/dashboard']);
                    window.open('/dashboard', '_self')
                }
              else{
                this.error = true;
                console.log("this.error"+this.error)
                localStorage.removeItem("session_id");
                this.submitted = false;
                this.loginForm.reset();
              }
          });
        } catch(err){
          this.logger.error("error to create the customer-->"+err);
        }

    }

}
