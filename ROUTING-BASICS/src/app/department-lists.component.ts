import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-lists',
  templateUrl: './department-lists.component.html',
  styleUrls: ['./department-lists.component.css']
})
export class DepartmentListsComponent implements OnInit {

departments = [
{"id":1 "name":"Angular"},
{"id":2 "name":"MongoDB"},
{"id":3 "name":"Node"},
{"id":4 "name":"Ruby"}
]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(department){
  this.router.navigate(['/departments',department.id]);
  }

}
