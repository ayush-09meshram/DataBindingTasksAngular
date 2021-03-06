import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail-component',
  templateUrl: './department-detail-component.component.html',
  styleUrls: ['./department-detail-component.component.css']
})
export class DepartmentDetailComponentComponent implements OnInit {

  public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    /*let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentId = id;*/
    this.route.paramMap.subscribe((params: ParamMap)=>{
    let id = parseInt(params.get('id'));
    this.departmentId = id;
})
  }

  goPrevious(){
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext(){
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  gotoDepartments(){
  let selectedId = this.departmentId ? this.departmentId : null;
  this.router.navigate(['/departments',{id: selectedId}]);
  }

  showOverview(){
  this.router.navigate(['overview'],{relativeTo: this.route})
  }

  showContact(){
  this.router.navigate(['contact'],{relativeTo: this.route})
  }
}
