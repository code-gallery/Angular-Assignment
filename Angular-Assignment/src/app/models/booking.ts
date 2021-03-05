export class Booking {

    public id:number;
    public flightid:number;
    public userid:number;
    public trip:string;
    public flightfrom:string;
    public flightto:string;
    public departuredate:string;
    public returndate:string;
    public travellers:number;
    public flightclass:string;
    public ticketno:string;
    public persondetail:any;
    public paymentType:string;
    

    constructor(id:number,flightid:number,userid:number,trip:string,flightfrom:string,flightto:string,
        departuredate:string,returndate:string,travellers:number,flightclass:string,
        ticketno:string,persondetail:any,paymentType:string){
   
        this.id=id;
        this.flightid=flightid;
        this.userid=userid;
        this.trip=trip;
        this.flightfrom=flightfrom;
        this.flightto=flightto;
        this.departuredate=departuredate;
        this.returndate=returndate;
        this.travellers=travellers;
        this.flightclass=flightclass;
        this.ticketno=ticketno;
        this.persondetail=persondetail;
        this.paymentType=paymentType;
    }
}
