import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  rightSide = false;
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('session_id')){
      this.rightSide = true;
    }
  }

}
