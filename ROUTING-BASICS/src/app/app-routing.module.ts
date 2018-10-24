import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DepartmentListsComponent } from './department-lists.component';
import { EmployeeListsComponent } from './employee-lists.component';
import { DepartmentDetailComponentComponent } from './department-detail-component/department-detail-component.component';

const routes: Routes = [
{ path: 'departments', component: DepartmentListsComponent},
{ path: 'departments/:id', component:DepartmentDetailComponentComponent}
{ path: 'employees', component: EmployeeListsComponent}];

@NgModule({
imports:[
RouterModule.forRoot(routes)
],
exports:[
RouterModule
]
})

export class AppRoutingModule{}
export const routingComponents = [DepartmentListsComponent,EmployeeListsComponent, DepartmentDetailComponentComponent]
