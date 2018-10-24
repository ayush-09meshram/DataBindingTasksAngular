import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentListsComponent } from './department-lists.component';
import { EmployeeListsComponent } from './employee-lists.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentListComponent,
    DepartmentListsComponent,
    EmployeeListsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
{ path: 'departments', component: DepartmentListsComponent},
{ path: 'employees', component: EmployeeListsComponent}]
)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
