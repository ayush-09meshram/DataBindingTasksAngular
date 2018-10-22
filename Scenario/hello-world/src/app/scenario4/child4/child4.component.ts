import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component implements OnInit {

  message: string = "Hey parents!"

  @Output() messageEvent = new EventEmitter<String>();

  sendMessage(){
  this.messageEvent.emit(this.message)
  }

  constructor() { }

  ngOnInit() {
  }

}
