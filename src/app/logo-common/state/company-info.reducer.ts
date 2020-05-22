import { createReducer, on } from '@ngrx/store';
import { CompanyPageActions } from '../../company-info/actions';
import { CompanyGroup } from '../models/company-info.model';
import { Company } from '../interfaces/company-info.interface';

export interface State {
  data: Company;
  isValid: boolean;
}

const initialState = new CompanyGroup();

const companyReducer = createReducer(
  initialState,
  on(
    CompanyPageActions.patch,
    (state: State, action: ReturnType<typeof CompanyPageActions.patch>) => ({
      ...state,
      data: { ...state.data, ...action.payload }
    })
  ),
  on(
    CompanyPageActions.changeValidationStatus,
    (
      state: State,
      {
        isValid
      }: ReturnType<typeof CompanyPageActions.changeValidationStatus>
    ) => ({
      ...state,
      isValid
    })
  )
);

export function reducer(state: State, action: CompanyPageActions.Union) {
  return companyReducer(state, action);
}

export const selectCompanyGroupData = (state: State) => state.data;
export const selectCompanyGroupIsValid = (state: State) => state.isValid;