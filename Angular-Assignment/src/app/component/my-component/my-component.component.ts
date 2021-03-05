import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { NGXLogger } from 'ngx-logger';
import { MyServiceService } from "../../services/my-service.service";

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  custArray:Array<Customer> = new Array();
  //model = new Customer(0,'','','');
  model = new Customer(0,'',0);
  editId:number = 0;

  getData:any;

  constructor(private _httpService:MyServiceService, private logger: NGXLogger) { 
   
  }

  ngOnInit(): void { }

  createCustomer(){
    try{
     

      let arrayLength:number = this.custArray.length;
      let auto_id:number = 1;
      if(arrayLength>0)
       {
          auto_id = this.custArray[this.custArray.length-1].customer_no;
          auto_id++;
       }
        
      this.custArray.push(new Customer(auto_id,this.model.name,this.model.age));
      alert("Record successfully added!");
      this.resetCustomer();
      this.logger.info(JSON.stringify(this.custArray));
    } catch(err){
      this.logger.error("error to create the customer-->"+err);
    }


  }

 
  

  editCustomer(cust_id:number=0){
    
    if(!this.editId) {
      let foundIndex:number = this.custArray.findIndex(x => x.customer_no == cust_id);
      this.model.name = this.custArray[foundIndex].name;
      this.model.age = this.custArray[foundIndex].age;
      this.editId = cust_id;
    } else {
      if(this.editId != cust_id) {
        let foundIndex:number = this.custArray.findIndex(x => x.customer_no == this.editId);
        this.custArray[foundIndex].name=this.model.name;
        this.custArray[foundIndex].age=this.model.age;
        alert("Record successfully edited!");
        this.resetCustomer();
      }
    }
  }

  deleteCustomer(cust_id:number=0){
    const r = confirm("Are you sure want to delete!");
    if (r) 
      this.custArray =  this.custArray.filter(x => x.customer_no != cust_id);
      
  }

  resetCustomer(){
    this.editId = 0;
    this.model.name = '';
    this.model.age = 0; 
  }


  // createUser(){
  //   try{
     
  //     this._httpService.addUserDetails(new Customer(18,this.model.first_name,this.model.last_name,this.model.email));

  //     alert("Record successfully added!");
  //     this.logger.info(JSON.stringify(this.custArray));
  //   } catch(err){
  //     this.logger.error("error to create the customer-->"+err);
  //   }
  // }


  //  getUser(){
  //   this._httpService.getUserDetails().subscribe((res)=>{
  //             console.log(res);
  //             this.getData = res;
    
  //   });
  // }


}
