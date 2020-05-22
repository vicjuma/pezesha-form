import { Company } from '../interfaces/company-info.interface'

export class CompanyGroup {
  data = {
    companyName: '',
    companyLocation: '',
    companyRevenue: 2500
  } as Company;
  isValid = false;
}