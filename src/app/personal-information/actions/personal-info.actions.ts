import { createAction, props } from '@ngrx/store';
import { Personal } from '../../logo-common/interfaces/personal-info.interface';

export const patch = createAction(
  '[Personal Page] Patch Value',
  props<{ payload: Partial<Personal> }>()
);

export const changeValidationStatus = createAction(
  '[Personal Page] Change Validation Status',
  props<{ isValid: boolean }>()
);

export type Union = ReturnType<typeof patch | typeof changeValidationStatus>;