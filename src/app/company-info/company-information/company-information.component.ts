import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../logo-common/state';
import { take, map, distinctUntilChanged } from 'rxjs/operators';
import { Company } from '../../logo-common/interfaces/company-info.interface';
import { CompanyPageActions } from './../actions';
import { merge } from 'rxjs';

@Component({
  selector: 'app-company-information',
  templateUrl: './company-information.component.html',
  styleUrls: ['./company-information.component.scss']
})
export class CompanyInformationComponent implements OnInit {
  
  title = 'Company Information';
  step = 3;
  
  companyForm = this.fb.group({
    companyName: [null, [Validators.required]],
    companyLocation: [null, [Validators.required]],
    companyRevenue: [null, [Validators.required]]
  },{
    updateOn: 'blur'
  });

  companyNameCtrl = this.companyForm.get('companyName');
  companyLocationCtrl = this.companyForm.get('companyLocation');
  companyRevenueCtrl = this.companyForm.get('companyRevenue');
  submitted = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit() {
    this.store
      .select(fromRoot.selectCompanyGroupData)
      .pipe(take(1))
      .subscribe((company: Company) =>
        this.companyForm.patchValue(company, { emitEvent: false })
      );

    const companyName$ = this.companyNameCtrl.valueChanges.pipe(
      map((companyName: string) => ({ companyName } as Partial<Company>))
    );
    const companyLocation$ = this.companyLocationCtrl.valueChanges.pipe(
      map((companyLocation: string) => ({ companyLocation } as Partial<Company>))
    );
    const companyRevenue$ = this.companyRevenueCtrl.valueChanges.pipe(
      map((companyRevenue: number) => ({ companyRevenue } as Partial<Company>))
    );
    merge(companyName$, companyLocation$, companyRevenue$).subscribe(
      (payload: Partial<Company>) => {
        this.store.dispatch(CompanyPageActions.patch({ payload }));
      }
    );

    this.companyForm.valueChanges
      .pipe(
        map(() => this.companyForm.valid),
        distinctUntilChanged()
      )
      .subscribe((isValid: boolean) =>
        this.store.dispatch(
          CompanyPageActions.changeValidationStatus({ isValid })
        )
      );
  }
  
  moveToNext() {
    if (this.companyForm.invalid) {
      this.submitted = true;
      return;
    }

    this.router.navigate(['display']);
  }


  moveToPrevious() {
    this.router.navigate(['legal-info']);
  }


}
