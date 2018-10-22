import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scenario32',
  templateUrl: './scenario32.component.html',
  styleUrls: ['./scenario32.component.css']

})
export class Scenario32Component implements OnInit {


@Input() message: string;


  constructor() { }

  ngOnInit() {
  }

}
