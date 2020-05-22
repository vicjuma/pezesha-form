import { createAction, props } from '@ngrx/store';
import { Legal } from '../../logo-common/interfaces/legal-info.interface';

export const patch = createAction(
  '[Legal Page] Patch Value',
  props<{ payload: Partial<Legal> }>()
);

export const changeValidationStatus = createAction(
  '[Legal Page] Change Validation Status',
  props<{ isValid: boolean }>()
);

export type Union = ReturnType<typeof patch | typeof changeValidationStatus>;