import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { routingComponents } from './app-routing.module';
import { DepartmentDetailComponentComponent } from './department-detail-component/department-detail-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentListComponent,
    routingComponents,
    DepartmentDetailComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
