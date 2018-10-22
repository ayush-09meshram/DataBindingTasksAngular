import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario1',
  templateUrl: './scenario1.component.html',
  styleUrls: ['./scenario1.component.css'],
 })
export class Scenario1Component implements OnInit {

  onClick(){
  console.log(document.getElementById("name"));
  }

  constructor() { }

  ngOnInit() {
  }

}
