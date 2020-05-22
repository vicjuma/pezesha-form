import { createAction, props } from '@ngrx/store';
import { Company } from '../../logo-common/interfaces/company-info.interface';

export const patch = createAction(
  '[Company Page] Patch Value',
  props<{ payload: Partial<Company> }>()
);

export const changeValidationStatus = createAction(
  '[Company Page] Change Validation Status',
  props<{ isValid: boolean }>()
);

export type Union = ReturnType<typeof patch | typeof changeValidationStatus>;