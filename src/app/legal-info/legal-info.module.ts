import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalInformationComponent } from './legal-information/legal-information.component';
import { SharedActionsAttributesModule } from '../shared-actions-attributes/shared-actions-attributes.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [LegalInformationComponent],
  imports: [
    CommonModule,
    SharedActionsAttributesModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: LegalInformationComponent }])
  ],
  exports: [
    LegalInformationComponent
  ]
})
export class LegalInfoModule { }
