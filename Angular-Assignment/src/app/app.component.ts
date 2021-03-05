import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'welcome coforge-App';

  today = new Date();
  
  //define one more property here
  clickMessage:string ="status";

  //define he Event to bind this click mesg

 onClickkMe(){
   console.log('event fired');
   this.clickMessage = 'training is active';
 }


}
