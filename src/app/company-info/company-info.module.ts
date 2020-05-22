import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyInformationComponent } from './company-information/company-information.component';
import { SharedActionsAttributesModule } from '../shared-actions-attributes/shared-actions-attributes.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [CompanyInformationComponent],
  imports: [
    CommonModule,
    SharedActionsAttributesModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: CompanyInformationComponent }])
  ],
  exports: [CompanyInformationComponent]
})
export class CompanyInfoModule { }
