import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StudentsModule } from './students/students.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, StudentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
