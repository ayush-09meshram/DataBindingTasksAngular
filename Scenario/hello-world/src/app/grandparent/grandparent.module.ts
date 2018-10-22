import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FatherComponent } from './father/father.component';
import { SonComponent } from './father/son/son.component';
import { GrandparentComponent } from './grandparent/grandparent.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ GrandparentComponent ]
  declarations: [FatherComponent, SonComponent, GrandparentComponent],

})
export class GrandparentModule { }
