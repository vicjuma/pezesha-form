import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoAreaComponent } from './logo-area/logo-area.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [LogoAreaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [LogoAreaComponent]
})
export class LogoCommonModule { }
