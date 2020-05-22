import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';


const routes: Routes = [
  {
    path: 'personal-info',
    loadChildren: () =>
      import('./personal-information/personal-information.module').then(m => m.PersonalInformationModule)
  },
  {
    path: 'legal-info',
    loadChildren: () =>
      import('./legal-info/legal-info.module').then(m => m.LegalInfoModule)
  },
  {
    path: 'company-info',
    loadChildren: () =>
      import('./company-info/company-info.module').then(m => m.CompanyInfoModule)
  },
  {
    path: 'display',
    component: DisplayComponent
  },
  {
    path: '', redirectTo: 'personal-info', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
