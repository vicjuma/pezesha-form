import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import * as fromPersonal from './personal-info.reducer';
import * as fromLegal from './legal-info.reducer';
import * as fromCompany from './company-info.reducer';
import { PersonalGroup } from '../models/personal-info.model';
import { LegalGroup } from '../models/legal-info.model';
import {CompanyGroup } from '../models/company-info.model';


export interface State {
  personal: PersonalGroup;
  legal: LegalGroup;
  company: CompanyGroup;
}

export const reducers: ActionReducerMap<State> = {
  personal: fromPersonal.reducer,
  legal: fromLegal.reducer,
  company: fromCompany.reducer
};

export const metaReducers: MetaReducer<State>[] = [];

export const selectPersonalGroup = (state: State) => state.personal;
export const selectPersonalGroupData = createSelector(
  selectPersonalGroup,
  fromPersonal.selectPersonalGroupData
);
export const selectPersonalGroupIsValid = createSelector(
  selectPersonalGroup,
  fromPersonal.selectPersonalGroupIsValid
);
export const selectLegalGroup = (state: State) => state.legal;
export const selectLegalGroupData = createSelector(
  selectLegalGroup,
  fromLegal.selectLegalGroupData
);
export const selectLegalGroupIsValid = createSelector(
  selectLegalGroup,
  fromLegal.selectLegalGroupIsValid
);

export const selectCompanyGroup = (state: State) => state.company;
export const selectCompanyGroupData = createSelector(
  selectCompanyGroup,
  fromCompany.selectCompanyGroupData
);
export const selectCompanyGroupIsValid = createSelector(
  selectCompanyGroup,
  fromCompany.selectCompanyGroupIsValid
);