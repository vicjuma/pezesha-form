import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../logo-common/state';
import { Legal } from '../../logo-common/interfaces/legal-info.interface';
import { take, map, distinctUntilChanged } from 'rxjs/operators';
import { LegalPageActions } from '../actions';
import { merge } from 'rxjs';

@Component({
  selector: 'app-legal-information',
  templateUrl: './legal-information.component.html',
  styleUrls: ['./legal-information.component.scss']
})
export class LegalInformationComponent implements OnInit {
  title = 'Legal Information';
  step = 2;

  legalForm = this.fb.group({
    nationalID: [null, [Validators.required]],
    kraPin: [null, [Validators.required]]
  },{
    updateOn: 'blur'
  });
  nationalIDCtrl = this.legalForm.get('nationalID');
  kraPinCtrl = this.legalForm.get('kraPin');
  submitted = false;  

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit() {
    this.store
      .select(fromRoot.selectLegalGroupData)
      .pipe(take(1))
      .subscribe((legal: Legal) =>
        this.legalForm.patchValue(legal, { emitEvent: false })
      );

    const nationalID$ = this.nationalIDCtrl.valueChanges.pipe(
      map((nationalid: number) => ({ nationalid } as Partial<Legal>))
    );
    const kraPin$ = this.kraPinCtrl.valueChanges.pipe(
      map((krapin: string) => ({ krapin } as Partial<Legal>))
    );

    merge(nationalID$, kraPin$).subscribe(
      (payload: Partial<Legal>) => {
        this.store.dispatch(LegalPageActions.patch({ payload }));
      }
    );

    this.legalForm.valueChanges
      .pipe(
        map(() => this.legalForm.valid),
        distinctUntilChanged()
      )
      .subscribe((isValid: boolean) =>
        this.store.dispatch(
          LegalPageActions.changeValidationStatus({ isValid })
        )
      );
  }

  moveToNext() {
    if (this.legalForm.invalid) {
      this.submitted = true;
      return;
    }

    this.router.navigate(['company-info']);
  }

  moveToPrevious() {
    this.router.navigate(['personal-info']);
  }
}
