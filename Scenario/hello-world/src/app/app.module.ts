import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GrandparentModule } from './grandparent/grandparent.module';

import { AppComponent } from './app.component';
import { Scenario1Component } from './scenario1/scenario1.component';
import { Scenario2Component } from './scenario2/scenario2.component';
import { Scenario3Component } from './scenario3/scenario3.component';
import { Scenario32Component } from './scenario3/scenario32/scenario32.component';
import { Scenario4Component } from './scenario4/scenario4.component';
import { Child4Component } from './scenario4/child4/child4.component';

@NgModule({
  declarations: [
    AppComponent,
    Scenario1Component,
    Scenario2Component,
    Scenario3Component,
    Scenario32Component,
    Scenario4Component,
    Child4Component,
    GrandparentComponent
  ],
  imports: [
    BrowserModule, GrandparentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
