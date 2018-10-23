import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

@Output() messageEvent2 = new EventEmitter<String>();

constructor() { }

  ngOnInit() {
  }

  receiveMessage($event){
    this.message = $event
  }

  sendMessage(){
      this.messageEvent2.emit(this.message)
  }




}
