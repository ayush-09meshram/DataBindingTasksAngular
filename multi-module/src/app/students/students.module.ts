import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentSummaryComponent } from './student-summary/student-summary.component';
import { StudentRegisterComponent } from './student-register/student-register.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StudentSummaryComponent, StudentRegisterComponent],
exports: [ StudentSummaryComponent, StudentRegisterComponent ],
bootstrap: [ StudentSummaryComponent ]
})
export class StudentsModule { }
