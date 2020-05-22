import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import * as fromRoot from '../../logo-common/state';
import { PersonalPageActions } from '../actions';
import { map, take, distinctUntilChanged } from 'rxjs/operators';
import { merge, Observable } from 'rxjs';
import { Personal } from '../../logo-common/interfaces/personal-info.interface';
// ...

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  title = 'Personal Information';
  step = 1;
  person$: Observable<any>;
  personal: Personal;
  name: string;
  
  personalInform = this.fb.group({
    firstName: [null, [Validators.required]],
    lastName: [null, [Validators.required]],
    phone: [null, [Validators.required]],
    email: [null, [Validators.required]]
  }, {
    updateOn: 'blur'
  });

  firstNameCtrl = this.personalInform.get('firstName');
  lastNameCtrl = this.personalInform.get('lastName');
  phoneCtrl = this.personalInform.get('phone');
  emailCtrl = this.personalInform.get('email');
  submitted = false;
  
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit() {
    // 3) Get the last state of the personal data and patch the form with it
    this.store
      .select(fromRoot.selectPersonalGroupData)
      .pipe(take(1))
      .subscribe((personal: Personal) =>
        this.personalInform.patchValue(personal, { emitEvent: false }) 
      );

      this.person$ = this.store.pipe(select(fromRoot.selectPersonalGroupData))
      this.person$.subscribe( res => {
        if(res && res.personal){
          this.personal = res.personal;
        }
      });

      this.person$.forEach(namee => {
        if(namee.firstName && namee.lastName && namee.phone && namee.email){
          this.name = namee.firstName;
        }
      });
    

    // 4) For each field create an observable that maps the change as a key value
    const firstName$ = this.firstNameCtrl.valueChanges.pipe(
      map((firstName: string) => ({ firstName } as Partial<Personal>))
    );
    const lastName$ = this.lastNameCtrl.valueChanges.pipe(
      map((lastName: string) => ({ lastName } as Partial<Personal>))
    );
    const phone$ = this.phoneCtrl.valueChanges.pipe(
      map((phone: string) => ({ phone } as Partial<Personal>))
    );
    const email$ = this.emailCtrl.valueChanges.pipe(
      map((email: string) => ({ email } as Partial<Personal>))
    );

    // 5) For each change trigger an action to update the store
    merge(firstName$, lastName$, phone$, email$).subscribe(
      (payload: Partial<Personal>) => {
        this.store.dispatch(PersonalPageActions.patch({ payload }));
      }
    );

    // 6) If the validaty status of the form changes dispatch an action to the store
    this.personalInform.valueChanges
      .pipe(
        map(() => this.personalInform.valid),
        distinctUntilChanged()
      )
      .subscribe((isValid: boolean) =>
        this.store.dispatch(
          PersonalPageActions.changeValidationStatus({ isValid })
        )
      );
  }
  moveToNext() {
    if (this.personalInform.invalid) {
      this.submitted = true;
      return;
    }

    this.router.navigate(['legal-info']);
  }

}
