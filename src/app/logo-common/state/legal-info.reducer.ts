 
import { createReducer, on } from '@ngrx/store';
import { LegalPageActions } from '../../legal-info/actions';
import { LegalGroup } from '../models/legal-info.model';
import { Legal } from '../interfaces/legal-info.interface';

export interface State {
  data: Legal;
  isValid: boolean;
}

const initialState = new LegalGroup();

const legalReducer = createReducer(
  initialState,
  on(
    LegalPageActions.patch,
    (state: State, action: ReturnType<typeof LegalPageActions.patch>) => ({
      ...state,
      data: { ...state.data, ...action.payload }
    })
  ),
  on(
    LegalPageActions.changeValidationStatus,
    (
      state: State,
      { isValid }: ReturnType<typeof LegalPageActions.changeValidationStatus>
    ) => ({
      ...state,
      isValid
    })
  )
);

export function reducer(state: State, action: LegalPageActions.Union) {
  return legalReducer(state, action);
}

export const selectLegalGroupData = (state: State) => state.data;
export const selectLegalGroupIsValid = (state: State) => state.isValid;