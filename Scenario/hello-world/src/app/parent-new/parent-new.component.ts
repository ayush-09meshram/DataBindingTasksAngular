import { Component, OnInit, Input, ViewChild,AfterViewInit } from '@angular/core';
import { Sibling1Component } from './sibling1/sibling1.component'

@Component({
  selector: 'app-parent-new',
  templateUrl: './parent-new.component.html',
  styleUrls: ['./parent-new.component.css']
})
export class ParentNewComponent implements OnInit {

message:string;

@ViewChild(Sibling1Component) child;

ngAfterViewInit(){
this.message = this.child.message
}

  constructor() { }

  ngOnInit() {
  }

}
