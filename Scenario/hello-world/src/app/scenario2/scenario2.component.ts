import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario2',
  templateUrl: './scenario2.component.html',
  styleUrls: ['./scenario2.component.css'],

})
export class Scenario2Component implements OnInit {

values = '';

onKey(event: any) { // without type info
    this.values = event.target.value;
  }

  constructor() { }

  ngOnInit() {
  }

}
