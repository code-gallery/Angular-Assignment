export class User {

    public id:number;
    public first_name:string;
    public last_name:string;
    public email:string;
    public password:string;
    public gender:string;
    public phone_no:number;
    public address:string;
    

    constructor(id:number,first_name:string,last_name:string,email:string,password:string,gender:string,phone_no:number,address:string){
        this.id=id
        this.first_name=first_name;
        this.last_name=last_name;
        this.email=email;
        this.password=password;
        this.gender=gender;
        this.phone_no=phone_no;
        this.address=address;
    }
}
