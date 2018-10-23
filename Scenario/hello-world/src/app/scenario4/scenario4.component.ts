import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario4',
  templateUrl: './scenario4.component.html',
  styleUrls: ['./scenario4.component.css']
})
export class Scenario4Component implements OnInit {

  constructor() { }

  message = "hello-world"

  ngOnInit() {
  }

  recieveMessage($event){
  this.message = $event
  }

}
