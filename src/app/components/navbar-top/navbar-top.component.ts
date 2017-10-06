import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.css']
})
export class NavbarTopComponent implements OnInit {
  openmenu:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  toggleState(){
    this.openmenu=(this.openmenu==false)?true:false;
  }
  
}
