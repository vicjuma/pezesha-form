import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SharedActionsAttributesModule } from '../shared-actions-attributes/shared-actions-attributes.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DisplayModule } from './../display/display.module';

@NgModule({
  declarations: [PersonalInfoComponent],
  imports: [
    CommonModule,
    SharedActionsAttributesModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: PersonalInfoComponent }]),
    DisplayModule
  ],
  exports: [PersonalInfoComponent]
})
export class PersonalInformationModule { }
