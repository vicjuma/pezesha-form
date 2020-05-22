import { Personal } from '../interfaces/personal-info.interface';
export class PersonalGroup {
  data = {
    firstName: '',
    lastName: '',
    phone: '+2547 12345678',
    email: ''
  } as Personal;
  isValid = false;
}