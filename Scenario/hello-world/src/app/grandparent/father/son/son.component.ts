import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {

  message: string = "Hello Grandparent!"

  @Output() messageEvent = new EventEmitter<String>();

sendMessage(){
  this.messageEvent.emit(this.message)
  }


constructor() { }

  ngOnInit() {
  }

}
