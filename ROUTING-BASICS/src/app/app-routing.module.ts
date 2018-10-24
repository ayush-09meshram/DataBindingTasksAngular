import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DepartmentListsComponent } from './department-lists.component';
import { EmployeeListsComponent } from './employee-lists.component';
import { DepartmentDetailComponentComponent } from './department-detail-component/department-detail-component.component';

import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';

const routes: Routes = [
{ path: 'departments', component: DepartmentListsComponent},
{ path: 'departments/:id', component:DepartmentDetailComponentComponent,
children:[ {path: 'overview', component: DepartmentOverviewComponent},
{path: 'contact', component: DepartmentContactComponent}]},
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
export const routingComponents = [DepartmentListsComponent,EmployeeListsComponent, DepartmentDetailComponentComponent, DepartmentOverviewComponent, DepartmentContactComponent]
