import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataComponent } from './data/data.component';
import { DisplayComponent } from './display.component';



@NgModule({
  declarations: [DataComponent, DisplayComponent],
  imports: [
    CommonModule
  ],
  exports: [DataComponent]
})
export class DisplayModule { }
